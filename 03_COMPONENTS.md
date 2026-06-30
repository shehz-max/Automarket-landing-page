# 03 — COMPONENTS
## Car Marketplace Landing Page — Exact Specifications

---

## CRITICAL INSTRUCTION FOR GEMINI

**DO NOT:**
- Change any CSS value (padding, margin, font-size, color, border-width)
- Add decorative elements not specified
- Remove any specified element or class
- Change the HTML structure
- Use different class names than specified
- Approximate values — use EXACT values

**DO:**
- Copy all CSS exactly as written
- Build all components in the order listed
- Use design tokens from 02_DESIGN_TOKENS.md
- Maintain the exact DOM structure
- Implement all hover states as specified
- Implement all responsive rules as specified

---

## COMPONENT 1: STICKY NAVBAR

### HTML Structure
```html
<header class="navbar" role="banner">
  <nav class="navbar-inner" aria-label="Main navigation">
    <a href="/" class="navbar-logo" aria-label="AutoMarket home">AutoMarket</a>
    <div class="navbar-links desktop-only">
      <a href="/search" class="nav-link">Search Cars</a>
      <a href="/sell" class="nav-link">Sell Your Car</a>
      <a href="/finance" class="nav-link">Finance</a>
      <a href="/about" class="nav-link">About</a>
      <a href="/contact" class="nav-link">Contact</a>
    </div>
    <a href="/list" class="nav-cta">List Your Car</a>
    <button class="hamburger mobile-only" aria-label="Open menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</header>
```

### CSS Specification (EXACT VALUES)
```css
/* NAVBAR BASE */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 48px;
  background: transparent;
  transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border-bottom: 1px solid transparent;
}

/* SCROLLED STATE — applied via JS when scrollY > 60 */
.navbar.scrolled {
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(16px);
  border-bottom-color: #262626;
}

/* NAVBAR INNER */
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
}

/* LOGO */
.navbar-logo {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  text-decoration: none;
}

/* NAV LINKS */
.navbar-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #A3A3A3;
  text-decoration: none;
  padding: 8px 16px;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: #FFFFFF;
}

.nav-link.active {
  color: #FFFFFF;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 16px;
  right: 16px;
  height: 2px;
  background: #FF4D00;
}

/* CTA BUTTON */
.nav-cta {
  background: transparent;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  padding: 10px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-cta:hover {
  background: #FFFFFF;
  color: #000000;
}

/* HAMBURGER (Mobile only) */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background: #FFFFFF;
  transition: all 0.3s ease;
}

/* HAMBURGER OPEN STATE */
.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* MOBILE MENU OVERLAY */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: #000000;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.mobile-menu.open {
  opacity: 1;
  pointer-events: all;
}

.mobile-nav-link {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(32px, 6vw, 48px);
  font-weight: 700;
  color: #FFFFFF;
  text-decoration: none;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu.open .mobile-nav-link:nth-child(1) { opacity: 1; transform: none; transition-delay: 0.05s; }
.mobile-menu.open .mobile-nav-link:nth-child(2) { opacity: 1; transform: none; transition-delay: 0.10s; }
.mobile-menu.open .mobile-nav-link:nth-child(3) { opacity: 1; transform: none; transition-delay: 0.15s; }
.mobile-menu.open .mobile-nav-link:nth-child(4) { opacity: 1; transform: none; transition-delay: 0.20s; }
.mobile-menu.open .mobile-nav-link:nth-child(5) { opacity: 1; transform: none; transition-delay: 0.25s; }

/* RESPONSIVE */
@media (max-width: 768px) {
  .navbar { padding: 0 24px; }
  .desktop-only { display: none !important; }
  .hamburger { display: flex; }
  .nav-cta { display: none; } /* Hide CTA on mobile, show in menu */
}
```

### JavaScript (Navbar Scroll Behavior)
```javascript
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
```

---

## COMPONENT 2: HERO SECTION

