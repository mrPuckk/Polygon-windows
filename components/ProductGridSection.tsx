import Image from "next/image";
import { productGridContent } from "@/content/home";

export function ProductGridSection() {
  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="container-polygon">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mb-20 lg:grid-cols-5">
          {productGridContent.map((product) => (
            <div key={product.name} className="group">
              <div className="mb-4 aspect-square overflow-hidden rounded-sm border border-border/50 bg-muted/20 transition-colors group-hover:border-border">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 font-serif text-sm font-semibold">
                {product.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
