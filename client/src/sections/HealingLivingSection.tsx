import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { healingLivingContent } from "@/content/home";
import { colors, spacing, typography } from "@/theme/tokens";

export function HealingLivingSection() {
  return (
    <section className={`${spacing.sectionY} bg-background`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div
          className="h-96 lg:h-full min-h-96 lg:min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${healingLivingContent.image.src})`,
          }}
        />

        <div className="flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-0 bg-secondary/10">
          <div className="max-w-lg">
            <h2 className={`${typography.sectionTitle} mb-6`}>
              {healingLivingContent.title}
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              {healingLivingContent.body}
            </p>
            <Button className={`${colors.accentButton} px-8 py-3 ${typography.cta}`}>
              {healingLivingContent.ctaLabel}{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

