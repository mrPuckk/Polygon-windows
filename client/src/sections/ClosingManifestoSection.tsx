import { Button } from "@/components/ui/button";
import { closingManifestoContent } from "@/content/home";
import { colors, layout, spacing, typography } from "@/theme/tokens";

export function ClosingManifestoSection() {
  return (
    <section className={`${spacing.sectionYGenerous} bg-background`}>
      <div className={`${layout.container} text-center max-w-3xl mx-auto`}>
        <h2 className={`${typography.manifestoTitle} mb-8`}>
          {closingManifestoContent.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          {closingManifestoContent.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className={`${colors.accentButton} px-8 py-3 ${typography.cta}`}
          >
            {closingManifestoContent.primaryCta}
          </Button>
          <Button
            variant="outline"
            className={`border-border text-foreground hover:bg-secondary/50 px-8 py-3 ${typography.cta}`}
          >
            {closingManifestoContent.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}

