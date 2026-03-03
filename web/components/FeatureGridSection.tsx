import { CheckCircle2 } from "lucide-react";
import { featureGridContent } from "@/lib/content/home";

export function FeatureGridSection() {
  return (
    <section
      className="py-16 lg:py-24 bg-secondary/20"
      aria-labelledby="feature-grid-title"
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-full lg:max-w-container">
        <h2
          id="feature-grid-title"
          className="font-serif text-2xl lg:text-[2.5rem] font-semibold leading-tight mb-12 lg:mb-16"
        >
          {featureGridContent.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featureGridContent.features.map((feature) => (
            <article
              key={feature}
              className="bg-background p-6 rounded-sm border border-border border-opacity-50 hover:border-opacity-100 transition-[border-color] flex flex-row items-center gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden />
              </div>
              <p className="text-sm font-medium text-foreground">{feature}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
