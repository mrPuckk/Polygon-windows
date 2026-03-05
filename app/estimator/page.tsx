import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PriceEstimator } from "@/components/PriceEstimator";

export const metadata: Metadata = {
  title: "Price Estimator | Polygon Windows",
  description:
    "Get an approximate budget for your aluminium windows and doors. Select your project size, priorities, and receive a tailored quote.",
};

export default function PriceEstimatorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto max-w-5xl px-4 pt-[var(--nav-height)] pb-10">
        <PriceEstimator />
      </main>
      <Footer />
    </div>
  );
}

