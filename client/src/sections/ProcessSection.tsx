import { processContent } from "@/content/home";
import { layout, spacing, typography } from "@/theme/tokens";

export function ProcessSection() {
  return (
    <section className={`${spacing.sectionY} bg-secondary/20`}>
      <div className={layout.container}>
        <h2 className={`${typography.sectionTitle} mb-12 lg:mb-16`}>
          {processContent.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processContent.steps.map((item, idx) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-serif font-bold text-accent">
                  {idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2">{item.step}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

