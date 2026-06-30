# 05 — SEO & METADATA
## Car Marketplace Landing Page — Search Optimization

---

## CRITICAL INSTRUCTION FOR GEMINI

**DO NOT:**
- Remove any meta tag specified here
- Change any meta content structure
- Skip schema markup
- Skip semantic HTML structure
- Use generic alt text on images
- Skip heading hierarchy rules
- Remove accessibility attributes

**DO:**
- Implement ALL metadata exactly as specified
- Add per-page metadata for every route
- Include JSON-LD schema in <head>
- Use semantic HTML elements
- Add descriptive alt text to ALL images
- Maintain heading hierarchy (h1 → h2 → h3)
- Include focus-visible states

---

## 1. ROOT METADATA (Next.js App Router)

### File: app/layout.tsx
```tsx
import type { Metadata } from "next";
import { Montserrat, Inter, Space_Mono } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Title template — {page title} | {site name}
  title: {
    template: "%s | AutoMarket",
    default: "Buy & Sell Used Cars Online | Trusted Dealers | AutoMarket",
  },

  description:
    "Browse 5,000+ verified used cars from 500+ trusted dealers nationwide. Transparent pricing, free history checks, home delivery, and finance options. Find your perfect car today.",

  keywords: [
    "used cars",
    "car marketplace",
    "buy car online",
    "sell car online",
    "car dealers",
    "used car search",
    "car finance",
    "car delivery",
    "verified used cars",
    "trusted car dealers",
  ],

  // Open Graph (Facebook, LinkedIn, WhatsApp previews)
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://automarket.co.uk",
    siteName: "AutoMarket",
    title: "Buy & Sell Used Cars Online | AutoMarket",
    description:
      "Browse 5,000+ verified used cars from 500+ trusted dealers. Transparent pricing, free history checks, and home delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AutoMarket — The better way to buy and sell cars online",
      },
    ],
  },

  // Twitter/X card
  twitter: {
    card: "summary_large_image",
    title: "Buy & Sell Used Cars Online | AutoMarket",
    description:
      "Browse 5,000+ verified used cars from 500+ trusted dealers. Transparent pricing, free history checks, and home delivery.",
    images: ["/og-image.jpg"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://automarket.co.uk",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  // Verification (add actual tokens when available)
  verification: {
    google: "GOOGLE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${montserrat.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**CRITICAL RULES:**
- `lang="en-GB"` — UK English locale. DO NOT use "en-US" for UK market.
- `display: "swap"` on all fonts — prevents FOUT (Flash of Unstyled Text).
- Title template: `%s | AutoMarket` — every page title ends with "| AutoMarket".
- Default title: must include primary keywords.
- Description: 150-160 characters, starts with primary keyword, includes benefit and CTA.
- OG image: 1200×630px, descriptive alt text.
- Canonical URL: prevents duplicate content issues.

---

## 2. PER-PAGE METADATA

### Example: Search Page
```tsx
// app/search/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Used Cars | AutoMarket",
  description:
    "Search 5,000+ verified used cars from trusted dealers. Filter by make, model, price, and location. Find your perfect car today.",
  alternates: {
    canonical: "https://automarket.co.uk/search",
  },
  openGraph: {
    url: "https://automarket.co.uk/search",
  },
};
```

### Example: Sell Page
```tsx
// app/sell/page.tsx
export const metadata: Metadata = {
  title: "Sell Your Car | AutoMarket",
  description:
    "Sell your car fast with AutoMarket. Get an instant valuation, reach 500+ dealers, and sell with confidence. Free listing, no hidden fees.",
  alternates: {
    canonical: "https://automarket.co.uk/sell",
  },
};
```

**CRITICAL RULES:**
- EVERY page must have its own metadata.
- Title must be unique per page.
- Description must be unique per page.
- Canonical URL must match the page URL.

---

## 3. H1 TEMPLATES BY PAGE

| Page | H1 Template | Example |
|------|-------------|---------|
| Homepage | `[Action] [Category] | [Brand]` | "Find Your Perfect Car \| AutoMarket" |
| Search | `[Action] [Category] \| [Brand]` | "Search Used Cars \| AutoMarket" |
| Sell | `[Action] [Category] \| [Brand]` | "Sell Your Car \| AutoMarket" |
| Finance | `[Category] [Action] \| [Brand]` | "Car Finance Options \| AutoMarket" |
| About | `[Category] [Action] \| [Brand]` | "About AutoMarket \| Trusted Car Marketplace" |
| Contact | `[Action] [Brand] \| [Category]` | "Contact AutoMarket \| Get in Touch" |

**CRITICAL RULES:**
- One H1 per page. NEVER more than one.
- H1 must be the FIRST heading on the page.
- H1 must be above the fold (visible without scrolling).
- H1 must contain the primary keyword for that page.
- Heading hierarchy: h1 → h2 → h3. NEVER skip levels (e.g., h1 → h3).

---

## 4. SCHEMA MARKUP (JSON-LD)

### 4.1 LocalBusiness Schema (Primary)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AutoMarket",
  "description": "The UK's trusted car marketplace. Browse 5,000+ verified used cars from 500+ dealers. Transparent pricing, free history checks, and home delivery.",
  "url": "https://automarket.co.uk",
  "telephone": "+44-20-XXXX-XXXX",
  "email": "hello@automarket.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Auto Street",
    "addressLocality": "London",
    "addressRegion": "England",
    "postalCode": "SW1A 1AA",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5074",
    "longitude": "-0.1278"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "geoRadius": "100000"
  },
  "priceRange": "££",
  "image": "https://automarket.co.uk/og-image.jpg",
  "sameAs": [
    "https://www.facebook.com/automarket",
    "https://www.instagram.com/automarket",
    "https://twitter.com/automarket"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2000",
    "bestRating": "5"
  }
}
</script>
```

