import { processContent } from "@/lib/content/home";

export function ProcessSection() {
  return (
    <section
      className="py-16 lg:py-24 bg-secondary/20"
      aria-labelledby="process-title"
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-full lg:max-w-container">
        <h2
          id="process-title"
          className="font-serif text-2xl lg:text-[2.5rem] font-semibold leading-tight mb-12 lg:mb-16"
        >
          {processContent.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processContent.steps.map((step, index) => (
            <article
              key={step.step}
              className="text-center"
              aria-labelledby={`process-step-${index + 1}`}
            >
              <div
                className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
                aria-hidden
              >
                <span className="text-sm font-serif font-bold text-accent">
                  {index + 1}
                </span>
              </div>
              <h3
                id={`process-step-${index + 1}`}
                className="text-lg font-serif font-semibold mb-2"
              >
                {step.step}
              </h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
