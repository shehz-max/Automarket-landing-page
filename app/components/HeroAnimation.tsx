"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroAnimation({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Small delay to ensure DOM is fully painted before GSAP measures elements
    const raf = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Background mesh
        tl.from(".hero-bg", {
          opacity: 0,
          duration: 0.6,
        }, 0);

        // Badge
        tl.from(".hero-badge", {
          y: 20,
          opacity: 0,
          duration: 0.5,
        }, 0.3);

        // H1 words — staggered
        tl.from(".hero-h1 .word", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
        }, 0.6);

        // Subheadline
        tl.from(".hero-sub", {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, 1.2);

        // Category tabs
        tl.from(".hero-tabs", {
          y: 15,
          opacity: 0,
          duration: 0.5,
        }, 1.4);

        // Search bar
        tl.from(".search-bar", {
          scale: 0.95,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.4)",
        }, 1.5);

        // Car image container (slides in from right)
        tl.from(".hero-car-image-container", {
          x: 60,
          opacity: 0,
          duration: 1.0,
        }, 1.0);

        // Ambient glow
        tl.from(".hero-car-ambient-glow", {
          opacity: 0,
          scale: 0.5,
          duration: 1.2,
        }, 1.0);

        // Telemetry stats box
        tl.from(".hero-car-telemetry", {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, 1.6);

        // Trust row
        tl.from(".hero-trust", {
          opacity: 0,
          duration: 0.4,
        }, 1.8);

        // Scroll indicator
        tl.from(".scroll-indicator", {
          y: 10,
          opacity: 0,
          duration: 0.4,
        }, 2.2);
      }, el);

      // Store context on the element for cleanup
      (el as HTMLDivElement & { _gsapCtx?: gsap.Context })._gsapCtx = ctx;
    });

    return () => {
      cancelAnimationFrame(raf);
      const ctx = (el as HTMLDivElement & { _gsapCtx?: gsap.Context })._gsapCtx;
      if (ctx) ctx.revert();
    };
  }, []);

  // Use a proper block-level wrapper div instead of display:contents
  // so GSAP context scoping has a real box-model element to work with
  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      {children}
    </div>
  );
}