### HTML Structure
```html
<section class="hero" aria-labelledby="hero-heading">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-content">
    <div class="hero-badge">
      <span class="badge-dot"></span>
      <span>5,000+ cars from trusted dealers</span>
    </div>
    <h1 id="hero-heading" class="hero-h1">
      <span class="word">Find</span>
      <span class="word">Your</span>
      <span class="word accent">Perfect</span>
      <span class="word">Car</span>
    </h1>
    <p class="hero-sub">
      Browse verified used cars from 500+ dealers nationwide. 
      Transparent pricing, free history checks, and home delivery.
    </p>
    <div class="search-bar">
      <select class="search-field" aria-label="Car make">
        <option value="">Any Make</option>
        <option>BMW</option>
        <option>Audi</option>
        <option>Mercedes</option>
        <option>Ford</option>
        <option>VW</option>
      </select>
      <select class="search-field" aria-label="Car model">
        <option value="">Any Model</option>
      </select>
      <input type="text" class="search-field" placeholder="Postcode" aria-label="Postcode" />
      <select class="search-field" aria-label="Max price">
        <option value="">Max Price</option>
        <option>£5,000</option>
        <option>£10,000</option>
        <option>£15,000</option>
        <option>£20,000</option>
        <option>£30,000+</option>
      </select>
      <button class="search-btn" type="button">Search</button>
    </div>
    <div class="hero-trust">
      <span class="stars">★★★★★</span>
      <span>4.9 from 2,000+ reviews</span>
      <span class="trust-divider">|</span>
      <span>Trustpilot</span>
    </div>
  </div>
  <div class="scroll-indicator" aria-hidden="true">
    <span>Scroll</span>
    <div class="scroll-arrow"></div>
  </div>
</section>
```

### CSS Specification (EXACT VALUES)
```css
/* HERO BASE */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
  position: relative;
  overflow: hidden;
  background: #000000;
}

/* BACKGROUND MESH — subtle, barely visible */
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 50%, rgba(255, 77, 0, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 70% 50%, rgba(255, 140, 0, 0.04) 0%, transparent 50%);
  animation: meshShift 20s ease infinite;
  z-index: 0;
}

/* HERO CONTENT */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* BADGE */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  border: 1px solid #262626;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #A3A3A3;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #22C55E;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

/* HEADLINE */
.hero-h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 0.9;
  color: #FFFFFF;
  margin: 0;
}

.hero-h1 .word {
  display: inline-block;
  margin-right: 0.25em;
}

.hero-h1 .accent {
  background: linear-gradient(135deg, #FF4D00 0%, #FF8C00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* SUBHEADLINE */
.hero-sub {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  color: #A3A3A3;
  line-height: 1.6;
  max-width: 560px;
  margin: 0;
}

/* SEARCH BAR */
.search-bar {
  display: flex;
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #262626;
  padding: 8px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.search-bar:focus-within {
  border-color: #FF4D00;
  box-shadow: 0 0 30px rgba(255, 77, 0, 0.15);
}

.search-field {
  flex: 1;
  background: transparent;
  border: none;
  border-right: 1px solid #262626;
  padding: 16px 20px;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
}

.search-field:last-of-type {
  border-right: none;
}

.search-field::placeholder {
  color: #737373;
}

.search-field option {
  background: #111111;
  color: #FFFFFF;
}

.search-btn {
  background: #FF4D00;
  color: #FFFFFF;
  border: none;
  padding: 16px 32px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}

.search-btn:hover {
  background: #FF6B2C;
  box-shadow: 0 0 20px rgba(255, 77, 0, 0.3);
}

/* TRUST ROW */
.hero-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #737373;
}

.hero-trust .stars {
  color: #FACC15;
  letter-spacing: -2px;
  font-size: 16px;
}

.trust-divider {
  color: #262626;
}

/* SCROLL INDICATOR */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #737373;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: scrollBounce 2s ease-in-out infinite;
}

.scroll-arrow {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, #737373, transparent);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero { padding: 120px 24px 80px; }
  .search-bar { flex-direction: column; }
  .search-field { border-right: none; border-bottom: 1px solid #262626; }
  .search-field:last-of-type { border-bottom: none; }
  .search-btn { width: 100%; }
  .hero-trust { flex-wrap: wrap; gap: 8px; }
}
```

