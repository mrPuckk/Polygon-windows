import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProductGridSection } from "@/components/ProductGridSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { FeatureGridSection } from "@/components/FeatureGridSection";
import { HealingLivingSection } from "@/components/HealingLivingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ClosingManifestoSection } from "@/components/ClosingManifestoSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <PainPointsSection />
        <ProductGridSection />
        <FeatureGridSection />
        <HealingLivingSection />
        <ProcessSection />
        <ClosingManifestoSection />
      </main>
      <Footer />
    </div>
  );
}
