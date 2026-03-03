import Image from "next/image";
import { heroContent } from "@/content/home";

export function HeroSection() {
  return (
    <section className="pt-20">
      <div className="grid min-h-screen grid-cols-1 gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-background px-6 py-12 lg:px-12 lg:py-0">
          <div className="max-w-lg">
            <div className="mb-8">
              <p className="mb-6 text-xs tracking-widest text-muted-foreground">
                {heroContent.eyebrow}
              </p>
              <h1 className="mb-6 font-serif text-5xl font-bold leading-tight lg:text-6xl">
                {heroContent.title}
              </h1>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                {heroContent.body}
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {heroContent.primaryCta}
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden bg-muted/30">
          <div className="absolute top-8 right-8 z-10 flex h-32 w-32 items-center justify-center rounded-full border-2 border-accent/30">
            <div className="text-center">
              <p className="text-xs font-medium text-accent">
                {heroContent.badge.label}
              </p>
              <p className="font-serif text-2xl font-bold text-accent">
                {heroContent.badge.value}
              </p>
            </div>
          </div>
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            width={960}
            height={960}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
