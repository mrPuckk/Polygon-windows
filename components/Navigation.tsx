"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationContent } from "@/content/home";

/** Explicit nav keys: active state from pathname only. Each item has its own route. */
export type NavKey = "home" | "estimator" | "about" | "contact";

/**
 * Returns the active nav key from pathname only. No hash, scroll, or section visibility.
 * / → home; /estimator → estimator; /about → about; /contact → contact.
 */
function getActiveNavKey(pathname: string): NavKey | null {
  if (pathname === "/") return "home";
  if (pathname === "/estimator" || pathname.startsWith("/estimator/")) return "estimator";
  if (pathname === "/contact" || pathname.startsWith("/contact/")) return "contact";
  if (pathname === "/about" || pathname.startsWith("/about/")) return "about";
  return null;
}

const activeNavItemClass =
  "border border-border bg-background/80 font-medium text-foreground";
const inactiveNavItemClass = "";

export function Navigation() {
  const pathname = usePathname();
  const activeKey = getActiveNavKey(pathname ?? "");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container-polygon flex h-[var(--nav-height)] items-center justify-between">
        <Link
          href="/"
          className={`rounded-md px-2.5 py-1.5 text-sm font-medium tracking-widest transition-colors hover:text-foreground/90 ${
            activeKey === "home" ? activeNavItemClass : "text-foreground"
          }`}
        >
          {navigationContent.brand}
        </Link>
        <div className="hidden items-center gap-12 text-xs tracking-wide text-muted-foreground md:flex">
          {navigationContent.links.map((link) => {
            const linkKey: NavKey = link.href === "/estimator" ? "estimator" : "about";
            const active = activeKey === linkKey;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-md px-2.5 py-1.5 transition-colors hover:text-foreground ${
                  active ? activeNavItemClass : inactiveNavItemClass
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href={navigationContent.ctaHref}
          className={`rounded-md px-2.5 py-1.5 text-xs font-medium tracking-widest transition-colors hover:text-foreground/90 ${
            activeKey === "contact" ? activeNavItemClass : inactiveNavItemClass
          }`}
        >
          {navigationContent.ctaLabel}
        </Link>
      </div>
    </nav>
  );
}
