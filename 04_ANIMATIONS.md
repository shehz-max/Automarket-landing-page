# 04 — ANIMATIONS
## Car Marketplace Landing Page — Motion System

---

## CRITICAL INSTRUCTION FOR GEMINI

**DO NOT:**
- Change any animation duration value
- Change any easing function
- Change any stagger timing
- Skip any animation layer
- Add animations not specified here
- Remove any animation specified here
- Use linear easing for reveals (use expo.out or power3.out only)
- Animate width, height, top, left, margin, or padding

**DO:**
- Implement ALL animation layers listed
- Use exact timing values as written
- Use exact easing functions as written
- Implement prefers-reduced-motion for ALL animations
- Clean up GSAP ScrollTrigger instances on unmount
- Wait for document.fonts.ready before text splitting

---

## 1. LENIS SMOOTH SCROLL SETUP

### Installation
```bash
npm install lenis
```

### Component: SmoothScroll.tsx
```tsx
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
```

**CRITICAL RULES:**
- `lerp: 0.08` — DO NOT CHANGE. This creates the heavy, luxurious scroll feel.
- `duration: 1.8` — DO NOT CHANGE. This is intentionally slow for weight.
- Lenis MUST be synced with ScrollTrigger via `lenis.on("scroll", ScrollTrigger.update)`.
- GSAP ticker MUST drive Lenis via `gsap.ticker.add()`.
- Cleanup MUST call `lenis.destroy()` on unmount.

---

## 2. HERO ANIMATION SEQUENCE

### Total Duration: 2.4 seconds (intentionally cinematic)

```
Timeline:
├─ t=0ms     Background mesh fades in (opacity 0→1, 600ms, ease-out)
├─ t=300ms   Badge slides up + fades in (translateY 20px→0, opacity 0→1, 500ms)
├─ t=600ms   H1 words reveal one by one (stagger 80ms per word, translateY 40px→0, opacity 0→1, 800ms each)
├─ t=1200ms  Subheadline fades in (opacity 0→1, translateY 20px→0, 600ms)
├─ t=1500ms  Search bar scales in (scale 0.95→1, opacity 0→1, 500ms, spring ease)
├─ t=1800ms  Trust row fades in (opacity 0→1, 400ms)
└─ t=2200ms  Scroll indicator bounces in (translateY 10px→0, opacity 0→1, 400ms)
```

### Implementation: HeroAnimation.tsx
```tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

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

      // Search bar
      tl.from(".search-bar", {
        scale: 0.95,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.4)",
      }, 1.5);

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* Hero content goes here */}</div>;
}
```

**CRITICAL RULES:**
- Total sequence: 2.4 seconds. DO NOT shorten.
- Stagger between words: 80ms. DO NOT change.
- Word reveal duration: 800ms. DO NOT change.
- Search bar uses `back.out(1.4)` spring ease. DO NOT change.
- All animations use `power3.out` unless specified otherwise.

---

## 3. SCROLL REVEAL COMPONENT

### Component: ScrollReveal.tsx
```tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "blurIn";
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.8,
  stagger = 0.15,
  start = "top 85%",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const target = ref.current.children.length > 0 
      ? ref.current.children 
      : ref.current;

    const anims = {
      fadeInUp: { opacity: 0, y: 40 },
      fadeInLeft: { opacity: 0, x: -40 },
      fadeInRight: { opacity: 0, x: 40 },
      scaleIn: { opacity: 0, scale: 0.95 },
      blurIn: { opacity: 0, filter: "blur(10px)" },
    };

    const anim = anims[animation] || anims.fadeInUp;

    const tween = gsap.from(target, {
      ...anim,
      duration,
      delay,
      stagger: ref.current.children.length > 0 ? stagger : 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start,
        once: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === ref.current) t.kill();
      });
    };
  }, [animation, delay, duration, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
```

### Scroll Reveal Presets by Section

| Section | Animation | Duration | Stagger | Start | Notes |
|---------|-----------|----------|---------|-------|-------|
| Featured Cars | fadeInUp | 0.8s | 0.15s | top 85% | Cards stagger in |
| How It Works | fadeInUp | 0.8s | 0.15s | top 85% | Step cards stagger |
| Stats | fadeInUp | 0.8s | 0.15s | top 85% | Stat items stagger |
| Why Choose Us | fadeInUp | 0.8s | 0.15s | top 85% | Feature cards stagger |
| Testimonials | fadeInUp | 0.8s | 0.15s | top 85% | Testimonial cards stagger |
| CTA Banner | scaleIn | 1.0s | 0 | top 80% | Single element |

**CRITICAL RULES:**
- Default duration: 0.8s. DO NOT use less than 0.6s for reveals.
- Default stagger: 0.15s. Creates cascading effect.
- Default start: "top 85%". Element is 15% visible when animation triggers.
- Default ease: "power3.out". NEVER use linear or ease-in.
- `once: true` — animation plays once, does not reverse on scroll up.
- Cleanup MUST kill tween AND associated ScrollTrigger on unmount.

---

## 4. COUNTER ANIMATION (Stats Section)

### Hook: useCountUp.ts
```typescript
import { useEffect, useRef } from "react";

export function useCountUp(
  target: number,
  duration: number = 2000,
  suffix: string = "",
  decimals: number = 0
) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();

        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic: 1 - (1 - progress)^3
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;

          if (decimals > 0) {
            el.textContent = current.toFixed(decimals) + suffix;
          } else {
            el.textContent = Math.floor(current).toLocaleString() + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            // Final value
            if (decimals > 0) {
              el.textContent = target.toFixed(decimals) + suffix;
            } else {
              el.textContent = target.toLocaleString() + suffix;
            }
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration, suffix, decimals]);

  return ref;
}
```

