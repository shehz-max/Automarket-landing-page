# 06 — BUILD PROMPT
## Car Marketplace Landing Page — Final Binding Instructions for Gemini

---

## CRITICAL INSTRUCTION FOR GEMINI (READ FIRST)

**You are building a Next.js 15 car marketplace landing page. You have been given 5 specification files (01-05). You MUST implement EVERY specification exactly as written. No additions, no removals, no changes.**

**BOUNDARY RULES:**
1. If a value is specified (color, padding, font-size, timing), use it EXACTLY. Do not approximate.
2. If a component is specified, build it EXACTLY as described. Do not add extra elements.
3. If an animation is specified, implement it EXACTLY with the given timing and easing.
4. If a rule says "DO NOT" or "NEVER", do not do that thing.
5. If a rule says "MUST" or "ALWAYS", do that thing without exception.
6. Do not use your own design judgment to "improve" the design. Follow the specifications.
7. Do not add decorative elements not in the spec (confetti, particles, floating shapes, etc.).
8. Do not remove accessibility features (focus states, aria labels, semantic HTML).
9. Do not skip performance optimizations (image priority, font swap, cleanup).
10. Do not skip the prefers-reduced-motion implementation.

---

## PROJECT SETUP

### Tech Stack (EXACT)
```
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (page transitions only)
- GSAP + ScrollTrigger (scroll animations)
- Lenis (smooth scroll)
- next/font (Google Fonts: Montserrat, Inter, Space Mono)
```

### File Structure
```
app/
├── layout.tsx              # Root layout with fonts + metadata
├── page.tsx                # Main landing page (all sections)
├── globals.css             # Global styles, CSS variables, keyframes
├── template.tsx            # Framer Motion page transition
├── sections/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── FeaturedCars.tsx
│   ├── HowItWorks.tsx
│   ├── Stats.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── TrustMarquee.tsx
│   ├── CTABanner.tsx
│   └── Footer.tsx
├── components/
│   ├── SmoothScroll.tsx    # Lenis setup
│   ├── ScrollReveal.tsx    # GSAP scroll reveal wrapper
│   ├── HeroAnimation.tsx   # Hero timeline animation
│   └── StatCounter.tsx     # Counter animation component
├── hooks/
│   └── useCountUp.ts       # Counter animation hook
├── data/
│   └── cars.ts             # Static car data (6 demo cars)
└── public/
    ├── og-image.jpg        # 1200x630 OG image
    └── car-1.jpg to car-6.jpg  # Demo car images (use placeholders)
```

---

## IMPLEMENTATION ORDER

Build in this exact order. Do not skip steps.

### Step 1: Foundation
1. Create `app/layout.tsx` with fonts, metadata, and schema
2. Create `app/globals.css` with all CSS custom properties, keyframes, and global styles
3. Create `app/template.tsx` with Framer Motion page transition
4. Create `app/data/cars.ts` with 6 demo car objects

### Step 2: Animation Infrastructure
5. Create `app/components/SmoothScroll.tsx` (Lenis setup — exact config from 04_ANIMATIONS.md)
6. Create `app/components/ScrollReveal.tsx` (GSAP wrapper — exact from 04_ANIMATIONS.md)
7. Create `app/hooks/useCountUp.ts` (counter hook — exact from 04_ANIMATIONS.md)
8. Create `app/components/HeroAnimation.tsx` (hero timeline — exact from 04_ANIMATIONS.md)

### Step 3: Sections (in order)
9. Create `app/sections/Navbar.tsx` (exact from 03_COMPONENTS.md)
10. Create `app/sections/Hero.tsx` (exact from 03_COMPONENTS.md + HeroAnimation)
11. Create `app/sections/FeaturedCars.tsx` (exact from 03_COMPONENTS.md + ScrollReveal)
12. Create `app/sections/HowItWorks.tsx` (exact from 03_COMPONENTS.md + ScrollReveal)
13. Create `app/sections/Stats.tsx` (exact from 03_COMPONENTS.md + useCountUp)
14. Create `app/sections/WhyChooseUs.tsx` (exact from 03_COMPONENTS.md + ScrollReveal)
15. Create `app/sections/Testimonials.tsx` (exact from 03_COMPONENTS.md + ScrollReveal)
16. Create `app/sections/TrustMarquee.tsx` (exact from 03_COMPONENTS.md)
17. Create `app/sections/CTABanner.tsx` (exact from 03_COMPONENTS.md + ScrollReveal)
18. Create `app/sections/Footer.tsx` (exact from 03_COMPONENTS.md)

