export type IconDrawFn = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  scale: number,
  color: string,
) => void;

export interface FlowColors {
  iconStroke: string;
  iconBg: string;
  iconBorder: string;
  line: string;
  label: string;
  pillBg: string;
  pillText: string;
  cardBg: string;
  cardBorder: string;
  accent: string;
  shadowColor: string;
}

export interface FlowOptions {
  colors: FlowColors;
  reducedMotion: boolean;
}

export interface FlowHandle {
  destroy: () => void;
  setColors: (colors: FlowColors) => void;
}

export interface Point {
  x: number;
  y: number;
}

export interface Layout {
  mx: number;
  my: number;
  cardW: number;
  cardH: number;
  iconR: number;
  connectX: number;
  deployX: number;
  leftPositions: Point[];
  rightPositions: Point[];
}
