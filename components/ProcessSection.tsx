import { processContent } from "@/content/home";

export function ProcessSection() {
  return (
    <section className="bg-secondary/20 py-16 lg:py-24">
      <div className="container-polygon">
        <h2 className="mb-12 font-serif text-3xl font-bold lg:mb-16 lg:text-4xl">
          {processContent.title}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {processContent.steps.map((item, idx) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <span className="font-serif text-sm font-bold text-accent">
                  {idx + 1}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">
                {item.step}
              </h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
