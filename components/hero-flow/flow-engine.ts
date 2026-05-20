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

const ENTRANCE_DURATION = 2400;

// Zenqbit brand mark paths (extracted from public/favicon-logo.svg).
// Source viewBox is 0 0 118 118.
// Path2D is lazy-initialized inside createFlow because it is a browser API.
const BRAND_PATH_STRINGS = {
  bottomLeft: {
    d: "M0 99.9962V77.7264C0 67.7853 8.22178 59.3666 17.8433 61.8671C40.6303 67.789 51.488 84.9756 55.8352 100.448C58.5005 109.934 50.3467 117.996 40.4933 117.996H18C8.05888 117.996 0 109.937 0 99.9962Z",
    color: "#F0544F",
  },
  topLeft: {
    d: "M0 18V40.2697C0 50.2108 8.22178 58.6295 17.8433 56.129C40.6303 50.2071 51.488 33.0206 55.8352 17.5485C58.5005 8.06239 50.3467 0 40.4933 0H18C8.05888 0 0 8.05885 0 18Z",
    color: "#7297C0",
  },
  bottomRight: {
    d: "M118 99.9962V77.7264C118 67.7853 109.778 59.3666 100.157 61.8671C77.3697 67.789 66.512 84.9756 62.1648 100.448C59.4995 109.934 67.6533 117.996 77.5067 117.996H100C109.941 117.996 118 109.937 118 99.9962Z",
    color: "#355146",
  },
  topRight: {
    d: "M118 18V40.2697C118 50.2108 109.778 58.6295 100.157 56.129C77.3697 50.2071 66.512 33.0206 62.1648 17.5485C59.4995 8.06239 67.6533 0 77.5067 0H100C109.941 0 118 8.05885 118 18Z",
    color: "#11769A",
  },
} as const;

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

