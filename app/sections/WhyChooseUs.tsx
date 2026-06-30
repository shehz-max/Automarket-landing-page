"use client";

import ScrollReveal from "../components/ScrollReveal";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Verified History",
      desc: "Every car comes with a free HPI check and full service history verification.",
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden fees. The price you see is the price you pay, guaranteed.",
    },
    {
      title: "Home Delivery",
      desc: "Get your car delivered to your door, or collect from the dealer — your choice.",
    },
    {
      title: "Finance Options",
      desc: "Compare finance deals from multiple lenders in minutes, with soft credit checks.",
    },
  ];

  return (
    <section className="why-section" aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading" className="section-h2">Why Choose AutoMarket</h2>
        
        <ScrollReveal
          animation="fadeInUp"
          stagger={0.15}
          duration={0.8}
          start="top 85%"
          className="features-grid"
        >
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon" aria-hidden="true">✓</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
