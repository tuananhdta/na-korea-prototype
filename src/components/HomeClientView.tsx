"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductSection } from "@/components/ProductSection";
import { GinsengSection } from "@/components/GinsengSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";

export function HomeClientView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Header / Navbar */}
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} overlay />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Fullscreen Slider */}
        <HeroSlider />

        {/* 2. Products Showcase Section */}
        <ProductSection />

        {/* 3. Korean Ginseng & Red Ginseng Section */}
        <GinsengSection />

        {/* 4. Brand Story & Video Section */}
        <BrandStorySection />
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
