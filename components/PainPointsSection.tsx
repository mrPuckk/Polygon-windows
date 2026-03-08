import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { painPointsContent } from "@/content/home";

function ProblemPanel({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image: { src: string; alt: string };
}) {
  return (
    <div className="relative min-h-[280px] overflow-hidden md:min-h-[320px] lg:min-h-[380px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white lg:p-8">
        <span className="mb-4 inline-block w-fit rounded-sm bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
          The problem
        </span>
        <h3 className="mb-2 font-serif text-xl font-bold leading-tight lg:text-2xl">
          {title}
        </h3>
        <p className="max-w-lg text-sm leading-relaxed text-white/95 lg:text-base">
          {body}
        </p>
      </div>
    </div>
  );
}

function SolutionPanel({
  title,
  body,
  bullets,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  body: string;
  bullets: readonly string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="flex flex-col justify-center bg-muted/35 px-6 py-10 lg:px-10 lg:py-12">
      <span className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        — Polygon solution
      </span>
      <h3 className="mb-3 font-serif text-xl font-bold leading-tight lg:text-2xl">
        {title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground lg:text-base">
        {body}
      </p>
      <ul className="mb-8 space-y-2 text-sm text-muted-foreground">
        {bullets.map((item) => (
          <li key={item} className="flex items-start">
            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="w-full border-b-2 border-foreground pt-1 pb-1">
        <Link
          href={ctaHref}
          className="inline-flex items-center text-sm font-medium tracking-wide text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/50"
          aria-label={ctaLabel}
        >
          {ctaLabel}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export function PainPointsSection() {
  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="container-polygon">
        <div className="mb-12 lg:mb-16">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {painPointsContent.eyebrow}
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold lg:text-4xl">
            {painPointsContent.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {painPointsContent.description}
          </p>
          <nav
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-border/60 pb-4"
            aria-label="Jump to performance topic"
          >
            {painPointsContent.blocks.map((block) => (
              <a
                key={block.id}
                href={`#${block.id}`}
                className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 rounded-sm"
              >
                {block.navLabel}
              </a>
            ))}
          </nav>
        </div>
        <div className="space-y-0">
          {painPointsContent.blocks.map((block, index) => {
            const solutionFirst = index % 2 === 0;
            return (
              <div
                key={block.title}
                id={block.id}
                className="scroll-mt-[var(--nav-height)] grid grid-cols-1 overflow-hidden border-t border-border/40 first:border-t-0 lg:grid-cols-2"
              >
                {solutionFirst ? (
                  <>
                    <SolutionPanel
                      title={block.solutionTitle}
                      body={block.solutionBody}
                      bullets={block.bullets}
                      ctaLabel={block.solutionCtaLabel}
                      ctaHref={block.solutionCtaHref}
                    />
                    <ProblemPanel
                      title={block.title}
                      body={block.body}
                      image={block.image}
                    />
                  </>
                ) : (
                  <>
                    <ProblemPanel
                      title={block.title}
                      body={block.body}
                      image={block.image}
                    />
                    <SolutionPanel
                      title={block.solutionTitle}
                      body={block.solutionBody}
                      bullets={block.bullets}
                      ctaLabel={block.solutionCtaLabel}
                      ctaHref={block.solutionCtaHref}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