---

## COMPONENT 3: FEATURED CARS GRID

### HTML Structure
```html
<section class="cars-section" aria-labelledby="cars-heading">
  <div class="container">
    <div class="section-header">
      <h2 id="cars-heading" class="section-h2">Featured Cars</h2>
      <a href="/search" class="view-all">View All Cars →</a>
    </div>
    <div class="cars-grid">
      <!-- Car Card — Repeat 6 times with different data -->
      <article class="car-card">
        <div class="car-image">
          <img src="/car-1.jpg" alt="2022 BMW 3 Series 320i M Sport" loading="lazy" />
          <span class="car-price-badge">£24,995</span>
        </div>
        <div class="car-content">
          <h3 class="car-title">2022 BMW 3 Series 320i M Sport</h3>
          <div class="car-specs">
            <span>2022</span>
            <span>12,450 mi</span>
            <span>Petrol</span>
            <span>Auto</span>
          </div>
          <div class="car-meta">
            <span class="car-dealer">BMW Approved Used</span>
            <span class="car-location">London</span>
          </div>
        </div>
      </article>
      <!-- ... 5 more cards ... -->
    </div>
  </div>
</section>
```

### CSS Specification (EXACT VALUES)
```css
/* SECTION */
.cars-section {
  padding: 120px 24px;
  background: #000000;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

/* SECTION HEADER */
.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 64px;
}

.section-h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  margin: 0;
}

.view-all {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #FF4D00;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.2s ease;
}

.view-all:hover {
  gap: 12px;
}

/* CAR GRID */
.cars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* CAR CARD */
.car-card {
  background: #0A0A0A;
  border: 1px solid #262626;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.car-card:hover {
  border-color: #FFFFFF;
  transform: translateY(-4px);
}

/* IMAGE */
.car-image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  position: relative;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.car-card:hover .car-image img {
  transform: scale(1.05);
}

/* PRICE BADGE */
.car-price-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid #262626;
  padding: 8px 16px;
  font-family: 'Space Mono', monospace;
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
}

/* CONTENT */
.car-content {
  padding: 24px;
}

.car-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.car-specs {
  display: flex;
  gap: 16px;
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  color: #737373;
  margin-bottom: 16px;
}

.car-specs span {
  position: relative;
}

.car-specs span:not(:last-child)::after {
  content: '·';
  position: absolute;
  right: -10px;
  color: #262626;
}

.car-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #262626;
}

.car-dealer {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #737373;
}

.car-location {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #737373;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .cars-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .cars-grid { grid-template-columns: 1fr; }
  .section-header { flex-direction: column; align-items: flex-start; gap: 16px; }
}
```

---

## COMPONENT 4: HOW IT WORKS (3-Step)

### HTML Structure
```html
<section class="how-it-works" aria-labelledby="how-heading">
  <div class="container">
    <h2 id="how-heading" class="section-h2">How It Works</h2>
    <div class="steps-grid">
      <div class="step-card">
        <span class="step-number">01</span>
        <h3 class="step-title">Search</h3>
        <p class="step-desc">Browse 5,000+ verified cars from trusted dealers. Filter by make, model, price, and location.</p>
      </div>
      <div class="step-card">
        <span class="step-number">02</span>
        <h3 class="step-title">Compare</h3>
        <p class="step-desc">View detailed specs, history checks, and dealer reviews. Compare side-by-side to find your match.</p>
      </div>
      <div class="step-card">
        <span class="step-number">03</span>
        <h3 class="step-title">Buy</h3>
        <p class="step-desc">Reserve online, arrange finance, and get your car delivered to your door — or collect from the dealer.</p>
      </div>
    </div>
  </div>
</section>
```

