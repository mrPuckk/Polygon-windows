import { productGridContent } from "@/content/home";
import { layout, radius, spacing } from "@/theme/tokens";

export function ProductGridSection() {
  return (
    <section className={`${spacing.sectionYCompact} bg-background`}>
      <div className={layout.container}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 lg:mb-20">
          {productGridContent.map((product) => (
            <div key={product.name} className="group">
              <div
                className={`mb-4 bg-muted/20 aspect-square ${radius.subtle} overflow-hidden border border-border/50 hover:border-border transition-colors`}
              >
                <img
                  src={product.image.src}
                  alt={product.image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm font-serif font-semibold mb-2">{product.name}</h3>
              <p className="text-xs text-muted-foreground">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

