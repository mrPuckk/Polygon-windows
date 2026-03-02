import { profileSystemsContent } from "@/content/home";
import { layout, spacing, typography } from "@/theme/tokens";

export function ProfileSystemsSection() {
  return (
    <section className={`${spacing.sectionY} bg-background`}>
      <div className={layout.container}>
        <h2 className={`${typography.sectionTitle} mb-12 lg:mb-16`}>
          {profileSystemsContent.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {profileSystemsContent.systems.map((system) => (
            <div key={system.name} className="pb-8 border-b border-border">
              <div className="mb-6 bg-muted/20 h-40 rounded-sm overflow-hidden flex items-center justify-center">
                <p className="text-xs text-muted-foreground">{system.label}</p>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2">{system.name}</h3>
              <p className="text-sm text-muted-foreground">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

