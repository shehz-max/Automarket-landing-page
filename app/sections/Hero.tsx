"use client";

import HeroAnimation from "../components/HeroAnimation";

export default function Hero() {
  return (
    <HeroAnimation>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true"></span>
            <span>5,000+ cars from trusted dealers</span>
          </div>
          
          <h1 id="hero-heading" className="hero-h1">
            <span className="word">Find</span>
            <span className="word">Your</span>
            <span className="word accent">Perfect</span>
            <span className="word">Car</span>
          </h1>

          <p className="hero-sub">
            Browse verified used cars from 500+ dealers nationwide. 
            Transparent pricing, free history checks, and home delivery.
          </p>

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

        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>
    </HeroAnimation>
  );
}
