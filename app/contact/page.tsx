import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { aboutContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Contact | Polygon Windows",
  description:
    "Get in touch. Phone, email, and project enquiries. Precision-engineered aluminium window and door systems.",
};

export default function ContactPage() {
  const { contact } = aboutContent;
  const phoneHref = `tel:${contact.phone.replace(/\s+/g, "")}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto max-w-5xl px-4 pt-[var(--nav-height)] pb-10">
        <section
          id="contact"
          className="scroll-mt-[var(--nav-height)] border-b border-border bg-accent/10 py-16 lg:py-20"
          aria-labelledby="contact-heading"
        >
          <div className="container-polygon">
            <div className="mx-auto max-w-2xl text-center">
              <h1
                id="contact-heading"
                className="mb-3 px-4 pt-4 font-serif text-2xl font-bold tracking-tight text-foreground md:pt-6 lg:pt-10 lg:text-3xl"
              >
                {contact.heading}
              </h1>
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
      </main>
      <Footer />
    </div>
  );
}
