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

export default function SectionsGallery() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="space-y-16 pt-20">
        <section className="border-b border-border">
          <HeroSection />
        </section>
        <section className="border-b border-border">
          <ProductGridSection />
        </section>
        <section className="border-b border-border">
          <PainPointsSection />
        </section>
        <section className="border-b border-border">
          <ProfileSystemsSection />
        </section>
        <section className="border-b border-border">
          <FeatureGridSection />
        </section>
        <section className="border-b border-border">
          <HealingLivingSection />
        </section>
        <section className="border-b border-border">
          <ProcessSection />
        </section>
        <section className="border-b border-border">
          <ClosingManifestoSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