### CSS Specification (EXACT VALUES)
```css
.how-it-works {
  padding: 120px 24px;
  background: #0A0A0A;
}

.how-it-works .section-h2 {
  text-align: center;
  margin-bottom: 64px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.step-card {
  background: #111111;
  border: 1px solid #262626;
  padding: 48px 32px;
  text-align: center;
  transition: border-color 0.3s ease;
}

.step-card:hover {
  border-color: #FF4D00;
}

.step-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 64px;
  font-weight: 800;
  color: #262626;
  line-height: 1;
  margin-bottom: 24px;
  display: block;
}

.step-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 12px 0;
}

.step-desc {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #A3A3A3;
  line-height: 1.6;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .steps-grid { grid-template-columns: 1fr; }
}
```

---

## COMPONENT 5: STATS SECTION

### HTML Structure
```html
<section class="stats-section" aria-label="Key statistics">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-number" data-target="5000">0</span>
        <span class="stat-label">Cars Listed</span>
      </div>
      <div class="stat-item">
        <span class="stat-number" data-target="500">0</span>
        <span class="stat-label">Trusted Dealers</span>
      </div>
      <div class="stat-item">
        <span class="stat-number" data-target="50000">0</span>
        <span class="stat-label">Happy Buyers</span>
      </div>
      <div class="stat-item">
        <span class="stat-number" data-target="4.9" data-decimal="true">0</span>
        <span class="stat-label">Average Rating</span>
      </div>
    </div>
  </div>
</section>
```

### CSS Specification (EXACT VALUES)
```css
.stats-section {
  padding: 80px 24px;
  border-top: 1px solid #262626;
  border-bottom: 1px solid #262626;
  background: #000000;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-number {
  font-family: 'Space Mono', monospace;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1;
  display: block;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #737373;
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
}
```

---

## COMPONENT 6: WHY CHOOSE US (Feature Grid)

### HTML Structure
```html
<section class="why-section" aria-labelledby="why-heading">
  <div class="container">
    <h2 id="why-heading" class="section-h2">Why Choose AutoMarket</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">✓</div>
        <h3 class="feature-title">Verified History</h3>
        <p class="feature-desc">Every car comes with a free HPI check and full service history verification.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">✓</div>
        <h3 class="feature-title">Transparent Pricing</h3>
        <p class="feature-desc">No hidden fees. The price you see is the price you pay, guaranteed.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">✓</div>
        <h3 class="feature-title">Home Delivery</h3>
        <p class="feature-desc">Get your car delivered to your door, or collect from the dealer — your choice.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">✓</div>
        <h3 class="feature-title">Finance Options</h3>
        <p class="feature-desc">Compare finance deals from multiple lenders in minutes, with soft credit checks.</p>
      </div>
    </div>
  </div>
</section>
```

### CSS Specification (EXACT VALUES)
```css
.why-section {
  padding: 120px 24px;
  background: #000000;
}

.why-section .section-h2 {
  text-align: center;
  margin-bottom: 64px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.feature-card {
  background: #0A0A0A;
  border: 1px solid #262626;
  padding: 32px;
  transition: border-color 0.3s ease;
}

.feature-card:hover {
  border-color: #FFFFFF;
}

.feature-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111111;
  border: 1px solid #262626;
  color: #22C55E;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

.feature-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 8px 0;
}

.feature-desc {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #A3A3A3;
  line-height: 1.6;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .features-grid { grid-template-columns: 1fr; }
}
```

---

## COMPONENT 7: TESTIMONIALS (Grid — NOT Carousel)

### HTML Structure
```html
<section class="testimonials-section" aria-labelledby="testimonials-heading">
  <div class="container">
    <h2 id="testimonials-heading" class="section-h2">What Buyers Say</h2>
    <div class="testimonials-grid">
      <article class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">"Found my dream BMW in under 10 minutes. The whole process was seamless from search to delivery."</p>
        <div class="testimonial-author">
          <div class="author-avatar">JM</div>
          <div>
            <div class="author-name">James Mitchell</div>
            <div class="author-detail">London · BMW 3 Series</div>
          </div>
        </div>
      </article>
      <!-- ... 5 more testimonials ... -->
    </div>
  </div>
</section>
```

