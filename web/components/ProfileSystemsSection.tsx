import { profileSystemsContent } from "@/lib/content/home";

export function ProfileSystemsSection() {
  return (
    <section
      className="py-16 lg:py-24 bg-background"
      aria-labelledby="profile-systems-title"
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-full lg:max-w-container">
        <h2
          id="profile-systems-title"
          className="font-serif text-2xl lg:text-[2.5rem] font-semibold leading-tight mb-12 lg:mb-16"
        >
          {profileSystemsContent.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {profileSystemsContent.systems.map((system) => (
            <article
              key={system.name}
              className="border-b border-border pb-8"
              aria-labelledby={`profile-${system.name.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div className="h-40 bg-muted/20 rounded-sm flex items-center justify-center mb-6">
                <span className="text-xs text-muted-foreground">
                  {system.label}
                </span>
              </div>
              <h3
                id={`profile-${system.name.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-lg font-serif font-semibold mb-2"
              >
                {system.name}
              </h3>
              <p className="text-sm text-muted-foreground">{system.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
