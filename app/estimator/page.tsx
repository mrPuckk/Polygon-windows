import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PriceEstimator } from "@/components/PriceEstimator";
import { estimatorHeadlineContent } from "@/content/home";

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
        <header className="estimator-headline-fade mb-14 mt-6 text-center md:mt-10 lg:mt-14">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {estimatorHeadlineContent.heading}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {estimatorHeadlineContent.subtext}
          </p>
        </header>
        <PriceEstimator />
      </main>
      <Footer />
    </div>
  );
}

