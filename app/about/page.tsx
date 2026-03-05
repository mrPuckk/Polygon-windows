import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { aboutContent } from "@/content/home";

export const metadata: Metadata = {
  title: "About | Polygon Windows",
  description:
    "Our story, founders, and how to get in touch. Precision-engineered aluminium window and door systems.",
};

export default function AboutPage() {
  const { contact, company, founders } = aboutContent;
  const phoneHref = `tel:${contact.phone.replace(/\s+/g, "")}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {/* Contact – highlighted at top */}
        <section
          id="contact"
          className="scroll-mt-[var(--nav-height)] border-b border-border bg-accent/10 py-16 lg:py-20"
          aria-labelledby="contact-heading"
        >
          <div className="container-polygon">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="contact-heading"
                className="mb-3 font-serif text-2xl font-bold tracking-tight text-foreground lg:text-3xl"
              >
                {contact.heading}
              </h2>
              <p className="mb-10 text-sm text-muted-foreground">
                {contact.subheading}
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  {contact.phoneLabel}: {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center justify-center rounded-md border border-accent bg-background px-6 py-3 text-sm font-medium tracking-wide text-accent transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  {contact.emailLabel}: {contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Company story */}
        <section className="border-b border-border py-16 lg:py-24">
          <div className="container-polygon">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 font-serif text-3xl font-bold lg:text-4xl">
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
            <h2 className="mb-12 font-serif text-3xl font-bold lg:text-4xl">
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
