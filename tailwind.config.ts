import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#18242a",
        foreground: "#f8fafc",
        brand: {
          dark: "#121b20",
          surface: "#1f2d35",
          card: "#273741",
          cardHover: "#30434f",
          border: "rgba(255, 255, 255, 0.12)",
          accent: "#38bdf8",
          accentHover: "#0284c7",
          glow: "rgba(56, 189, 248, 0.35)",
          muted: "#94a3b8",
          slateLight: "#4e646e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -3px rgba(56, 189, 248, 0.3)',
        'glow-md': '0 0 35px -5px rgba(56, 189, 248, 0.4)',
        'glow-lg': '0 0 50px -10px rgba(56, 189, 248, 0.5)',
        'glass': '0 8px 32px 0 rgba(18, 27, 32, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
export default config;
