import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/home";
import { colors, layout, spacing, typography } from "@/theme/tokens";

export function HeroSection() {
  return (
    <section className={spacing.heroTop}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
        <div className="flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-0 bg-background">
          <div className="max-w-lg">
            <div className="mb-8">
              <p className={`${typography.heroEyebrow} mb-6`}>{heroContent.eyebrow}</p>
              <h1 className={`${typography.heroTitle} mb-6`}>
                {heroContent.title}
              </h1>
              <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                {heroContent.body}
              </p>
            </div>
            <Button
              className={`${colors.accentButton} px-8 py-3 ${typography.cta}`}
            >
              {heroContent.primaryCta}
            </Button>
          </div>
        </div>

        <div className="relative bg-muted/30 flex items-center justify-center overflow-hidden">
          <div className="absolute top-8 right-8 w-32 h-32 rounded-full border-2 border-accent/30 flex items-center justify-center z-10">
            <div className="text-center">
              <p className="text-xs text-accent font-medium">{heroContent.badge.label}</p>
              <p className="text-2xl font-serif font-bold text-accent">
                {heroContent.badge.value}
              </p>
            </div>
          </div>
          <img
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

