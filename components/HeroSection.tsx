import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/content/home";

export function HeroSection() {
  return (
    <section className="pt-20">
      <div className="grid min-h-screen grid-cols-1 gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="flex flex-col justify-center bg-background px-6 py-12 lg:pl-16 lg:pr-10 lg:py-0 xl:pl-24 xl:pr-16">
          <div className="mx-auto w-full max-w-lg text-center lg:max-w-md">
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
              <p className="mx-auto mb-8 max-w-[500px] text-lg font-medium leading-[1.7] tracking-[0.02em] text-foreground/85">
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
        <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-muted/30 lg:min-h-0">
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            width={960}
            height={960}
            className="h-full w-full object-cover object-[60%_center]"
            priority
            sizes="(max-width: 1023px) 100vw, 67vw"
          />
        </div>
      </div>
    </section>
  );
}
