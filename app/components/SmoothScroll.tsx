"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,        // Heavy, luxurious feel — DO NOT CHANGE
      duration: 1.8,     // Long duration for weight — DO NOT CHANGE
      smoothWheel: true,
    });

    // Sync Lenis with GSAP ScrollTrigger — CRITICAL
    lenis.on("scroll", ScrollTrigger.update);

    // Let GSAP drive Lenis — CRITICAL
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
