import {
  leftIcons,
  leftLabels,
  rightIcons,
  rightLabels,
} from "./icons";
import type {
  FlowColors,
  FlowHandle,
  FlowOptions,
  Layout,
  Point,
} from "./flow.types";

const TWO_PI = Math.PI * 2;
const ENTRANCE_MS = 2400;
const PARTICLE_RADIUS = 4.5;
const PARTICLES_PER_EDGE = 2;

const BRAND_PATHS = [
  { d: "M0 99.9962V77.7264C0 67.7853 8.22178 59.3666 17.8433 61.8671C40.6303 67.789 51.488 84.9756 55.8352 100.448C58.5005 109.934 50.3467 117.996 40.4933 117.996H18C8.05888 117.996 0 109.937 0 99.9962Z", color: "#F0544F" },
  { d: "M0 18V40.2697C0 50.2108 8.22178 58.6295 17.8433 56.129C40.6303 50.2071 51.488 33.0206 55.8352 17.5485C58.5005 8.06239 50.3467 0 40.4933 0H18C8.05888 0 0 8.05885 0 18Z", color: "#7297C0" },
  { d: "M118 99.9962V77.7264C118 67.7853 109.778 59.3666 100.157 61.8671C77.3697 67.789 66.512 84.9756 62.1648 100.448C59.4995 109.934 67.6533 117.996 77.5067 117.996H100C109.941 117.996 118 109.937 118 99.9962Z", color: "#355146" },
  { d: "M118 18V40.2697C118 50.2108 109.778 58.6295 100.157 56.129C77.3697 50.2071 66.512 33.0206 62.1648 17.5485C59.4995 8.06239 67.6533 0 77.5067 0H100C109.941 0 118 8.05885 118 18Z", color: "#11769A" },
] as const;

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - 2 ** (-10 * t);
}

function easeOutCubic(t: number) {
  const u = 1 - t;
  return 1 - u * u * u;
}

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function buildBezierPath(
  x1: number, y1: number,
  x2: number, y2: number,
  segments: number,
): Point[] {
  const pts: Point[] = new Array(segments + 1);
  const dx = x2 - x1;
  const cpx1 = x1 + dx * 0.45;
  const cpx2 = x2 - dx * 0.45;
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const it = 1 - t;
    const it2 = it * it;
    const t2 = t * t;
    pts[i] = {
      x: it2 * it * x1 + 3 * it2 * t * cpx1 + 3 * it * t2 * cpx2 + t2 * t * x2,
      y: it2 * it * y1 + 3 * it2 * t * y1 + 3 * it * t2 * y2 + t2 * t * y2,
    };
  }
  return pts;
}

interface Particle {
  path: Point[];
  delay: number;
  speed: number;
  progress: number;
}

