import Link from "next/link";
import { navigationContent } from "@/content/home";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container-polygon flex h-16 items-center justify-between">
        <span className="text-sm font-medium tracking-widest text-foreground">
          {navigationContent.brand}
        </span>
        <div className="hidden items-center gap-12 text-xs tracking-wide text-muted-foreground md:flex">
          {navigationContent.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="text-xs font-medium tracking-widest"
        >
          {navigationContent.ctaLabel}
        </button>
      </div>
    </nav>
  );
}
