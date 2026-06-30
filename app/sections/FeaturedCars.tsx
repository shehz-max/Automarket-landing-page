"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import { carsData } from "../data/cars";

export default function FeaturedCars() {
  return (
    <section className="cars-section" aria-labelledby="cars-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="cars-heading" className="section-h2">Featured Cars</h2>
          <Link href="/search" className="view-all">
            View All Cars <span>→</span>
          </Link>
        </div>

        <ScrollReveal 
          animation="fadeInUp" 
          stagger={0.15} 
          duration={0.8} 
          start="top 85%"
          className="cars-grid"
        >
          {carsData.map((car) => (
            <article key={car.id} className="car-card">
              <div className="car-image">
                <Image
                  src={car.image}
                  alt={`${car.title} in front three-quarter view`}
                  width={600}
                  height={375}
                  quality={85}
                  loading="lazy"
                />
                <span className="car-price-badge">{car.price}</span>
              </div>
              <div className="car-content">
                <h3 className="car-title">{car.title}</h3>
                <div className="car-specs">
                  <span>{car.year}</span>
                  <span>{car.mileage}</span>
                  <span>{car.fuel}</span>
                  <span>{car.transmission}</span>
                </div>
                <div className="car-meta">
                  <span className="car-dealer">{car.dealer}</span>
                  <span className="car-location">
                    {/* Placeholder inline SVG location pin for accessibility */}
                    <svg 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ display: "inline", marginRight: "4px", verticalAlign: "middle" }}
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {car.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
