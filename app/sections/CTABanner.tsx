"use client";

import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <div className="cta-bg" aria-hidden="true"></div>
      
      <ScrollReveal
        animation="scaleIn"
        duration={1.0}
        stagger={0}
        start="top 80%"
        className="cta-content"
      >
        <h2 id="cta-heading" className="cta-h2">
          Ready to Find Your Perfect Car?
        </h2>
        <p className="cta-sub">
          Join 50,000+ buyers who found their ideal car through AutoMarket.
        </p>
        <div className="cta-buttons">
          <Link href="/search" className="cta-btn-primary">
            Search Cars
          </Link>
          <Link href="/sell" className="cta-btn-secondary">
            Sell Your Car
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
