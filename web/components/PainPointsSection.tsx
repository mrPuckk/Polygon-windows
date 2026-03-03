import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { painPointsContent } from "@/lib/content/home";

export function PainPointsSection() {
  return (
    <section
      className="py-16 lg:py-24 bg-secondary/30"
      aria-labelledby="pain-points-title"
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-full lg:max-w-container">
        <h2
          id="pain-points-title"
          className="font-serif text-2xl lg:text-[2.5rem] font-semibold leading-tight mb-12 lg:mb-16"
        >
          {painPointsContent.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {painPointsContent.blocks.map((block) => (
            <article
              key={block.title}
              className="flex flex-col space-y-6"
              aria-labelledby={`pain-${block.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="aspect-square bg-muted/40 rounded-sm overflow-hidden">
                <Image
                  src={block.image.src}
                  alt={block.image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div>
                <h3
                  id={`pain-${block.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-lg font-serif font-semibold mb-3"
                >
                  {block.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {block.body}
                </p>
                <p className="text-xs font-medium tracking-wide text-foreground mb-2">
                  {block.standardLabel}
                </p>
                <ul className="space-y-2 list-none" aria-label="Polygon standards">
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start">
                      <CheckCircle2
                        className="w-4 h-4 text-accent mr-2 flex-shrink-0 mt-0.5"
                        aria-hidden
                      />
                      <span className="text-xs text-muted-foreground">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