### CSS Specification (EXACT VALUES)
```css
.testimonials-section {
  padding: 120px 24px;
  background: #0A0A0A;
}

.testimonials-section .section-h2 {
  text-align: center;
  margin-bottom: 64px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: #111111;
  border: 1px solid #262626;
  padding: 32px;
  transition: border-color 0.3s ease;
}

.testimonial-card:hover {
  border-color: #FF4D00;
}

.testimonial-stars {
  color: #FACC15;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.testimonial-quote {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.7;
  color: #A3A3A3;
  margin: 0 0 24px 0;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  background: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  flex-shrink: 0;
}

.author-name {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
}

.author-detail {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #737373;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .testimonials-grid { grid-template-columns: 1fr; }
}
```

---

## COMPONENT 8: TRUST MARQUEE (Logo Strip)

### HTML Structure
```html
<section class="marquee-section" aria-label="Partner dealers">
  <div class="marquee-wrapper">
    <div class="marquee-track">
      <span class="marquee-item">BMW Approved</span>
      <span class="marquee-item">Audi Approved</span>
      <span class="marquee-item">Mercedes-Benz</span>
      <span class="marquee-item">Ford Direct</span>
      <span class="marquee-item">VW Group</span>
      <span class="marquee-item">Toyota Plus</span>
      <span class="marquee-item">Honda Approved</span>
      <span class="marquee-item">Nissan Intelligent Choice</span>
      <!-- Duplicate for seamless loop -->
      <span class="marquee-item">BMW Approved</span>
      <span class="marquee-item">Audi Approved</span>
      <span class="marquee-item">Mercedes-Benz</span>
      <span class="marquee-item">Ford Direct</span>
      <span class="marquee-item">VW Group</span>
      <span class="marquee-item">Toyota Plus</span>
      <span class="marquee-item">Honda Approved</span>
      <span class="marquee-item">Nissan Intelligent Choice</span>
    </div>
  </div>
</section>
```

### CSS Specification (EXACT VALUES)
```css
.marquee-section {
  padding: 64px 0;
  overflow: hidden;
  border-top: 1px solid #262626;
  border-bottom: 1px solid #262626;
  background: #000000;
}

.marquee-wrapper {
  position: relative;
}

/* Edge fade masks */
.marquee-wrapper::before,
.marquee-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;
}

.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(90deg, #000000 0%, transparent 100%);
}

.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(-90deg, #000000 0%, transparent 100%);
}

.marquee-track {
  display: flex;
  align-items: center;
  gap: 80px;
  width: max-content;
  animation: marquee 30s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-item {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #737373;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  opacity: 0.6;
  transition: opacity 0.3s ease, color 0.3s ease;
}

.marquee-item:hover {
  opacity: 1;
  color: #FFFFFF;
}
```

---

## COMPONENT 9: CTA BANNER

### HTML Structure
```html
<section class="cta-banner" aria-labelledby="cta-heading">
  <div class="cta-bg" aria-hidden="true"></div>
  <div class="cta-content">
    <h2 id="cta-heading" class="cta-h2">Ready to Find Your Perfect Car?</h2>
    <p class="cta-sub">Join 50,000+ buyers who found their ideal car through AutoMarket.</p>
    <div class="cta-buttons">
      <a href="/search" class="cta-btn-primary">Search Cars</a>
      <a href="/sell" class="cta-btn-secondary">Sell Your Car</a>
    </div>
  </div>
</section>
```

