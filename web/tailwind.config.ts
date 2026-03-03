import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.98 0.001 0)",
        foreground: "oklch(0.11 0.01 65)",
        secondary: {
          DEFAULT: "oklch(0.88 0.02 70)",
          foreground: "oklch(0.11 0.01 65)",
        },
        muted: {
          DEFAULT: "oklch(0.8 0.015 70)",
          foreground: "oklch(0.5 0.01 65)",
        },
        accent: {
          DEFAULT: "oklch(0.3 0.08 140)",
          foreground: "oklch(0.98 0.001 0)",
        },
        border: "oklch(0.88 0.02 70)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      fontSize: {
        "5xl": ["3.5rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
      },
      maxWidth: {
        container: "1280px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      boxShadow: {
        card: "0 12px 24px -4px oklch(0.11 0.01 65 / 0.03), 0 4px 8px -2px oklch(0.11 0.01 65 / 0.03)",
        "card-hover":
          "0 12px 24px -4px oklch(0.11 0.01 65 / 0.05), 0 4px 8px -2px oklch(0.11 0.01 65 / 0.05)",
        overlay:
          "0 20px 40px -8px oklch(0.11 0.01 65 / 0.06), 0 8px 16px -4px oklch(0.11 0.01 65 / 0.08)",
      },
      letterSpacing: {
        widest: "0.2em",
        wide: "0.05em",
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
} satisfies Config;
