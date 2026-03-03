import Link from "next/link";
import { footerContent } from "@/lib/content/home";

export function Footer() {
  return (
    <footer
      className="bg-secondary/30 border-t border-border py-12"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-full lg:max-w-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xs font-medium tracking-widest text-foreground mb-4">
              {footerContent.columns[0].title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {footerContent.columns[0].body}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-medium tracking-widest text-foreground mb-4">
              {footerContent.columns[1].title}
            </h3>
            <ul className="space-y-2 list-none" aria-label="Systems links">
              {footerContent.columns[1].links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-medium tracking-widest text-foreground mb-4">
              {footerContent.columns[2].title}
            </h3>
            <ul className="space-y-2 list-none" aria-label="Company links">
              {footerContent.columns[2].links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-medium tracking-widest text-foreground mb-4">
              {footerContent.columns[3].title}
            </h3>
            <ul className="space-y-2 list-none" aria-label="Legal links">
              {footerContent.columns[3].links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <span>{footerContent.bottomLeft}</span>
          <span>{footerContent.bottomRight}</span>
        </div>
      </div>
    </footer>
  );
}
