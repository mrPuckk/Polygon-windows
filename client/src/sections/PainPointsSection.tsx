import { CheckCircle2 } from "lucide-react";
import { painPointsContent } from "@/content/home";
import { layout, radius, spacing, typography } from "@/theme/tokens";

export function PainPointsSection() {
  return (
    <section className={`${spacing.sectionY} bg-secondary/30`}>
      <div className={layout.container}>
        <h2 className={`${typography.sectionTitle} mb-12 lg:mb-16`}>
          {painPointsContent.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {painPointsContent.blocks.map((block) => (
            <div key={block.title} className="space-y-6">
              <div className={`bg-muted/40 aspect-square ${radius.subtle} overflow-hidden`}>
                <img
                  src={block.image.src}
                  alt={block.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold mb-3">{block.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {block.body}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-medium tracking-wide text-foreground">
                    {block.standardLabel}
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {block.bullets.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

