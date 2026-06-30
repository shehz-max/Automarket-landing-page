"use client";

import ScrollReveal from "../components/ScrollReveal";
import StatCounter from "../components/StatCounter";

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Key statistics">
      <div className="container">
        <ScrollReveal
          animation="fadeInUp"
          stagger={0.15}
          duration={0.8}
          start="top 85%"
          className="stats-grid"
        >
          <StatCounter target={5000} label="Cars Listed" suffix="+" />
          <StatCounter target={500} label="Trusted Dealers" suffix="+" />
          <StatCounter target={50000} label="Happy Buyers" suffix="+" />
          <StatCounter target={4.9} label="Average Rating" decimals={1} suffix="★" />
        </ScrollReveal>
      </div>
    </section>
  );
}
