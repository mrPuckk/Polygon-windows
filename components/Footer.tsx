import Link from "next/link";
import { footerContent } from "@/content/home";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="container-polygon">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {footerContent.columns.map((column) => (
            <div key={column.title}>
              <h5 className="mb-4 text-xs font-medium tracking-widest text-foreground">
                {column.title}
              </h5>
              {"body" in column && (
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {column.body}
                </p>
              )}
              {"links" in column && (
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {column.links.map((label) => (
                    <li key={label}>
                      <Link
                        href="#"
                        className="transition-colors hover:text-foreground"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>{footerContent.bottomLeft}</p>
          <p>{footerContent.bottomRight}</p>
        </div>
      </div>
    </footer>
  );
}
