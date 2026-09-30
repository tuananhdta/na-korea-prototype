"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { BrandStorySection } from "@/components/BrandStorySection";
import { MetricsSection } from "@/components/MetricsSection";
import { ProductSection } from "@/components/ProductSection";
import { PartnerSection } from "@/components/PartnerSection";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import { IntroScreen } from "@/components/IntroScreen";

export function HomeClientView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-white font-sans">
      {/* Intro Screen Reveal (Only on first visit per session) */}
      <IntroScreen />

      {/* Header / Navbar */}
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} overlay />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Fullscreen Video Hero Background */}
        <HeroSlider />

        {/* 2. Brand Story & Heritage Video Section */}
        <BrandStorySection />

        {/* 3. Metrics & Certifications Section (Phase 2) */}
        <MetricsSection />

        {/* 4. Enterprise Partners Infinite Marquee Section (Phase 3) */}
        <PartnerSection />

        {/* 5. Products Showcase Section (Phase 4) */}
        <ProductSection />
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
