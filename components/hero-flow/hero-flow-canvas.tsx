"use client";

import { useEffect, useRef } from "react";
import { createFlow } from "./flow-engine";
import type { FlowColors, FlowHandle } from "./flow.types";

function readColors(): FlowColors {
  // Match the site's theme convention (shadcn `.dark` class on <html>),
  // not prefers-color-scheme — otherwise the canvas can drift out of sync
  // with the rest of the page.
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  if (isDark) {
    return {
      iconStroke: "#EBEBEB",
      iconBg: "#1F1F1F",
      iconBorder: "#2E2E2E",
      line: "#404040",
      label: "#E4E4E7",
      pillBg: "#FAFAFA",
      pillText: "#171717",
      cardBg: "#1F1F1F",
      cardBorder: "#2E2E2E",
      accent: "#FB923C",
      shadowColor: "rgba(0, 0, 0, 0.4)",
    };
  }

  return {
    iconStroke: "#171717",
    iconBg: "#FFFFFF",
    iconBorder: "#E5E5E5",
    line: "#D4D4D4",
    label: "#27272A",
    pillBg: "#171717",
    pillText: "#FFFFFF",
    cardBg: "#FFFFFF",
    cardBorder: "#E5E5E5",
    accent: "#F97316",
    shadowColor: "rgba(0, 0, 0, 0.07)",
  };
}

export function HeroFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleRef = useRef<FlowHandle | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    handleRef.current = createFlow(canvas, {
      colors: readColors(),
      reducedMotion,
    });

    // React to .dark class toggles on <html> — matches the rest of the site.
    const observer = new MutationObserver(() => {
      handleRef.current?.setColors(readColors());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      handleRef.current?.destroy();
      handleRef.current = null;
    };
  }, []);

  return (
    <div
      className="relative mx-auto hidden h-[400px] w-full max-w-6xl md:block lg:h-[460px]"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
