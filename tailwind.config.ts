import type { Config } from "tailwindcss";

/**
 * Every design token from the handoff lives here. Components reference these
 * named tokens — never raw hex. The color values themselves are defined once as
 * CSS custom properties in app/globals.css and surfaced to Tailwind via var(),
 * so computed inline styles (e.g. the calendar) can reuse the same source.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: "var(--ground)",
        surface: "var(--surface)",
        "page-chrome": "var(--page-chrome)",
        panel: "var(--panel)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        "ink-soft": "var(--ink-soft)",
        "ink-band": "var(--ink-band)",
        "ink-band-eyebrow": "var(--ink-band-eyebrow)",
        olive: "var(--olive)",
        "olive-deep": "var(--olive-deep)",
        matcha: "var(--matcha)",
        chartreuse: "var(--chartreuse)",
        "chartreuse-hover": "var(--chartreuse-hover)",
        citrine: "var(--citrine)",
        apricot: "var(--apricot)",
        // Prediction-window tints (flat steps — never a gradient)
        "pred-1": "var(--pred-1)",
        "pred-2": "var(--pred-2)",
        "pred-3": "var(--pred-3)",
        "pred-dash": "var(--pred-dash)",
        "step-possible": "var(--step-possible)",
        "step-likely": "var(--step-likely)",
        "step-most": "var(--step-most)",
      },
      fontFamily: {
        figtree: ["var(--font-figtree)", "system-ui", "sans-serif"],
        petrona: ["var(--font-petrona)", "Georgia", "serif"],
        caveat: ["var(--font-caveat)", "cursive"],
      },
      fontSize: {
        // role: [size, { lineHeight, letterSpacing }]
        eyebrow: ["12px", { lineHeight: "1", letterSpacing: "0.18em" }],
        "hero-h1": ["clamp(42px,7.4vw,82px)", { lineHeight: "0.99", letterSpacing: "-0.038em" }],
        h2: ["clamp(28px,3.8vw,44px)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "h2-dark": ["clamp(26px,3.6vw,42px)", { lineHeight: "1.16", letterSpacing: "-0.025em" }],
        body: ["clamp(16px,1.9vw,19px)", { lineHeight: "1.62" }],
        "hero-sub": ["clamp(17px,2.1vw,22px)", { lineHeight: "1.55" }],
        "caveat-accent": ["clamp(21px,2.4vw,27px)", { lineHeight: "1.2" }],
        closer: ["clamp(52px,9vw,104px)", { lineHeight: "0.98", letterSpacing: "-0.04em" }],
        "view-h1": ["clamp(34px,6vw,54px)", { lineHeight: "1.0", letterSpacing: "-0.035em" }],
      },
      letterSpacing: {
        wordmark: "-0.03em",
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        pill: "9999px",
        card: "18px",
        phone: "36px",
        chip: "6px",
      },
      boxShadow: {
        btn: "0 10px 24px -10px rgba(74,91,38,0.5)",
        "btn-sm": "0 8px 18px -10px rgba(74,91,38,0.55)",
        "btn-foot": "0 8px 20px -10px rgba(74,91,38,0.5)",
        card: "0 1px 2px rgba(38,42,28,0.04), 0 8px 22px rgba(38,42,28,0.07)",
        "closer-cta": "0 12px 28px -10px rgba(0,0,0,0.5)",
        "unlock-cta": "0 12px 26px -10px rgba(0,0,0,0.5)",
        "log-cta": "0 10px 22px -10px rgba(169,192,63,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
