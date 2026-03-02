import { footerContent } from "@/content/home";
import { layout, spacing } from "@/theme/tokens";

export function Footer() {
  return (
    <footer className={`bg-secondary/30 border-t border-border ${spacing.footerY}`}>
      <div className={layout.container}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerContent.columns.map((column) => (
            <div key={column.title}>
              <h5 className="text-xs font-medium tracking-widest mb-4 text-foreground">
                {column.title}
              </h5>
              {"body" in column && (
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {column.body}
                </p>
              )}
              {"links" in column && (
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {column.links.map((label) => (
                    <li key={label}>
                      <a href="#" className="hover:text-foreground transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>{footerContent.bottomLeft}</p>
          <p>{footerContent.bottomRight}</p>
        </div>
      </div>
    </footer>
  );
}

