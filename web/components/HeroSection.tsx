import Image from "next/image";
import { heroContent } from "@/lib/content/home";

export function HeroSection() {
  return (
    <section
      className="pt-20 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col justify-center px-4 md:px-6 lg:px-8 py-12 lg:py-0 bg-background">
        <div className="max-w-lg">
          <p
            className="text-xs tracking-widest text-muted-foreground mb-6"
            id="hero-eyebrow"
          >
            {heroContent.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="text-3xl lg:text-6xl font-serif font-bold leading-tight mb-6"
          >
            {heroContent.titleTop}
          </h1>
          <h1
            id="hero-title"
            className="text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6"
          >
            {heroContent.titleMain}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground mb-8">
            {heroContent.body}
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium tracking-wide rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            aria-label="Book a consultation"
          >
            {heroContent.primaryCta}
          </a>
        </div>
      </div>
      <div className="relative bg-muted/30 flex items-center justify-center overflow-hidden">
        <Image
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          width={800}
          height={800}
          className="w-full h-full object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className="absolute top-8 right-8 w-32 h-32 rounded-full border-2 border-accent/30 flex flex-col items-center justify-center bg-background/80"
          aria-hidden
        >
          <span className="text-xs text-accent font-medium">
            {heroContent.badge.label}
          </span>
          <span className="text-2xl font-serif font-bold text-accent">
            {heroContent.badge.value}
          </span>
        </div>
      </div>
    </section>
  );
}