### 4.2 FAQPage Schema (For FAQ Section)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does AutoMarket verify car history?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every car on AutoMarket comes with a free HPI check covering outstanding finance, write-off status, mileage verification, and stolen vehicle checks. We also verify service history with the dealer."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get finance through AutoMarket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AutoMarket partners with multiple lenders to offer competitive car finance options. You can compare rates, check eligibility with a soft credit check, and get approved in minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Is home delivery available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many of our dealers offer home delivery across the UK. Delivery fees and times vary by dealer and location. You can also choose to collect your car from the dealership."
      }
    }
  ]
}
</script>
```

### 4.3 BreadcrumbList Schema (All Multi-Level Pages)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://automarket.co.uk"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Search",
      "item": "https://automarket.co.uk/search"
    }
  ]
}
</script>
```

### 4.4 SoftwareApplication Schema (For Platform Features)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AutoMarket",
  "url": "https://automarket.co.uk",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP",
    "description": "Free to browse and search. No buyer fees."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2000"
  }
}
</script>
```

**CRITICAL RULES:**
- LocalBusiness schema MUST include: address, geo, opening hours, service area.
- FAQPage schema boosts rich results in Google (FAQ accordion in search).
- BreadcrumbList schema on ALL pages except homepage.
- AggregateRating schema for star ratings in search results.
- Validate ALL schema at: https://validator.schema.org/

---

## 5. SEMANTIC HTML STRUCTURE

### Complete Page Structure
```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <!-- Metadata -->
  <!-- JSON-LD Schema -->
</head>
<body>

  <header role="banner">
    <nav aria-label="Main navigation">
      <!-- Logo, links, CTA -->
    </nav>
  </header>

  <main id="main-content">

    <section aria-labelledby="hero-heading">
      <h1 id="hero-heading">Find Your Perfect Car</h1>
      <!-- Hero content -->
    </section>

    <section aria-labelledby="cars-heading">
      <h2 id="cars-heading">Featured Cars</h2>
      <!-- Car cards -->
    </section>

    <section aria-labelledby="how-heading">
      <h2 id="how-heading">How It Works</h2>
      <!-- Steps -->
    </section>

    <section aria-label="Key statistics">
      <!-- Stats -->
    </section>

    <section aria-labelledby="why-heading">
      <h2 id="why-heading">Why Choose AutoMarket</h2>
      <!-- Features -->
    </section>

    <section aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">What Buyers Say</h2>
      <!-- Testimonials -->
    </section>

    <section aria-label="Partner dealers">
      <!-- Marquee -->
    </section>

    <section aria-labelledby="cta-heading">
      <h2 id="cta-heading">Ready to Find Your Perfect Car?</h2>
      <!-- CTA -->
    </section>

  </main>

  <footer role="contentinfo">
    <!-- Brand, links, legal, copyright -->
  </footer>

</body>
</html>
```

**Semantic Rules:**
- `<header>` with `role="banner"` for site header.
- `<nav>` with `aria-label="Main navigation"` for primary navigation.
- `<main>` with `id="main-content"` for skip-to-main link.
- `<section>` with `aria-labelledby` pointing to section heading.
- `<footer>` with `role="contentinfo"` for site footer.
- `<article>` for self-contained content (car cards, testimonials).
- One `<h1>` per page. Heading hierarchy: h1 → h2 → h3.
- All images: descriptive `alt` text (not "image1.jpg" or "car").
- All interactive elements: keyboard accessible (tabindex, focus states).
- All forms: `<label>` associated with `<input>` via `for` attribute or `aria-label`.
- Skip-to-main link for keyboard users.

---

## 6. IMAGE OPTIMIZATION

### Next.js Image Component (ALWAYS USE THIS)
```tsx
import Image from "next/image";

// Hero image (above fold — priority)
<Image
  src="/hero-car.jpg"
  alt="2022 BMW 3 Series in Alpine White parked on city street"
  width={1200}
  height={800}
  priority          // CRITICAL for LCP
  quality={85}      // Sweet spot: quality vs file size
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Low-quality placeholder
/>

// Car card image (below fold — lazy loaded by default)
<Image
  src="/car-1.jpg"
  alt="2022 BMW 3 Series 320i M Sport in black, front three-quarter view"
  width={600}
  height={375}
  quality={85}
  loading="lazy"    // Default, explicit for clarity
