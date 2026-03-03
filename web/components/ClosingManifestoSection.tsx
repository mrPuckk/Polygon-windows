import { closingManifestoContent } from "@/lib/content/home";

export function ClosingManifestoSection() {
  return (
    <section
      className="py-20 lg:py-32 bg-background"
      aria-labelledby="closing-manifesto-title"
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-full lg:max-w-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="closing-manifesto-title"
            className="text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8"
          >
            {closingManifestoContent.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            {closingManifestoContent.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium tracking-wide rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
              aria-label="Explore systems"
            >
              {closingManifestoContent.primaryCta}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium tracking-wide rounded-md border border-border bg-transparent text-foreground hover:bg-secondary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
              aria-label="Request specification pack"
            >
              {closingManifestoContent.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
