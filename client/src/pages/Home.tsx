import { useEffect, useState } from "react";

import { FeatureGridSection } from "@/sections/FeatureGridSection";
import { HealingLivingSection } from "@/sections/HealingLivingSection";
import { ClosingManifestoSection } from "@/sections/ClosingManifestoSection";
import { Footer } from "@/sections/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { Navigation } from "@/sections/Navigation";
import { PainPointsSection } from "@/sections/PainPointsSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ProductGridSection } from "@/sections/ProductGridSection";
import { ProfileSystemsSection } from "@/sections/ProfileSystemsSection";

/**
 * DESIGN PHILOSOPHY: Healing Aesthetic with Architectural Serenity
 * 
 * Calm Scandinavian-Japanese influence
 * Large breathing white space
 * Soft neutral color palette
 * Refined serif headlines
 * Scientific precision
 * Health-aware engineering
 * Quiet premium presence
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProductGridSection />
      <PainPointsSection />
      <ProfileSystemsSection />
      <FeatureGridSection />
      <HealingLivingSection />
      <ProcessSection />
      <ClosingManifestoSection />
      <Footer />
    </div>
  );
}
