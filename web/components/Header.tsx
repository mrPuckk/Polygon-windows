"use client";

import Link from "next/link";
import { navigationContent } from "@/lib/content/home";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background/95 backdrop-blur"
      role="banner"
      aria-label="Main navigation"
    >
      <div className="h-full w-full mx-auto px-4 md:px-6 lg:px-8 max-w-full lg:max-w-container flex flex-row items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-widest text-foreground"
          aria-label="Polygon Windows home"
        >
          {navigationContent.brand}
        </Link>
        <nav
          className="hidden md:flex flex-row items-center gap-12"
          aria-label="Primary"
        >
          {navigationContent.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="text-xs font-medium tracking-widest text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded-md"
          aria-label="Contact"
        >
          {navigationContent.ctaLabel}
        </button>
      </div>
    </header>
  );
}
