"use client";

import React, { useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "blurIn";
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string; // Kept for interface compatibility with GSAP triggers
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.8,
  stagger = 0.15,
  className = "",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const currentElement = containerRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentElement);
        }
      },
      {
        threshold: 0.05, // Trigger as soon as 5% is visible
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before it hits the viewport
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const anims = {
    fadeInUp: "translateY(24px)",
    fadeInLeft: "translateX(-24px)",
    fadeInRight: "translateX(24px)",
    scaleIn: "scale(0.96)",
    blurIn: "blur(8px)",
  };

  const transformVal = anims[animation] || anims.fadeInUp;
  const isBlur = animation === "blurIn";

  const childrenArray = React.Children.toArray(children);

  return (
    <div ref={containerRef} className={className}>
      {childrenArray.map((child, idx) => {
        if (!React.isValidElement(child)) return child;

        const childElement = child as React.ReactElement<{ style?: React.CSSProperties }>;
        const itemDelay = delay + idx * stagger;
        const existingStyle = childElement.props.style || {};

        // Progressive enhancement: render fully visible on server/first paint.
        // Once mounted on client, hide elements out of view so they reveal on scroll.
        const revealStyle: React.CSSProperties = isMounted
          ? {
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0) translateX(0) scale(1)"
                : isBlur
                ? "none"
                : transformVal,
              filter: isVisible ? "none" : isBlur ? "blur(8px)" : "none",
              transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1), filter ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
              transitionDelay: `${itemDelay}s`,
              willChange: "transform, opacity",
            }
          : {};

        return React.cloneElement(childElement, {
          style: {
            ...existingStyle,
            ...revealStyle,
          },
        });
      })}
    </div>
  );
}