### Step 4: Assembly
19. Create `app/page.tsx` importing all sections in correct order
20. Wrap page with SmoothScroll in layout

### Step 5: Verification
21. Run `npm run build` — must build without errors
22. Check all 10 components from 03_COMPONENTS.md checklist
23. Check all animation items from 04_ANIMATIONS.md checklist
24. Check all SEO items from 05_SEO_METADATA.md checklist

---

## DESIGN TOKENS REFERENCE (Quick Access)

Use these exact values everywhere. Reference via CSS custom properties.

### Colors
```
--color-bg-primary:     #000000
--color-bg-elevated:    #0A0A0A
--color-bg-card:        #111111
--color-text-primary:   #FFFFFF
--color-text-body:      #A3A3A3
--color-text-muted:     #737373
--color-border-rest:    #262626
--color-border-hover:   #FFFFFF
--color-accent:         #FF4D00
--color-accent-hover:   #FF6B2C
--color-success:        #22C55E
--color-star:           #FACC15
```

### Fonts
```
--font-display:  'Montserrat', sans-serif (weight 700, 800)
--font-body:     'Inter', sans-serif (weight 400, 500, 600)
--font-mono:     'Space Mono', monospace (weight 400, 700)
```

### Spacing
```
--section-padding-y: 120px
--container-max:     1280px
--grid-gap:          24px
--card-padding:      24px
--nav-height:        72px
```

### Border Radius
```
--radius-none: 0px (default everywhere)
--radius-ui:   4px (tiny UI elements only)
```

### Transitions
```
--duration-fast:   0.15s
--duration-normal: 0.3s
--duration-slow:   0.5s
--duration-reveal: 0.8s
--ease-out:        cubic-bezier(0.16, 1, 0.3, 1)
```

---

## SECTION FLOW (Single Page)

```
1. NAVBAR (Sticky, transparent→solid on scroll)
   └── Logo | Search Cars | Sell Your Car | Finance | About | Contact | "List Your Car" CTA

2. HERO (100vh, cinematic)
   └── Badge "5,000+ cars from trusted dealers" (green pulse dot)
       H1 "Find Your Perfect Car" (word-by-word reveal, "Perfect" in gradient orange)
       Subheadline "Browse verified used cars..."
       SEARCH BAR (4 fields: Make/Model/Postcode/Max Price + orange Search button)
       Trust row "★★★★★ 4.9 from 2,000+ reviews | Trustpilot"
       Scroll indicator (bounce animation)

3. FEATURED CARS (3-col grid, 6 cards)
   └── Section header "Featured Cars" + "View All Cars →"
       6 car cards (image 16:10, price badge, title, specs, dealer, location)
       Hover: border white, translateY -4px, image scale 1.05

4. HOW IT WORKS (3-step, dark elevated background)
   └── "How It Works" heading
       3 cards: 01 Search | 02 Compare | 03 Buy
       Ghosted numbers, hover border turns orange

5. STATS (Counter animation, bordered top/bottom)
   └── 5,000+ Cars Listed | 500+ Trusted Dealers | 50,000+ Happy Buyers | 4.9★ Average Rating
       Mono font, count-up animation on scroll

6. WHY CHOOSE US (4-col feature grid)
   └── Verified History | Transparent Pricing | Home Delivery | Finance Options
       Checkmark icons, hover border white

7. TESTIMONIALS (3-col grid, NOT carousel)
   └── 6 testimonial cards with star ratings, quotes, author avatars
       Hover border turns orange

8. TRUST MARQUEE (Infinite scroll partner logos)
   └── Dealer/partner names, 30s linear, pause on hover, edge fade masks

9. CTA BANNER (Radial orange glow, centered)
   └── "Ready to Find Your Perfect Car?"
       "Search Cars" (orange, glow hover) | "Sell Your Car" (outlined)

10. FOOTER (4-col grid)
    └── Brand + desc | Buy links | Sell links | Company links
        Bottom bar: copyright + legal links
```

---

## RESPONSIVE BREAKPOINTS

```
Mobile:  < 640px   — 1 column, hamburger menu, stacked search bar
Tablet:  640-1024px — 2 column grids, reduced padding
Desktop: > 1024px  — Full layout, 3 column grids, 120px section padding
```

