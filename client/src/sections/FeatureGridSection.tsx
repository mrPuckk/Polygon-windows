import { CheckCircle2 } from "lucide-react";
import { featureGridContent } from "@/content/home";
import { colors, layout, radius, spacing, typography } from "@/theme/tokens";

export function FeatureGridSection() {
  return (
    <section className={`${spacing.sectionY} ${colors.secondarySoft}`}>
      <div className={layout.container}>
        <h2 className={`${typography.sectionTitle} mb-12 lg:mb-16`}>
          {featureGridContent.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featureGridContent.features.map((feature) => (
            <div
              key={feature}
              className={`bg-background p-6 ${radius.subtle} border border-border/50 hover:border-border transition-colors`}
            >
              <div className="flex items-start">
                <div
                  className={`w-8 h-8 ${radius.pill} ${colors.accentSurface} flex items-center justify-center mr-4 flex-shrink-0`}
                >
                  <CheckCircle2 className="w-4 h-4 text-accent" />
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

