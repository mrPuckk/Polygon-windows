import { ArrowRight } from "lucide-react";
import { healingLivingContent } from "@/content/home";

export function HealingLivingSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
        <div
          className="min-h-96 bg-cover bg-center lg:min-h-screen lg:h-full"
          style={{
            backgroundImage: `url(${healingLivingContent.image.src})`,
          }}
        />
        <div className="flex flex-col justify-center bg-secondary/10 px-6 py-12 lg:px-12 lg:py-0">
          <div className="max-w-lg">
            <h2 className="mb-6 font-serif text-3xl font-bold lg:text-4xl">
              {healingLivingContent.title}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              {healingLivingContent.body}
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {healingLivingContent.ctaLabel}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
