import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { painPointsContent } from "@/content/home";

export function PainPointsSection() {
  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="container-polygon">
        <h2 className="mb-12 font-serif text-3xl font-bold lg:mb-16 lg:text-4xl">
          {painPointsContent.title}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {painPointsContent.blocks.map((block) => (
            <div key={block.title} className="space-y-6">
              <div className="aspect-square overflow-hidden rounded-sm bg-muted/40">
                <Image
                  src={block.image.src}
                  alt={block.image.alt}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="mb-3 font-serif text-lg font-semibold">
                  {block.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {block.body}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-medium tracking-wide text-foreground">
                    {block.standardLabel}
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {block.bullets.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
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
