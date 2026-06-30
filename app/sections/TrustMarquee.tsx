"use client";

export default function TrustMarquee() {
  const marqueeItems = [
    "BMW Approved",
    "Audi Approved",
    "Mercedes-Benz",
    "Ford Direct",
    "VW Group",
    "Toyota Plus",
    "Honda Approved",
    "Nissan Intelligent Choice",
  ];

  return (
    <section className="marquee-section" aria-label="Partner dealers">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* First loop */}
          {marqueeItems.map((item, idx) => (
            <span key={`first-${idx}`} className="marquee-item">
              {item}
            </span>
          ))}
          {/* Duplicate loop for seamless scroll */}
          {marqueeItems.map((item, idx) => (
            <span key={`second-${idx}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
