import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        cream: {
          50: "#FBF8F2",
          100: "#F6F0E4",
          200: "#EDE2CC",
        },
        ink: {
          DEFAULT: "#0E2A2A",
          soft: "#1F3A3A",
          muted: "#5A6E6E",
        },
        teal: {
          50: "#E8F0EE",
          100: "#C9DCD7",
          400: "#3F7A6E",
          500: "#1F5F55",
          600: "#164A42",
          700: "#0E3530",
        },
        gold: {
          300: "#E9C77A",
          400: "#D9AE54",
          500: "#C39538",
        },
        line: "#E5DDCB",
      },
      fontFamily: {
        // Headings + body: Helvetica Neue, native on macOS/iOS, with a robust fallback stack.
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          '"Inter"',
          "Arial",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        // Accent italics only — a refined editorial serif.
        accent: ['var(--font-accent)', "Georgia", "ui-serif", "serif"],
      },
      fontSize: {
        // Bumped-up base scale so nothing on the page feels too small.
        xs: ["0.8125rem", { lineHeight: "1.15rem" }], // 13px
        sm: ["0.9375rem", { lineHeight: "1.4rem" }], // 15px
        base: ["1.0625rem", { lineHeight: "1.7rem" }], // 17px
        lg: ["1.1875rem", { lineHeight: "1.8rem" }], // 19px
        "display-xl": ["clamp(2.6rem, 6vw, 5.25rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.1rem, 4.5vw, 3.75rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.6rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,42,42,0.04), 0 8px 24px rgba(14,42,42,0.06)",
        cardLg: "0 2px 4px rgba(14,42,42,0.05), 0 24px 60px rgba(14,42,42,0.10)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(rgba(14,42,42,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grain": "3px 3px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
