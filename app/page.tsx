"use client";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import FeaturedCars from "./sections/FeaturedCars";
import HowItWorks from "./sections/HowItWorks";
import Stats from "./sections/Stats";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonials from "./sections/Testimonials";
import TrustMarquee from "./sections/TrustMarquee";
import CTABanner from "./sections/CTABanner";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Navbar (Sticky header) */}
      <Navbar />

      {/* Main Content Area with Skip-to-Content target id */}
      <main id="main-content">
        {/* 2. Hero Section (Cinematic intro) */}
        <Hero />

        {/* 3. Featured Cars Section */}
        <FeaturedCars />

        {/* 4. How It Works Section */}
        <HowItWorks />

        {/* 5. Stats Section */}
        <Stats />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Testimonials Section */}
        <Testimonials />

        {/* 8. Trust Marquee Section */}
        <TrustMarquee />

        {/* 9. CTA Banner Section */}
        <CTABanner />
      </main>

      {/* 10. Footer */}
      <Footer />
    </>
  );
}