// Proper cubic bezier that curves on BOTH axes (fixes prototype bug).
// Control points sit on the same Y as the endpoints to create a horizontal
// S-curve that matches the visual target of the reference.
function getCurvePoints(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  segments = 80,
): Point[] {
  const pts: Point[] = [];
  const cpx1 = x1 + (x2 - x1) * 0.45;
  const cpx2 = x2 - (x2 - x1) * 0.45;
  const cpy1 = y1;
  const cpy2 = y2;
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const it = 1 - t;
    const px =
      it * it * it * x1 +
      3 * it * it * t * cpx1 +
      3 * it * t * t * cpx2 +
      t * t * t * x2;
    const py =
      it * it * it * y1 +
      3 * it * it * t * cpy1 +
      3 * it * t * t * cpy2 +
      t * t * t * y2;
    pts.push({ x: px, y: py });
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
  if (!ctx) {
    return {
      destroy: () => {},
      setColors: () => {},
    };
  }

  let colors: FlowColors = options.colors;
  const reducedMotion = options.reducedMotion;

  // Lazy-init brand-mark Path2D objects (browser-only API).
  const brandPaths = {
    bottomLeft: { path: new Path2D(BRAND_PATH_STRINGS.bottomLeft.d), color: BRAND_PATH_STRINGS.bottomLeft.color },
    topLeft: { path: new Path2D(BRAND_PATH_STRINGS.topLeft.d), color: BRAND_PATH_STRINGS.topLeft.color },
    bottomRight: { path: new Path2D(BRAND_PATH_STRINGS.bottomRight.d), color: BRAND_PATH_STRINGS.bottomRight.color },
    topRight: { path: new Path2D(BRAND_PATH_STRINGS.topRight.d), color: BRAND_PATH_STRINGS.topRight.color },
  };

  let W = 0;
  let H = 0;
  let dpr = 1;
  let startTime: number | null = null;
  let lastTime = 0;
  let rafId: number | null = null;
  let particles: Particle[] = [];
  let leftPaths: Point[][] = [];
  let rightPaths: Point[][] = [];
  let paused = false;

  const container = canvas.parentElement;
  if (!container) {
    return {
      destroy: () => {},
      setColors: () => {},
    };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = container!.clientWidth;
    H = container!.clientHeight;
    if (W <= 0 || H <= 0) return;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function getLayout(): Layout {
    const mx = W * 0.5;
    const my = H * 0.5;
    // Card is now sized tight around the brand mark only.
    const cardW = Math.max(120, Math.min(148, W * 0.14));
    const cardH = Math.max(120, Math.min(148, H * 0.35));
    const leftX = W * 0.1;
    const rightX = W * 0.9;
    // Icon size is tuned so 6 icons + labels fit vertically on the right side.
    const iconR = Math.max(16, Math.min(19, W * 0.018));

    // Vertical spread accounts for icon radius + label height so nothing
    // is clipped at the top or bottom of the canvas.
    const labelClearance = iconR + 18;
    const maxSpread = Math.max(120, H - labelClearance * 2);
    const leftPositions = leftLabels.map((_, i) => {
      const t = i / (leftLabels.length - 1) - 0.5;
      return {
        x: leftX + Math.sin(t * 0.5) * W * 0.02,
        y: my + t * maxSpread,
      };
    });

    const rightPositions = rightLabels.map((_, i) => {
      const t = i / (rightLabels.length - 1) - 0.5;
      return {
        x: rightX + Math.sin(t * 0.4) * W * 0.02,
        y: my + t * maxSpread,
      };
    });

    const connectX = mx - cardW * 0.5 - W * 0.05;
    const deployX = mx + cardW * 0.5 + W * 0.05;

    return {
      mx,
      my,
      cardW,
      cardH,
      iconR,
      leftPositions,
      rightPositions,
      connectX,
      deployX,
    };
  }

  function buildPaths() {
    const L = getLayout();
    leftPaths = L.leftPositions.map((p) =>
      getCurvePoints(p.x + L.iconR, p.y, L.connectX, L.my, 100),
    );
    rightPaths = L.rightPositions.map((p) =>
      getCurvePoints(L.deployX, L.my, p.x - L.iconR, p.y, 100),
    );

    particles = [];
    leftPaths.forEach((path, i) => {
      for (let j = 0; j < 2; j++) {
        particles.push({
          path,
          delay: i * 0.08 + j * 0.4,
          speed: 0.55 + Math.random() * 0.15,
          progress: -(i * 0.08 + j * 0.4),
        });
      }
    });
    rightPaths.forEach((path, i) => {
      for (let j = 0; j < 2; j++) {
        particles.push({
          path,
          delay: i * 0.07 + j * 0.35,
          speed: 0.55 + Math.random() * 0.15,
          progress: -(i * 0.07 + j * 0.35),
        });
      }
    });
  }

  function drawIconCircle(
    x: number,
    y: number,
    r: number,
    drawFn: (typeof leftIcons)[number],
    alpha: number,
    pulse: number,
  ) {
    ctx!.save();
    ctx!.globalAlpha = alpha;
    const sc = 1 + pulse * 0.04;
    ctx!.translate(x, y);
    ctx!.scale(sc, sc);
    ctx!.translate(-x, -y);
    ctx!.shadowColor = colors.shadowColor;
    ctx!.shadowBlur = 12;
    ctx!.shadowOffsetY = 3;
    ctx!.fillStyle = colors.iconBg;
    ctx!.beginPath();
    ctx!.arc(x, y, r, 0, Math.PI * 2);
    ctx!.fill();
    ctx!.shadowColor = "transparent";
    ctx!.strokeStyle = colors.iconBorder;
    ctx!.lineWidth = 1;
    ctx!.beginPath();
    ctx!.arc(x, y, r, 0, Math.PI * 2);
    ctx!.stroke();
    drawFn(ctx!, x, y, r / 24, colors.iconStroke);
    ctx!.restore();
  }

  function drawIconLabel(
    x: number,
    y: number,
    r: number,
    label: string,
    alpha: number,
  ) {
    ctx!.save();
    ctx!.globalAlpha = alpha;
    ctx!.fillStyle = colors.label;
    ctx!.font = `600 ${Math.max(10, Math.min(12, W * 0.0075))}px "Uncut Sans", Inter, system-ui, sans-serif`;
    ctx!.textAlign = "center";
    ctx!.textBaseline = "top";
    ctx!.fillText(label, x, y + r + 5);
    ctx!.restore();
  }

  function drawPill(x: number, y: number, text: string, alpha: number) {
    ctx!.save();
    ctx!.globalAlpha = alpha;
    ctx!.font = `600 ${Math.max(8, W * 0.006)}px "Uncut Sans", Inter, system-ui, sans-serif`;
    const m = ctx!.measureText(text);
    const pw = m.width + 16;
    const ph = 20;
    ctx!.fillStyle = colors.pillBg;
    ctx!.beginPath();
    const rr = ph / 2;
    ctx!.moveTo(x - pw / 2 + rr, y - ph / 2);
    ctx!.lineTo(x + pw / 2 - rr, y - ph / 2);
    ctx!.arc(x + pw / 2 - rr, y, rr, -Math.PI / 2, Math.PI / 2);
    ctx!.lineTo(x - pw / 2 + rr, y + ph / 2);
    ctx!.arc(x - pw / 2 + rr, y, rr, Math.PI / 2, -Math.PI / 2);
    ctx!.closePath();
    ctx!.fill();
    ctx!.fillStyle = colors.pillText;
    ctx!.textAlign = "center";
    ctx!.textBaseline = "middle";
    ctx!.fillText(text, x, y + 0.5);
    ctx!.restore();
  }

  function drawCenterCard(
    x: number,
    y: number,
    w: number,
    h: number,
    alpha: number,
    bobY: number,
  ) {
    ctx!.save();
    ctx!.globalAlpha = alpha;
    const cy = y + bobY;
    const r = 16;

    // card background
    ctx!.shadowColor = colors.shadowColor;
    ctx!.shadowBlur = 24;
    ctx!.shadowOffsetY = 6;
    ctx!.fillStyle = colors.cardBg;
    ctx!.beginPath();
    ctx!.moveTo(x - w / 2 + r, cy - h / 2);
    ctx!.lineTo(x + w / 2 - r, cy - h / 2);
    ctx!.quadraticCurveTo(x + w / 2, cy - h / 2, x + w / 2, cy - h / 2 + r);
    ctx!.lineTo(x + w / 2, cy + h / 2 - r);
    ctx!.quadraticCurveTo(x + w / 2, cy + h / 2, x + w / 2 - r, cy + h / 2);
    ctx!.lineTo(x - w / 2 + r, cy + h / 2);
    ctx!.quadraticCurveTo(x - w / 2, cy + h / 2, x - w / 2, cy + h / 2 - r);
    ctx!.lineTo(x - w / 2, cy - h / 2 + r);
    ctx!.quadraticCurveTo(x - w / 2, cy - h / 2, x - w / 2 + r, cy - h / 2);
    ctx!.closePath();
    ctx!.fill();
    ctx!.shadowColor = "transparent";

    // border
    ctx!.strokeStyle = colors.cardBorder;
    ctx!.lineWidth = 1;
    ctx!.stroke();

    // Brand mark — centered inside the card, scaled to fit with padding
    const markSize = Math.min(h - 32, w - 32, 64);
    ctx!.save();
    ctx!.translate(x, cy);
    const markScale = markSize / 118;
    ctx!.scale(markScale, markScale);
    ctx!.translate(-59, -59);
    ctx!.fillStyle = brandPaths.bottomLeft.color;
    ctx!.fill(brandPaths.bottomLeft.path);
    ctx!.fillStyle = brandPaths.topLeft.color;
    ctx!.fill(brandPaths.topLeft.path);
    ctx!.fillStyle = brandPaths.bottomRight.color;
    ctx!.fill(brandPaths.bottomRight.path);
    ctx!.fillStyle = brandPaths.topRight.color;
    ctx!.fill(brandPaths.topRight.path);
    ctx!.restore();

    ctx!.restore();
  }

  function drawParticle(p: Particle) {
    if (p.progress < 0 || p.progress > 1) return;
    const idx = Math.floor(p.progress * (p.path.length - 1));
    const pt = p.path[Math.min(idx, p.path.length - 1)];
    const r = 4.5;
    ctx!.fillStyle = colors.accent;
    ctx!.beginPath();
    ctx!.arc(pt.x, pt.y, r, 0, Math.PI * 2);
    ctx!.fill();
  }

  function render(timestamp: number) {
    rafId = requestAnimationFrame(render);
    if (paused) {
      lastTime = timestamp;
      return;
    }
    if (startTime === null) {
      startTime = timestamp;
      lastTime = timestamp;
    }
    const elapsed = timestamp - startTime;
    const dt = Math.min(0.05, (timestamp - lastTime) / 1000);
    lastTime = timestamp;

    if (W <= 0 || H <= 0) return;

    ctx!.clearRect(0, 0, W, H);

    const L = getLayout();
    const entranceT = reducedMotion
      ? 1
      : Math.min(elapsed / ENTRANCE_DURATION, 1);
    const loopTime = elapsed;

    // Left icons
    L.leftPositions.forEach((p, i) => {
      const t = easeOutExpo(
        Math.max(0, Math.min(1, (entranceT - i * 0.05) / 0.3)),
      );
      const pulse =
        entranceT >= 1 && !reducedMotion
          ? Math.sin(loopTime * 0.0015 + i * 1.2) * 0.5 + 0.5
          : 0;
      drawIconCircle(p.x, p.y, L.iconR, leftIcons[i], t, pulse);
      drawIconLabel(p.x, p.y, L.iconR, leftLabels[i], t);
    });

    // Right icons
    L.rightPositions.forEach((p, i) => {
      const t = easeOutExpo(
        Math.max(0, Math.min(1, (entranceT - 0.5 - i * 0.04) / 0.3)),
      );
      const pulse =
        entranceT >= 1 && !reducedMotion
          ? Math.sin(loopTime * 0.0015 + i * 1.5 + 3) * 0.5 + 0.5
          : 0;
      drawIconCircle(p.x, p.y, L.iconR, rightIcons[i], t, pulse);
      drawIconLabel(p.x, p.y, L.iconR, rightLabels[i], t);
    });

    // Curves
    ctx!.strokeStyle = colors.line;
    ctx!.lineWidth = 1;
    const curveT = easeOutCubic(
      Math.max(0, Math.min(1, (entranceT - 0.15) / 0.5)),
    );
    leftPaths.forEach((pts) => {
      if (curveT <= 0) return;
      const endIdx = Math.floor(curveT * (pts.length - 1));
      ctx!.beginPath();
      ctx!.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i <= endIdx; i++) ctx!.lineTo(pts[i].x, pts[i].y);
      ctx!.stroke();
    });
    const curveT2 = easeOutCubic(
      Math.max(0, Math.min(1, (entranceT - 0.5) / 0.4)),
    );
    rightPaths.forEach((pts) => {
      if (curveT2 <= 0) return;
      const endIdx = Math.floor(curveT2 * (pts.length - 1));
      ctx!.beginPath();
      ctx!.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i <= endIdx; i++) ctx!.lineTo(pts[i].x, pts[i].y);
      ctx!.stroke();
    });

    // Pills
    const pillAlpha = easeOutExpo(
      Math.max(0, Math.min(1, (entranceT - 0.35) / 0.3)),
    );
    drawPill(L.connectX, L.my, "CONNECT", pillAlpha);
    const pillAlpha2 = easeOutExpo(
      Math.max(0, Math.min(1, (entranceT - 0.55) / 0.3)),
    );
    drawPill(L.deployX, L.my, "DEPLOY", pillAlpha2);

    // Center card
    const cardAlpha = easeOutExpo(
      Math.max(0, Math.min(1, (entranceT - 0.35) / 0.35)),
    );
    const bobY =
      entranceT >= 1 && !reducedMotion ? Math.sin(loopTime * 0.002) * 2 : 0;
    drawCenterCard(L.mx, L.my, L.cardW, L.cardH, cardAlpha, bobY);

    // Particles along edges
    if (entranceT >= 0.7) {
      const pAlpha = Math.min(1, (entranceT - 0.7) / 0.3);
      ctx!.globalAlpha = pAlpha;
      const speedScale = reducedMotion ? 0.5 : 1;
      particles.forEach((p) => {
        p.progress += dt * p.speed * speedScale;
        if (p.progress > 1) {
          p.progress -= 1 + p.delay * p.speed;
        }
        drawParticle(p);
      });
      ctx!.globalAlpha = 1;
    }
  }

  // Listeners
  const ro = new ResizeObserver(() => {
    resize();
    buildPaths();
  });
  ro.observe(container);

  const onVisibility = () => {
    paused = document.hidden;
  };
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
      if (W > 0 && H > 0) ctx!.clearRect(0, 0, W, H);
    },
    setColors(next) {
      colors = next;
    },
  };
}
