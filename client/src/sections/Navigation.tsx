import { navigationContent } from "@/content/home";
import { layout } from "@/theme/tokens";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className={`${layout.container} flex items-center justify-between h-16`}>
        <div className="text-sm font-medium tracking-widest text-foreground">
          {navigationContent.brand}
        </div>
        <div className="hidden md:flex items-center gap-12 text-xs tracking-wide text-muted-foreground">
          {navigationContent.links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <button className="text-xs font-medium tracking-widest">
          {navigationContent.ctaLabel}
        </button>
      </div>
    </nav>
  );
}