### CSS Specification (EXACT VALUES)
```css
.cta-banner {
  padding: 120px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: #000000;
}

.cta-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 77, 0, 0.08) 0%, transparent 60%);
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
}

.cta-h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
}

.cta-sub {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #A3A3A3;
  margin: 0 0 40px 0;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.cta-btn-primary {
  background: #FF4D00;
  color: #FFFFFF;
  border: none;
  padding: 16px 40px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-block;
}

.cta-btn-primary:hover {
  background: #FF6B2C;
  box-shadow: 0 0 30px rgba(255, 77, 0, 0.4);
  transform: translateY(-2px);
}

.cta-btn-secondary {
  background: transparent;
  border: 1px solid #262626;
  color: #FFFFFF;
  padding: 16px 40px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
}

.cta-btn-secondary:hover {
  border-color: #FFFFFF;
}

/* RESPONSIVE */
@media (max-width: 640px) {
  .cta-buttons { flex-direction: column; width: 100%; }
  .cta-btn-primary, .cta-btn-secondary { width: 100%; text-align: center; }
}
```

---

## COMPONENT 10: FOOTER

### HTML Structure
```html
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand-col">
        <div class="footer-brand">AutoMarket</div>
        <p class="footer-desc">The better way to buy and sell cars online. Verified dealers, transparent pricing, and home delivery.</p>
      </div>
      <div class="footer-col">
        <h4 class="footer-col-title">Buy</h4>
        <a href="/search" class="footer-link">Search Cars</a>
        <a href="/finance" class="footer-link">Car Finance</a>
        <a href="/part-exchange" class="footer-link">Part Exchange</a>
        <a href="/reviews" class="footer-link">Buyer Reviews</a>
      </div>
      <div class="footer-col">
        <h4 class="footer-col-title">Sell</h4>
        <a href="/sell" class="footer-link">Sell Your Car</a>
        <a href="/dealer-signup" class="footer-link">Dealer Sign Up</a>
        <a href="/dealer-portal" class="footer-link">Dealer Portal</a>
      </div>
      <div class="footer-col">
        <h4 class="footer-col-title">Company</h4>
        <a href="/about" class="footer-link">About Us</a>
        <a href="/careers" class="footer-link">Careers</a>
        <a href="/press" class="footer-link">Press</a>
        <a href="/contact" class="footer-link">Contact</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 AutoMarket. All rights reserved.</span>
      <div class="footer-legal">
        <a href="/terms" class="footer-link">Terms</a>
        <a href="/privacy" class="footer-link">Privacy</a>
        <a href="/cookies" class="footer-link">Cookies</a>
      </div>
    </div>
  </div>
</footer>
```

### CSS Specification (EXACT VALUES)
```css
.footer {
  padding: 80px 24px 40px;
  border-top: 1px solid #262626;
  background: #000000;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 64px;
  margin-bottom: 64px;
}

.footer-brand {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.footer-desc {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #737373;
  line-height: 1.7;
  max-width: 300px;
  margin: 0;
}

.footer-col-title {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 24px 0;
}

.footer-link {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #737373;
  text-decoration: none;
  padding: 6px 0;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #FFFFFF;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  border-top: 1px solid #262626;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #737373;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal .footer-link {
  display: inline;
  padding: 0;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

---

## COMPONENT CHECKLIST FOR GEMINI

Before marking components complete, verify:

- [ ] Navbar: sticky, transparent→scrolled, 72px height, hamburger below 768px
- [ ] Hero: 100vh, badge, word-reveal H1, search bar (4 fields), trust row, scroll indicator
- [ ] Featured Cars: 3-col grid, 6 cards, hover lift + border white + image scale
- [ ] How It Works: 3 steps, ghosted numbers, hover border orange
- [ ] Stats: 4 counters, counter animation on scroll, mono font
- [ ] Why Choose Us: 4 features, checkmark icons, hover border white
- [ ] Testimonials: 3-col grid (NOT carousel), star ratings, hover border orange
- [ ] Trust Marquee: infinite scroll, edge fade, pause on hover, grayscale logos
- [ ] CTA Banner: radial glow, 2 buttons, primary orange glow hover
- [ ] Footer: 4-col grid, brand + 3 link columns, legal bottom bar

---

*File 3 of 6 — Read next: 04_ANIMATIONS.md*