**Mobile-specific rules:**
- Navbar: hamburger menu, hide desktop links, hide CTA
- Hero: stacked search fields (vertical), reduced font sizes
- Grids: 1 column on mobile, 2 on tablet
- Section padding: 80px vertical on mobile (vs 120px desktop)
- Touch targets: minimum 44px × 44px

---

## PERFORMANCE REQUIREMENTS

```
LCP (Largest Contentful Paint): < 2.5 seconds
INP (Interaction to Next Paint): < 200 milliseconds
CLS (Cumulative Layout Shift):   < 0.1

How to achieve:
- Hero image: priority loading (Next.js Image component)
- Fonts: next/font with display: swap
- Animations: only transform + opacity
- Images: WebP format, width + height specified
- No layout-shifting animations
- Lenis for smooth scroll (reduces INP)
```

---

## FINAL CHECKLIST (Before Submitting to Client)

### Design
- [ ] Background is pure black (#000000) everywhere
- [ ] No border-radius on cards, sections, or buttons (0px)
- [ ] No shadows (depth via border contrast only)
- [ ] Accent orange (#FF4D00) only on CTAs and 1-2 hero words
- [ ] All fonts correct: Montserrat (headings), Inter (body), Space Mono (specs)
- [ ] All spacing correct: 120px section padding, 24px grid gap
- [ ] All hover states implemented exactly as specified

### Animations
- [ ] Lenis smooth scroll (lerp 0.08, duration 1.8)
- [ ] Hero sequence: 2.4s total, all layers present
- [ ] ScrollReveal on all sections (fadeInUp, 0.8s, 0.15s stagger)
- [ ] Counter animation on stats (2000ms, ease-out cubic)
- [ ] Marquee 30s linear infinite, pause on hover
- [ ] prefers-reduced-motion implemented
- [ ] Focus states with orange outline

### Components
- [ ] All 10 components from 03_COMPONENTS.md built
- [ ] Navbar: sticky, transparent→scrolled, hamburger below 768px
- [ ] Hero: badge, word-reveal H1, search bar, trust row, scroll indicator
- [ ] Featured Cars: 6 cards, hover effects
- [ ] How It Works: 3 steps, ghosted numbers
- [ ] Stats: 4 counters, mono font
- [ ] Why Choose Us: 4 features, checkmarks
- [ ] Testimonials: 3-col grid, NOT carousel
- [ ] Trust Marquee: infinite scroll, edge fade
- [ ] CTA Banner: radial glow, 2 buttons
- [ ] Footer: 4-col grid, legal bar

### SEO
- [ ] Metadata in layout.tsx (title template, description, OG, Twitter)
- [ ] Semantic HTML structure (header, nav, main, section, footer)
- [ ] One H1 per page, first heading, above fold
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] All images have descriptive alt text
- [ ] Schema markup: LocalBusiness + FAQPage + BreadcrumbList
- [ ] Canonical URLs
- [ ] Robots: index, follow

### Accessibility
- [ ] prefers-reduced-motion CSS
- [ ] Focus-visible states
- [ ] Semantic HTML
- [ ] ARIA labels on navigation
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA

### Performance
- [ ] Hero image loads with priority
- [ ] All images have width + height
- [ ] Fonts use display: swap
- [ ] No width/height/top/left animations
- [ ] ScrollTrigger instances cleaned up on unmount
- [ ] Build completes without errors

---

## DEPLOYMENT

Deploy to Vercel:
```bash
npm run build
# Push to GitHub
# Connect repo to Vercel
# Deploy
```

**Vercel settings:**
- Framework preset: Next.js
- Build command: `next build`
- Output directory: `.next`
- Environment variables: none needed for demo

---

## BOUNDARY STATEMENT

**This is a complete specification. You are NOT to:**
- Add features not listed (chat widget, AI assistant, dark mode toggle, etc.)
- Change the design direction (no "I think white background would look better")
- Skip components ("I'll add testimonials later")
- Approximate values ("close enough to 262626")
- Use different fonts ("Montserrat is boring, let's use Poppins")
- Add rounded corners ("sharp corners look harsh")
- Add shadows ("cards need depth")
- Skip accessibility ("we'll add it later")
- Skip SEO ("it's just a demo")

**You ARE to:**
- Follow every specification exactly
- Ask for clarification if something is unclear
- Build the complete landing page as specified
- Make it deployable to Vercel
- Ensure it passes build without errors

---

*File 6 of 6 — This is the FINAL file. Begin implementation now.*
