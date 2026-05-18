"use client";

import dynamic from "next/dynamic";

export const LazyHeroSlider = dynamic(
  () => import("./hero-slider").then((m) => m.HeroSlider),
  {
    ssr: false,
    loading: () => (
      <div className="w-full py-5 sm:py-6 lg:py-8">
        <div className="mx-auto h-[200px] max-w-4xl animate-pulse rounded-2xl bg-muted sm:h-[250px] lg:h-[300px]" />
      </div>
    ),
  },
);
