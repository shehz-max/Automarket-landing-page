"use client";

import ScrollReveal from "../components/ScrollReveal";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Search",
      desc: "Browse 5,000+ verified cars from trusted dealers. Filter by make, model, price, and location.",
    },
    {
      number: "02",
      title: "Compare",
      desc: "View detailed specs, history checks, and dealer reviews. Compare side-by-side to find your match.",
    },
    {
      number: "03",
      title: "Buy",
      desc: "Reserve online, arrange finance, and get your car delivered to your door — or collect from the dealer.",
    },
  ];

  return (
    <section className="how-it-works" aria-labelledby="how-heading">
      <div className="container">
        <h2 id="how-heading" className="section-h2">How It Works</h2>
        
        <ScrollReveal
          animation="fadeInUp"
          stagger={0.15}
          duration={0.8}
          start="top 85%"
          className="steps-grid"
        >
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
