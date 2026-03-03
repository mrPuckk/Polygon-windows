import { CheckCircle2 } from "lucide-react";
import { featureGridContent } from "@/content/home";

export function FeatureGridSection() {
  return (
    <section className="bg-secondary/20 py-16 lg:py-24">
      <div className="container-polygon">
        <h2 className="mb-12 font-serif text-3xl font-bold lg:mb-16 lg:text-4xl">
          {featureGridContent.title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {featureGridContent.features.map((feature) => (
            <div
              key={feature}
              className="rounded-sm border border-border/50 bg-background p-6 transition-colors hover:border-border"
            >
              <div className="flex items-start">
                <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <p className="text-sm font-medium">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
