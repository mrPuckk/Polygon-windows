import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { aboutContent } from "@/content/home";

export const metadata: Metadata = {
  title: "About | Polygon Windows",
  description:
    "Our story and founders. Precision-engineered aluminium window and door systems.",
};

export default function AboutPage() {
  const { company, founders } = aboutContent;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto max-w-5xl px-4 pt-[var(--nav-height)] pb-10">
        {/* Company story */}
        <section className="border-b border-border py-16 lg:py-24">
          <div className="container-polygon">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 px-4 pt-6 font-serif text-3xl font-bold lg:text-4xl md:pt-10 lg:pt-14">
                {company.heading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {company.body}
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-16 lg:py-24">
          <div className="container-polygon">
            <h2 className="mb-12 px-4 font-serif text-3xl font-bold lg:text-4xl">
              {founders.heading}
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              {founders.people.map((person) => (
                <article
                  key={person.name}
                  className="rounded-md border border-border bg-secondary/5 p-6 lg:p-8"
                >
                  <h3 className="mb-1 font-serif text-xl font-semibold">
                    {person.name}
                  </h3>
                  <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
                    {person.role}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {person.bio}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
