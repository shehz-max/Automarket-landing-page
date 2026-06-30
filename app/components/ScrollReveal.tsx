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
    const currentElement = ref.current;
    if (!currentElement) return;

    const target = currentElement.children.length > 0 
      ? currentElement.children 
      : currentElement;

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
      stagger: currentElement.children.length > 0 ? stagger : 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: currentElement,
        start,
        once: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === currentElement) t.kill();
      });
    };
  }, [animation, delay, duration, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