### Usage in Stats
```tsx
import { useCountUp } from "./hooks/useCountUp";

export default function StatItem({ target, label, suffix = "", decimals = 0 }: {
  target: number;
  label: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useCountUp(target, 2000, suffix, decimals);

  return (
    <div className="stat-item">
      <span ref={ref} className="stat-number">0</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
```

**CRITICAL RULES:**
- Duration: 2000ms. DO NOT CHANGE. This is intentionally slow for data honesty.
- Easing: ease-out cubic (`1 - (1 - p)^3`). DO NOT use linear or ease-in.
- Trigger: IntersectionObserver with `threshold: 0.5`. Animation starts when 50% visible.
- Uses `requestAnimationFrame` for smooth 60fps. NEVER use `setInterval`.
- Final value is set exactly to prevent rounding errors.
- `toLocaleString()` for number formatting (commas).

---

## 5. MARQUEE ANIMATION

### CSS Keyframes
```css
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

### Implementation Rules
- Animation duration: 30s linear infinite. DO NOT CHANGE.
- Track width: `max-content` (fits all items).
- Items duplicated in HTML for seamless loop (8 original + 8 duplicate = 16 total).
- Pause on hover: `animation-play-state: paused`.
- Edge fade masks: 120px wide, gradient from black to transparent.

---

## 6. BACKGROUND MESH ANIMATION

### CSS Keyframes
```css
@keyframes meshShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
```

### Implementation
- Applied to `.hero-bg` element.
- Duration: 20s ease infinite. DO NOT CHANGE.
- Background size: 200% 200% (allows movement).
- Opacity of gradient: very low (0.04-0.06) — barely visible, adds depth.

---

## 7. SCROLL BOUNCE INDICATOR

### CSS Keyframes
```css
@keyframes scrollBounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(8px);
  }
}
```

### Implementation
- Applied to `.scroll-indicator`.
- Duration: 2s ease-in-out infinite. DO NOT CHANGE.
- Translates Y by 8px. DO NOT CHANGE.

---

## 8. BADGE PULSE ANIMATION

### CSS Keyframes
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}
```

### Implementation
- Applied to `.badge-dot`.
- Duration: 2s ease-in-out infinite. DO NOT CHANGE.
- Green dot pulses to indicate "live" status.

---

## 9. ACCESSIBILITY: PREFERS-REDUCED-MOTION

### CSS (MUST BE INCLUDED)
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Disable parallax */
  .parallax-layer {
    transform: none !important;
  }

  /* Disable canvas animations */
  canvas {
    display: none !important;
  }

  /* Keep content visible */
  .hero-h1 .word,
  .hero-badge,
  .hero-sub,
  .search-bar,
  .hero-trust,
  .scroll-indicator {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

**CRITICAL RULES:**
- MUST be implemented. No exceptions.
- All animations reduce to 0.01ms (effectively instant).
- Content remains visible and accessible.
- Parallax layers disabled.
- Canvas animations disabled.

---

## 10. FOCUS STATES (Accessibility)

### CSS
```css
:focus-visible {
  outline: 2px solid #FF4D00;
  outline-offset: 4px;
  transition: outline-offset 0.2s ease;
}
```

---

## 11. PERFORMANCE RULES

```
1. ONLY animate: transform + opacity (GPU-composited, no layout cost)
2. NEVER animate: width, height, top, left, margin, padding
3. filter:blur() — use on entrance only, not continuously on scroll
4. will-change: transform — add BEFORE animation, remove AFTER
5. Max 20 elements animating at once on screen
6. Lenis setup order: init Lenis → sync ScrollTrigger → add to GSAP ticker
7. Hero image must NOT be delayed by animation (LCP < 2.5s)
8. Cleanup: all ScrollTrigger instances on component unmount
9. LCP < 2.5s — hero image must load with priority
10. INP < 200ms — use requestAnimationFrame, never setInterval
```

---

## 12. COMPLETE ANIMATION CHECKLIST

Before marking animations complete, verify:

- [ ] Lenis initialized with lerp: 0.08, duration: 1.8
- [ ] Lenis synced with ScrollTrigger via lenis.on("scroll", ScrollTrigger.update)
- [ ] GSAP ticker drives Lenis via gsap.ticker.add()
- [ ] Hero sequence: 2.4s total, word stagger 80ms, all layers present
- [ ] ScrollReveal component with 5 animation types
- [ ] All sections use ScrollReveal with correct presets
- [ ] Counter animation on stats (2000ms, ease-out cubic, IntersectionObserver)
- [ ] Marquee 30s linear infinite, pause on hover, edge fade masks
- [ ] Background mesh animation 20s ease infinite
- [ ] Scroll bounce indicator 2s ease-in-out infinite
- [ ] Badge pulse 2s ease-in-out infinite
- [ ] prefers-reduced-motion implemented for ALL animations
- [ ] Focus states with orange outline
- [ ] All ScrollTrigger instances cleaned up on unmount
- [ ] No width/height/top/left/margin/padding animations
- [ ] Hero image loads with priority (not delayed by animation)

---

*File 4 of 6 — Read next: 05_SEO_METADATA.md*