export function createFlow(
  canvas: HTMLCanvasElement,
  options: FlowOptions,
): FlowHandle {
  const ctx = canvas.getContext("2d");
  if (!ctx) return { destroy() {}, setColors() {} };
  const c = ctx;

  const container = canvas.parentElement;
  if (!container) return { destroy() {}, setColors() {} };

  let colors: FlowColors = options.colors;
  const reducedMotion = options.reducedMotion;
  const speedScale = reducedMotion ? 0.5 : 1;

  const brandPath2Ds = BRAND_PATHS.map(({ d, color }) => ({
    path: new Path2D(d),
    color,
  }));

  let W = 0;
  let H = 0;
  let dpr = 1;
  let startTime: number | null = null;
  let lastTime = 0;
  let rafId: number | null = null;
  let paused = false;

  // Cached per-resize
  let layout: Layout;
  let leftPaths: Point[][] = [];
  let rightPaths: Point[][] = [];
  let leftCurveP2D: Path2D[] = [];
  let rightCurveP2D: Path2D[] = [];
  let particles: Particle[] = [];
  let iconFont = "";
  let pillFont = "";

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = container!.clientWidth;
    H = container!.clientHeight;
    if (W <= 0 || H <= 0) return;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function computeLayout(): Layout {
    const mx = W * 0.5;
    const my = H * 0.5;
    const cardW = Math.max(120, Math.min(148, W * 0.14));
    const cardH = Math.max(120, Math.min(148, H * 0.35));
    const leftX = W * 0.1;
    const rightX = W * 0.9;
    const iconR = Math.max(16, Math.min(19, W * 0.018));

    const labelClearance = iconR + 18;
    const maxSpread = Math.max(120, H - labelClearance * 2);

    const leftPositions = leftLabels.map((_, i) => {
      const t = i / (leftLabels.length - 1) - 0.5;
      return { x: leftX + Math.sin(t * 0.5) * W * 0.02, y: my + t * maxSpread };
    });

    const rightPositions = rightLabels.map((_, i) => {
      const t = i / (rightLabels.length - 1) - 0.5;
      return { x: rightX + Math.sin(t * 0.4) * W * 0.02, y: my + t * maxSpread };
    });

    return {
      mx, my, cardW, cardH, iconR,
      leftPositions, rightPositions,
      connectX: mx - cardW * 0.5 - W * 0.05,
      deployX: mx + cardW * 0.5 + W * 0.05,
    };
  }

  function buildPaths() {
    layout = computeLayout();
    const { iconR, connectX, deployX, my } = layout;
    const SEG = 80;

    leftPaths = layout.leftPositions.map((p) =>
      buildBezierPath(p.x + iconR, p.y, connectX, my, SEG),
    );
    rightPaths = layout.rightPositions.map((p) =>
      buildBezierPath(deployX, my, p.x - iconR, p.y, SEG),
    );

    // Pre-build Path2D for fully-drawn curves (used after entrance)
    leftCurveP2D = leftPaths.map((pts) => {
      const pd = new Path2D();
      pd.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) pd.lineTo(pts[i].x, pts[i].y);
      return pd;
    });
    rightCurveP2D = rightPaths.map((pts) => {
      const pd = new Path2D();
      pd.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) pd.lineTo(pts[i].x, pts[i].y);
      return pd;
    });

    particles = [];
    leftPaths.forEach((path, i) => {
      for (let j = 0; j < PARTICLES_PER_EDGE; j++) {
        const delay = i * 0.08 + j * 0.4;
        particles.push({ path, delay, speed: 0.55 + Math.random() * 0.15, progress: -delay });
      }
    });
    rightPaths.forEach((path, i) => {
      for (let j = 0; j < PARTICLES_PER_EDGE; j++) {
        const delay = i * 0.07 + j * 0.35;
        particles.push({ path, delay, speed: 0.55 + Math.random() * 0.15, progress: -delay });
      }
    });

    iconFont = `600 ${Math.max(10, Math.min(12, W * 0.0075))}px "Uncut Sans",Inter,system-ui,sans-serif`;
    pillFont = `600 ${Math.max(8, W * 0.006)}px "Uncut Sans",Inter,system-ui,sans-serif`;
  }

  // ─── Drawing helpers ─────────────────────────────────────────────

  function drawIconCircle(
    x: number, y: number, r: number,
    drawFn: (typeof leftIcons)[number],
    alpha: number, pulse: number,
  ) {
    c.save();
    c.globalAlpha = alpha;
    const sc = 1 + pulse * 0.04;
    c.translate(x, y);
    c.scale(sc, sc);
    c.translate(-x, -y);

    c.shadowColor = colors.shadowColor;
    c.shadowBlur = 12;
    c.shadowOffsetY = 3;
    c.fillStyle = colors.iconBg;
    c.beginPath();
    c.arc(x, y, r, 0, TWO_PI);
    c.fill();

    c.shadowColor = "transparent";
    c.strokeStyle = colors.iconBorder;
    c.lineWidth = 1;
    c.stroke();

    drawFn(c, x, y, r / 24, colors.iconStroke);
    c.restore();
  }

  function drawIconLabel(x: number, y: number, r: number, label: string, alpha: number) {
    c.save();
    c.globalAlpha = alpha;
    c.fillStyle = colors.label;
    c.font = iconFont;
    c.textAlign = "center";
    c.textBaseline = "top";
    c.fillText(label, x, y + r + 5);
    c.restore();
  }

  function drawPill(x: number, y: number, text: string, alpha: number) {
    c.save();
    c.globalAlpha = alpha;
    c.font = pillFont;
    const pw = c.measureText(text).width + 16;
    const ph = 20;
    const rr = ph / 2;

    c.fillStyle = colors.pillBg;
    c.beginPath();
    c.moveTo(x - pw / 2 + rr, y - ph / 2);
    c.lineTo(x + pw / 2 - rr, y - ph / 2);
    c.arc(x + pw / 2 - rr, y, rr, -Math.PI / 2, Math.PI / 2);
    c.lineTo(x - pw / 2 + rr, y + ph / 2);
    c.arc(x - pw / 2 + rr, y, rr, Math.PI / 2, -Math.PI / 2);
    c.closePath();
    c.fill();

    c.fillStyle = colors.pillText;
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(text, x, y + 0.5);
    c.restore();
  }

  function drawCenterCard(x: number, cy: number, w: number, h: number, alpha: number) {
    c.save();
    c.globalAlpha = alpha;
    const r = 16;

    c.shadowColor = colors.shadowColor;
    c.shadowBlur = 24;
    c.shadowOffsetY = 6;
    c.fillStyle = colors.cardBg;
    c.beginPath();
    c.moveTo(x - w / 2 + r, cy - h / 2);
    c.lineTo(x + w / 2 - r, cy - h / 2);
    c.quadraticCurveTo(x + w / 2, cy - h / 2, x + w / 2, cy - h / 2 + r);
    c.lineTo(x + w / 2, cy + h / 2 - r);
    c.quadraticCurveTo(x + w / 2, cy + h / 2, x + w / 2 - r, cy + h / 2);
    c.lineTo(x - w / 2 + r, cy + h / 2);
    c.quadraticCurveTo(x - w / 2, cy + h / 2, x - w / 2, cy + h / 2 - r);
    c.lineTo(x - w / 2, cy - h / 2 + r);
    c.quadraticCurveTo(x - w / 2, cy - h / 2, x - w / 2 + r, cy - h / 2);
    c.closePath();
    c.fill();

    c.shadowColor = "transparent";
    c.strokeStyle = colors.cardBorder;
    c.lineWidth = 1;
    c.stroke();

    const markSize = Math.min(h - 32, w - 32, 64);
    const markScale = markSize / 118;
    c.save();
    c.translate(x, cy);
    c.scale(markScale, markScale);
    c.translate(-59, -59);
    for (const bp of brandPath2Ds) {
      c.fillStyle = bp.color;
      c.fill(bp.path);
    }
    c.restore();

    c.restore();
  }

  function drawParticle(p: Particle) {
    if (p.progress < 0 || p.progress > 1) return;
    const idx = Math.floor(p.progress * (p.path.length - 1));
    const pt = p.path[Math.min(idx, p.path.length - 1)];
    c.fillStyle = colors.accent;
    c.beginPath();
    c.arc(pt.x, pt.y, PARTICLE_RADIUS, 0, TWO_PI);
    c.fill();
  }

  // ─── Render loop ─────────────────────────────────────────────────

  function render(timestamp: number) {
    rafId = requestAnimationFrame(render);
    if (paused) { lastTime = timestamp; return; }
    if (startTime === null) { startTime = timestamp; lastTime = timestamp; }

    const elapsed = timestamp - startTime;
    const dt = Math.min(0.05, (timestamp - lastTime) / 1000);
    lastTime = timestamp;

    if (W <= 0 || H <= 0) return;
    c.clearRect(0, 0, W, H);

    const L = layout;
    const entranceT = reducedMotion ? 1 : Math.min(elapsed / ENTRANCE_MS, 1);
    const entranceDone = entranceT >= 1;

    // ── Icons ──
    L.leftPositions.forEach((p, i) => {
      const t = entranceDone ? 1 : easeOutExpo(clamp01((entranceT - i * 0.05) / 0.3));
      const pulse = entranceDone && !reducedMotion
        ? Math.sin(elapsed * 0.0015 + i * 1.2) * 0.5 + 0.5 : 0;
      drawIconCircle(p.x, p.y, L.iconR, leftIcons[i], t, pulse);
      drawIconLabel(p.x, p.y, L.iconR, leftLabels[i], t);
    });

    L.rightPositions.forEach((p, i) => {
      const t = entranceDone ? 1 : easeOutExpo(clamp01((entranceT - 0.5 - i * 0.04) / 0.3));
      const pulse = entranceDone && !reducedMotion
        ? Math.sin(elapsed * 0.0015 + i * 1.5 + 3) * 0.5 + 0.5 : 0;
      drawIconCircle(p.x, p.y, L.iconR, rightIcons[i], t, pulse);
      drawIconLabel(p.x, p.y, L.iconR, rightLabels[i], t);
    });

    // ── Curves ──
    c.strokeStyle = colors.line;
    c.lineWidth = 1;

    if (entranceDone) {
      // Fast path: stroke pre-built Path2D objects
      for (const pd of leftCurveP2D) c.stroke(pd);
      for (const pd of rightCurveP2D) c.stroke(pd);
    } else {
      const curveT = easeOutCubic(clamp01((entranceT - 0.15) / 0.5));
      if (curveT > 0) {
        leftPaths.forEach((pts) => {
          const endIdx = Math.floor(curveT * (pts.length - 1));
          c.beginPath();
          c.moveTo(pts[0].x, pts[0].y);
          for (let i = 1; i <= endIdx; i++) c.lineTo(pts[i].x, pts[i].y);
          c.stroke();
        });
      }
      const curveT2 = easeOutCubic(clamp01((entranceT - 0.5) / 0.4));
      if (curveT2 > 0) {
        rightPaths.forEach((pts) => {
          const endIdx = Math.floor(curveT2 * (pts.length - 1));
          c.beginPath();
          c.moveTo(pts[0].x, pts[0].y);
          for (let i = 1; i <= endIdx; i++) c.lineTo(pts[i].x, pts[i].y);
          c.stroke();
        });
      }
    }

    // ── Particles (behind pills & card) ──
    if (entranceT >= 0.7) {
      const pAlpha = entranceDone ? 1 : Math.min(1, (entranceT - 0.7) / 0.3);
      c.globalAlpha = pAlpha;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.progress += dt * p.speed * speedScale;
        if (p.progress > 1) p.progress -= 1 + p.delay * p.speed;
        drawParticle(p);
      }
      c.globalAlpha = 1;
    }

    // ── Pills ──
    const pillAlpha = entranceDone ? 1 : easeOutExpo(clamp01((entranceT - 0.35) / 0.3));
    drawPill(L.connectX, L.my, "CONNECT", pillAlpha);
    const pillAlpha2 = entranceDone ? 1 : easeOutExpo(clamp01((entranceT - 0.55) / 0.3));
    drawPill(L.deployX, L.my, "DEPLOY", pillAlpha2);

    // ── Center card ──
    const cardAlpha = entranceDone ? 1 : easeOutExpo(clamp01((entranceT - 0.35) / 0.35));
    const bobY = entranceDone && !reducedMotion ? Math.sin(elapsed * 0.002) * 2 : 0;
    drawCenterCard(L.mx, L.my + bobY, L.cardW, L.cardH, cardAlpha);
  }

  // ─── Lifecycle ───────────────────────────────────────────────────

  const ro = new ResizeObserver(() => { resize(); buildPaths(); });
  ro.observe(container);

  const onVisibility = () => { paused = document.hidden; };
  document.addEventListener("visibilitychange", onVisibility);

  resize();
  buildPaths();
  rafId = requestAnimationFrame(render);

  return {
    destroy() {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (W > 0 && H > 0) c.clearRect(0, 0, W, H);
    },
    setColors(next) { colors = next; },
  };
}
