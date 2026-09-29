"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { MetricsSection } from "@/components/MetricsSection";
import { ProductSection } from "@/components/ProductSection";
import { GinsengSection } from "@/components/GinsengSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import { PartnerSection } from "@/components/PartnerSection";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import { IntroScreen } from "@/components/IntroScreen";

export function HomeClientView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Intro Screen Reveal (Only on first visit per session) */}
      <IntroScreen />

      {/* Header / Navbar */}
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} overlay />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Fullscreen Video Hero Background */}
        <HeroSlider />

        {/* 2. Metrics & Certifications Section (Phase 2) */}
        <MetricsSection />

        {/* 3. Products Showcase Section */}
        <ProductSection />

        {/* 3. Korean Ginseng & Red Ginseng Section */}
        <GinsengSection />

        {/* 4. Brand Story & Video Section */}
        <BrandStorySection />

        {/* 5. Enterprise Partners Infinite Marquee Section */}
        <PartnerSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Slide-Out Navigation */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </div>
  );
}
