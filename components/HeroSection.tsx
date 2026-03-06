import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/content/home";

export function HeroSection() {
  return (
    <section className="pt-20">
      <div className="grid min-h-screen grid-cols-1 gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-background px-6 py-12 lg:px-12 lg:py-0">
          <div className="max-w-lg text-center">
            <div className="mb-8">
              <p className="mb-6 text-xs tracking-widest text-muted-foreground">
                {heroContent.eyebrow}
              </p>
              <h1 className="mb-6 flex flex-col items-center font-serif leading-tight">
                <span className="hero-lead-anim text-2xl font-medium tracking-[0.25em] text-muted-foreground/90 lg:text-3xl">
                  {heroContent.titleLead}
                </span>
                <span
                  className="hero-main-anim mt-2 text-5xl font-bold tracking-tight text-foreground drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)] lg:text-6xl xl:text-7xl"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--foreground) 0%, oklch(0.15 0.01 65) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {heroContent.titleMain}
                </span>
              </h1>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                {heroContent.body}
              </p>
            </div>
            <Link
              href="/estimator"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/50"
              aria-label="Get a quotation"
            >
              {heroContent.primaryCta}
            </Link>
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
