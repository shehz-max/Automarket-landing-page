"use client";

import ScrollReveal from "../components/ScrollReveal";

export default function Testimonials() {
  const testimonials = [
    {
      stars: "★★★★★",
      quote: '"Found my dream BMW in under 10 minutes. The whole process was seamless from search to delivery."',
      avatar: "JM",
      name: "James Mitchell",
      detail: "London · BMW 3 Series",
    },
    {
      stars: "★★★★★",
      quote: '"Brilliant service. The finance rate was lower than my bank offered, and the car arrived in perfect condition."',
      avatar: "SJ",
      name: "Sarah Jenkins",
      detail: "Manchester · Audi A4 Avant",
    },
    {
      stars: "★★★★★",
      quote: '"Being able to see dealer reviews and service history before buying gave me absolute confidence. Highly recommend."',
      avatar: "DC",
      name: "David Cooper",
      detail: "Birmingham · Mercedes C-Class",
    },
    {
      stars: "★★★★★",
      quote: '"Simple, fast, and completely transparent. No hidden dealer fees or pressure selling. Outstanding experience."',
      avatar: "EW",
      name: "Emma Watson",
      detail: "Leeds · Volkswagen Golf",
    },
    {
      stars: "★★★★★",
      quote: '"Transitioning to an EV was made so easy. The dealer explained everything, and home delivery was on time."',
      avatar: "MV",
      name: "Marcus Vance",
      detail: "Bristol · Mustang Mach-E",
    },
    {
      stars: "★★★★★",
      quote: '"Part exchanging my old car was handled entirely online. The valuation was fair and the swap took 5 minutes."',
      avatar: "OG",
      name: "Olivia Green",
      detail: "Glasgow · Land Rover Evoque",
    },
  ];

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className="section-h2">What Buyers Say</h2>
        
        <ScrollReveal
          animation="fadeInUp"
          stagger={0.15}
          duration={0.8}
          start="top 85%"
          className="testimonials-grid"
        >
          {testimonials.map((t, idx) => (
            <article key={idx} className="testimonial-card">
              <div className="testimonial-stars" aria-hidden="true">{t.stars}</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-detail">{t.detail}</div>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
