import type { Metadata } from "next";
import { Montserrat, Inter, Space_Mono } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

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
  metadataBase: new URL("https://automarket.co.uk"),
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
  twitter: {
    card: "summary_large_image",
    title: "Buy & Sell Used Cars Online | AutoMarket",
    description:
      "Browse 5,000+ verified used cars from 500+ trusted dealers. Transparent pricing, free history checks, and home delivery.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://automarket.co.uk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "GOOGLE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
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
  };

  const faqPageSchema = {
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
  };

  const softwareApplicationSchema = {
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
  };

  return (
    <html lang="en-GB" className={`${montserrat.variable} ${inter.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
