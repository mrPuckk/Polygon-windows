import Link from "next/link";
import { closingManifestoContent } from "@/content/home";

export function ClosingManifestoSection() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container-polygon mx-auto max-w-3xl text-center">
        <h2 className="mb-8 font-serif text-4xl font-bold leading-tight lg:text-5xl">
          {closingManifestoContent.title}
        </h2>
        <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
          {closingManifestoContent.body}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/estimator"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/50"
            aria-label="Explore systems"
          >
            {closingManifestoContent.primaryCta}
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-8 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-secondary/50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-border"
          >
            {closingManifestoContent.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
}
