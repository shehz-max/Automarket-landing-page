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
