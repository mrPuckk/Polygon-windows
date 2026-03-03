import Image from "next/image";
import { productGridContent } from "@/lib/content/home";

export function ProductGridSection() {
  return (
    <section
      className="py-12 lg:py-20 bg-background"
      aria-labelledby="product-grid-heading"
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-full lg:max-w-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 lg:mb-20">
          {productGridContent.map((product) => (
            <article
              key={product.name}
              className="group"
              aria-labelledby={`product-${product.name.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="aspect-square bg-muted/20 rounded-sm border border-border border-opacity-50 group-hover:border-opacity-100 overflow-hidden transition-[border-color]">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <h3
                id={`product-${product.name.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-sm font-serif font-semibold mt-2 mb-2"
              >
                {product.name}
              </h3>
              <p className="text-xs text-muted-foreground">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
