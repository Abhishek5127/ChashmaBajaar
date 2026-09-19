import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chalk: {
          50: "#FFFFFF",
          100: "#FAFAF8",
          200: "#F5F5F2",
          300: "#EFEFEA",
          400: "#E5E5DE",
        },
        ink: {
          950: "#0F0F10",
          900: "#141414",
          800: "#262626",
          700: "#404040",
          500: "#737373",
          400: "#A3A3A3",
          200: "#E5E5E5",
        },
        accent: {
          light: "#E57A50",
          DEFAULT: "#C25E2E",
          hover: "#AB4F24",
          soft: "#FAF0EB",
        },
        sand: {
          DEFAULT: "#D8C7B5",
          light: "#F7F4F0",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Fraunces", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "ken-burns": "kenburns 20s ease-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
        dropdown: "0 10px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
