"use client";

import dynamic from "next/dynamic";

export const HeroFlow = dynamic(
  () => import("./hero-flow-canvas").then((m) => m.HeroFlowCanvas),
  {
    ssr: false,
    loading: () => (
      <div
        className="relative mx-auto hidden h-[400px] w-full max-w-6xl md:block lg:h-[460px]"
        aria-hidden="true"
      />
    ),
  },
);