/>
```

**Image Rules:**
- WebP format for all photos (30-35% smaller than JPEG).
- SVG for logos, icons, illustrations.
- AVIF for hero images if browser support allows.
- NEVER use PNG for photos.
- `width` + `height` on ALL images (prevents CLS — Cumulative Layout Shift).
- `priority` prop on above-fold images (prevents LCP penalty).
- `quality={85}` on all images.
- Descriptive `alt` text: "2022 BMW 3 Series 320i M Sport in black" NOT "car".

---

## 7. LOCAL SEO (UK Market)

### Requirements
```
1. NAP consistency (Name, Address, Phone) — identical everywhere:
   - Website footer
   - Google Business Profile
   - Facebook page
   - All directories

2. City-specific landing pages for each service area:
   /used-cars-london
   /used-cars-manchester
   /used-cars-birmingham

3. Google Business Profile schema in footer (LocalBusiness schema)

4. Location page content must include:
   - City name in H1
   - Full address with schema
   - Google Maps embed
   - Service area list
   - Local phone number (click-to-call on mobile)

5. Review schema (AggregateRating) for star ratings in search
```

---

## 8. CONVERSION OPTIMIZATION

### CTA Language
| Context | Primary CTA | Secondary CTA |
|---------|-------------|---------------|
| Hero | "Search Cars" | "Sell Your Car" |
| Car cards | "View Details" | "Save Car" |
| CTA Banner | "Search Cars" | "Sell Your Car" |
| Footer | "Contact Us" | "List Your Car" |

### CTA Placement Rules
```
1. Above the fold — primary CTA always visible without scrolling
2. Sticky mobile CTA — fixed bottom bar on mobile (phone number or search)
3. After social proof — CTA after testimonials converts well
4. FAQ bottom — after objections are handled
5. Exit intent — before user leaves (optional)

AVOID:
- Multiple competing CTAs in the same section
- "Submit" or "Click Here" button text
- CTAs that don't say what happens next
```

### Trust Signals (Place Throughout Page)
- "★★★★★ 4.9 — 2,000+ verified reviews" (hero)
- "5,000+ cars from trusted dealers" (hero badge)
- "Free HPI check on every car" (features)
- "Home delivery available" (features)
- "No buyer fees" (features)
- Partner dealer logos (marquee)
- Testimonial quotes with names and locations

---

## 9. PERFORMANCE TARGETS (Core Web Vitals)

```
Google Core Web Vitals Targets:
  LCP (Largest Contentful Paint): < 2.5 seconds
  INP (Interaction to Next Paint): < 200 milliseconds
  CLS (Cumulative Layout Shift):   < 0.1

How to achieve:

LCP:
  - Hero image: priority loading (Next.js Image)
  - Hero font: preloaded with <link rel="preload">
  - No large hero animations blocking paint
  - Serve images from CDN

INP:
  - Lenis smooth scroll (reduces janky scroll INP)
  - No heavy JS on main thread during scroll
  - Use requestAnimationFrame for animations

CLS:
  - Always specify width + height on images
  - Reserve space for ads/embeds
  - Font loading: use font-display: swap
  - No layout-shifting animations (no width/height changes)
```

---

## 10. COMPLETE SEO CHECKLIST

### Before Launch — Every Project

**Metadata:**
- [ ] Title template configured in layout.tsx
- [ ] Per-page title and description on every page
- [ ] OG image created (1200×630px) and referenced
- [ ] Twitter card configured
- [ ] Canonical URL set on all pages
- [ ] Robots meta: index, follow
- [ ] Google verification token added

**Content:**
- [ ] H1 contains primary keyword
- [ ] H1 is the first heading on the page
- [ ] H1 is above the fold
- [ ] Heading hierarchy is correct (h1 → h2 → h3, no skipping)
- [ ] All images have descriptive alt text
- [ ] No images with alt="" unless purely decorative
- [ ] Body text mentions primary keyword naturally 2-4 times
- [ ] Internal links to relevant pages

**Schema:**
- [ ] LocalBusiness schema with full address, geo, hours
- [ ] FAQPage schema if FAQ section exists
- [ ] BreadcrumbList schema on inner pages
- [ ] AggregateRating schema for star ratings
- [ ] Schema validated at validator.schema.org

**Technical:**
- [ ] All images: WebP format
- [ ] All images: width + height specified (prevents CLS)
- [ ] Hero image: priority prop (prevents LCP penalty)
- [ ] Fonts: loaded via next/font (prevents FOUT)
- [ ] sitemap.xml generated and submitted
- [ ] robots.txt allows crawling of all pages
- [ ] No broken links (404 errors)
- [ ] Mobile viewport meta tag present
- [ ] Page loads in < 3 seconds on 4G
- [ ] Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1

**Local SEO:**
- [ ] NAP in footer (Name, Address, Phone)
- [ ] LocalBusiness schema with address
- [ ] Google Maps embed on contact page
- [ ] City name in H1 on location pages
- [ ] City-specific URLs if multiple locations
- [ ] Google Business Profile claimed and optimized

---

*File 5 of 6 — Read next: 06_BUILD_PROMPT.md*
