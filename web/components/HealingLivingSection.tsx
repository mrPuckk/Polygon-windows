import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { healingLivingContent } from "@/lib/content/home";

export function HealingLivingSection() {
  return (
    <section
      className="py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-0 bg-background"
      aria-labelledby="healing-living-title"
    >
      <div
        className="min-h-96 lg:min-h-screen bg-cover bg-center relative"
        aria-hidden
      >
        <Image
          src={healingLivingContent.image.src}
          alt={healingLivingContent.image.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
      </div>
      <div className="flex flex-col justify-center px-4 md:px-6 lg:px-8 py-12 lg:py-0 bg-secondary/10">
        <div className="max-w-lg">
          <h2
            id="healing-living-title"
            className="font-serif text-2xl lg:text-[2.5rem] font-semibold leading-tight mb-6"
          >
            {healingLivingContent.title}
          </h2>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            {healingLivingContent.body}
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium tracking-wide rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            aria-label="Explore systems"
          >
            {healingLivingContent.ctaLabel}
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
