import type { IconDrawFn } from "./flow.types";

// All icons are drawn to a 24x24 Lucide-style viewBox.
// The draw context is translated+scaled so (0,0) is the top-left of the
// 24-unit box and (12,12) is the center.

// Lazy-cache Path2D instances — created on first use, avoids SSR issues
// (Path2D is browser-only).
const pathCache = new Map<string, Path2D>();
function p(d: string): Path2D {
  let hit = pathCache.get(d);
  if (!hit) {
    hit = new Path2D(d);
    pathCache.set(d, hit);
  }
  return hit;
}

function drawLucide(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  scale: number,
  color: string,
  render: (c: CanvasRenderingContext2D) => void,
) {
  ctx.save();
  ctx.strokeStyle = color;
  // Lucide uses 2-unit stroke width inside the 24-unit viewBox.
  // The scale transform below will scale it down to the target size.
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.translate(-12, -12);
  render(ctx);
  ctx.restore();
}

// Rounded rectangle helper — Canvas has no built-in rx parameter.
function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  rx: number,
) {
  const r = Math.min(rx, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// ─── LEFT COLUMN ICONS ───

export const drawLightbulb: IconDrawFn = (ctx, cx, cy, scale, color) => {
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    c.stroke(
      p(
        "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      ),
    );
    c.stroke(p("M9 18h6"));
    c.stroke(p("M10 22h4"));
  });
};

export const drawDocument: IconDrawFn = (ctx, cx, cy, scale, color) => {
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    c.stroke(
      p(
        "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      ),
    );
    c.stroke(p("M14 2v5a1 1 0 0 0 1 1h5"));
    c.stroke(p("M10 9H8"));
    c.stroke(p("M16 13H8"));
    c.stroke(p("M16 17H8"));
  });
};

export const drawDatabase: IconDrawFn = (ctx, cx, cy, scale, color) => {
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    c.beginPath();
    c.ellipse(12, 5, 9, 3, 0, 0, Math.PI * 2);
    c.stroke();
    c.stroke(p("M3 5V19A9 3 0 0 0 21 19V5"));
    c.stroke(p("M3 12A9 3 0 0 0 21 12"));
  });
};

export const drawWireframe: IconDrawFn = (ctx, cx, cy, scale, color) => {
  // PanelsTopLeft (lucide "layout")
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    roundedRect(c, 3, 3, 18, 18, 2);
    c.stroke();
    c.stroke(p("M3 9h18"));
    c.stroke(p("M9 21V9"));
  });
};

export const drawCodeBrackets: IconDrawFn = (ctx, cx, cy, scale, color) => {
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    c.stroke(p("m16 18 6-6-6-6"));
    c.stroke(p("m8 6-6 6 6 6"));
  });
};

// ─── RIGHT COLUMN ICONS ───

export const drawGlobe: IconDrawFn = (ctx, cx, cy, scale, color) => {
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    c.beginPath();
    c.arc(12, 12, 10, 0, Math.PI * 2);
    c.stroke();
    c.stroke(p("M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"));
    c.stroke(p("M2 12h20"));
  });
};

export const drawSmartphone: IconDrawFn = (ctx, cx, cy, scale, color) => {
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    roundedRect(c, 5, 2, 14, 20, 2);
    c.stroke();
    // Bottom dot
    c.beginPath();
    c.arc(12, 18, 0.4, 0, Math.PI * 2);
    c.stroke();
  });
};

export const drawBrain: IconDrawFn = (ctx, cx, cy, scale, color) => {
  // Bot
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    c.stroke(p("M12 8V4H8"));
    roundedRect(c, 4, 8, 16, 12, 2);
    c.stroke();
    c.stroke(p("M2 14h2"));
    c.stroke(p("M20 14h2"));
    c.stroke(p("M15 13v2"));
    c.stroke(p("M9 13v2"));
  });
};

export const drawChip: IconDrawFn = (ctx, cx, cy, scale, color) => {
  // Cpu
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    roundedRect(c, 4, 4, 16, 16, 2);
    c.stroke();
    roundedRect(c, 8, 8, 8, 8, 1);
    c.stroke();
    // 12 pins
    const pins = [
      // verticals
      "M12 20v2",
      "M12 2v2",
      "M17 20v2",
      "M17 2v2",
      "M7 20v2",
      "M7 2v2",
      // horizontals
      "M2 12h2",
      "M2 17h2",
      "M2 7h2",
      "M20 12h2",
      "M20 17h2",
      "M20 7h2",
    ];
    for (const d of pins) c.stroke(p(d));
  });
};

export const drawGears: IconDrawFn = (ctx, cx, cy, scale, color) => {
  // Workflow
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    roundedRect(c, 3, 3, 8, 8, 2);
    c.stroke();
    c.stroke(p("M7 11v4a2 2 0 0 0 2 2h4"));
    roundedRect(c, 13, 13, 8, 8, 2);
    c.stroke();
  });
};

export const drawCloud: IconDrawFn = (ctx, cx, cy, scale, color) => {
  drawLucide(ctx, cx, cy, scale, color, (c) => {
    c.stroke(p("M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"));
  });
};

export const leftIcons: IconDrawFn[] = [
  drawLightbulb,
  drawDocument,
  drawDatabase,
  drawWireframe,
  drawCodeBrackets,
];

export const rightIcons: IconDrawFn[] = [
  drawGlobe,
  drawSmartphone,
  drawBrain,
  drawChip,
  drawGears,
  drawCloud,
];

export const leftLabels = ["Idea", "Requirements", "Data", "Design", "Code"];
export const rightLabels = [
  "Web Dev",
  "Mobile",
  "AI",
  "IoT",
  "Automation",
  "Cloud",
];
