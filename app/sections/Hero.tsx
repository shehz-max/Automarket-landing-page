"use client";

import { useState } from "react";
import Image from "next/image";
import HeroAnimation from "../components/HeroAnimation";

type Category = "performance" | "ev" | "suv";

interface CategoryData {
  carImage: string;
  badgeText: string;
  spec1Label: string;
  spec1Val: string;
  spec2Label: string;
  spec2Val: string;
  spec3Label: string;
  spec3Val: string;
  spec4Label: string;
  spec4Val: string;
  dealer: string;
  location: string;
  titleAccent: string;
}

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState<Category>("performance");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const categoryMap: Record<Category, CategoryData> = {
    performance: {
      carImage: "/car-1.jpg",
      badgeText: "V12 performance & styling",
      spec1Label: "Power",
      spec1Val: "245 BHP",
      spec2Label: "0-60 mph",
      spec2Val: "5.6s",
      spec3Label: "Top Speed",
      spec3Val: "155 mph",
      spec4Label: "Engine",
      spec4Val: "2.0L Turbo",
      dealer: "BMW Approved Used",
      location: "London",
      titleAccent: "Perfect",
    },
    ev: {
      carImage: "/car-5.jpg",
      badgeText: "Zero-emissions electric range",
      spec1Label: "Range",
      spec1Val: "312 mi",
      spec2Label: "Battery",
      spec2Val: "88 kWh",
      spec3Label: "0-60 mph",
      spec3Val: "4.8s",
      spec4Label: "Charge",
      spec4Val: "150 kW DC",
      dealer: "Ford Direct",
      location: "Bristol",
      titleAccent: "Electric",
    },
    suv: {
      carImage: "/car-6.jpg",
      badgeText: "Rugged adventure capability",
      spec1Label: "Drive",
      spec1Val: "AWD",
      spec2Label: "0-60 mph",
      spec2Val: "7.9s",
      spec3Label: "Cargo Cap",
      spec3Val: "591 Litres",
      spec4Label: "Clearance",
      spec4Val: "212 mm",
      dealer: "Land Rover Approved",
      location: "Glasgow",
      titleAccent: "Adventure",
    },
  };

  const themeStyles = {
    performance: {
      accent: "#FF4D00",
      accentHover: "#FF6B2C",
      accentRgb: "255, 77, 0",
      accentGlow: "rgba(255, 77, 0, 0.15)",
      gradient: "linear-gradient(135deg, #FF4D00 0%, #FF8C00 100%)",
    },
    ev: {
      accent: "#00F0FF",
      accentHover: "#33F3FF",
      accentRgb: "0, 240, 255",
      accentGlow: "rgba(0, 240, 255, 0.15)",
      gradient: "linear-gradient(135deg, #00F0FF 0%, #0072FF 100%)",
    },
    suv: {
      accent: "#FFB300",
      accentHover: "#FFC43D",
      accentRgb: "255, 179, 0",
      accentGlow: "rgba(255, 179, 0, 0.15)",
      gradient: "linear-gradient(135deg, #FFB300 0%, #FF8C00 100%)",
    },
  }[activeCategory];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;
    const x = (e.clientX - window.innerWidth / 2) / 35;
    const y = (e.clientY - window.innerHeight / 2) / 35;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const activeData = categoryMap[activeCategory];

  return (
    <HeroAnimation>
      <section 
        className="hero" 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
        aria-labelledby="hero-heading"
        style={{
          "--color-active-accent": themeStyles.accent,
          "--color-active-accent-hover": themeStyles.accentHover,
          "--color-active-rgb": themeStyles.accentRgb,
          "--glow-active-accent": themeStyles.accentGlow,
          "--gradient-active-accent": themeStyles.gradient,
        } as React.CSSProperties}
      >
        <div className="hero-bg" aria-hidden="true"></div>
        
        <div className="hero-grid-split">
          {/* LEFT COLUMN: Texts and Search console */}
          <div className="hero-left-col">
            <div className="hero-badge">
              <span className="badge-dot" aria-hidden="true"></span>
              <span>{activeData.badgeText}</span>
            </div>

            <h1 id="hero-heading" className="hero-h1">
              <span className="word">Find</span>
              <span className="word">Your</span>
              <span className="word accent">{activeData.titleAccent}</span>
              <span className="word">Car</span>
            </h1>

            <p className="hero-sub">
              Browse verified used cars from 500+ dealers nationwide. 
              Transparent pricing, free history checks, and home delivery.
            </p>

            {/* CATEGORY TABS CONFIGURATOR */}
            <div className="hero-tabs" role="tablist" aria-label="Car categories">
              <button
                className={`hero-tab-btn ${activeCategory === "performance" ? "active" : ""}`}
                onClick={() => setActiveCategory("performance")}
                role="tab"
                aria-selected={activeCategory === "performance"}
              >
                Performance
              </button>
              <button
                className={`hero-tab-btn ${activeCategory === "ev" ? "active" : ""}`}
                onClick={() => setActiveCategory("ev")}
                role="tab"
                aria-selected={activeCategory === "ev"}
              >
                Electric/EV
              </button>
              <button
                className={`hero-tab-btn ${activeCategory === "suv" ? "active" : ""}`}
                onClick={() => setActiveCategory("suv")}
                role="tab"
                aria-selected={activeCategory === "suv"}
              >
                SUVs & Offroad
              </button>
            </div>

            <form className="search-bar" onSubmit={(e) => e.preventDefault()} role="search">
              <select className="search-field" aria-label="Car make">
                <option value="">Any Make</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Ford">Ford</option>
                <option value="VW">VW</option>
              </select>
              <select className="search-field" aria-label="Car model">
                <option value="">Any Model</option>
              </select>
              <input 
                type="text" 
                className="search-field" 
                placeholder="Postcode" 
                aria-label="Postcode" 
              />
              <select className="search-field" aria-label="Max price">
                <option value="">Max Price</option>
                <option value="5000">£5,000</option>
                <option value="10000">£10,000</option>
                <option value="15000">£15,000</option>
                <option value="20000">£20,000</option>
                <option value="30000">£30,000+</option>
              </select>
              <button className="search-btn" type="submit">
                Search
              </button>
            </form>

            <div className="hero-trust">
              <span className="stars" aria-hidden="true">★★★★★</span>
              <span>4.9 from 2,000+ reviews</span>
              <span className="trust-divider" aria-hidden="true">|</span>
              <span>Trustpilot</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Car Cutout with Telemetry Specs */}
          <div className="hero-right-col">
            <div className="hero-car-wrapper">
              <div 
                className="hero-car-ambient-glow"
                style={{
                  transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
                }}
              ></div>

              <div className="hero-car-image-container">
                {/* Remounts glare sweep to run CSS animation on tab shift */}
                <div key={activeCategory} className="glare-sweep run-sweep"></div>
                <Image
                  src={activeData.carImage}
                  alt={`${activeCategory} car template cutout`}
                  width={600}
                  height={375}
                  priority
                  quality={90}
                  style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                    transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>

              {/* Floating Live Telemetry Console */}
              <div className="hero-car-telemetry">
                <div className="hero-car-telemetry-row">
                  {activeData.spec1Label}: <span>{activeData.spec1Val}</span>
                </div>
                <div className="hero-car-telemetry-row">
                  {activeData.spec2Label}: <span>{activeData.spec2Val}</span>
                </div>
                <div className="hero-car-telemetry-row">
                  {activeData.spec3Label}: <span>{activeData.spec3Val}</span>
                </div>
                <div className="hero-car-telemetry-row">
                  {activeData.spec4Label}: <span>{activeData.spec4Val}</span>
                </div>
                <div className="hero-car-telemetry-row" style={{ borderTop: "1px solid var(--color-border-rest)", paddingTop: "8px", marginTop: "4px" }}>
                  Dealer: <span style={{ fontSize: "11px" }}>{activeData.dealer}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>
    </HeroAnimation>
  );
}
