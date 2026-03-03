import { profileSystemsContent } from "@/content/home";

export function ProfileSystemsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container-polygon">
        <h2 className="mb-12 font-serif text-3xl font-bold lg:mb-16 lg:text-4xl">
          {profileSystemsContent.title}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {profileSystemsContent.systems.map((system) => (
            <div
              key={system.name}
              className="border-b border-border pb-8"
            >
              <div className="mb-6 flex h-40 items-center justify-center overflow-hidden rounded-sm bg-muted/20">
                <p className="text-xs text-muted-foreground">
                  {system.label}
                </p>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">
                {system.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
