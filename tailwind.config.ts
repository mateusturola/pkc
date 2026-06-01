import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark base — deep purple "ink"
        ink: {
          DEFAULT: "#150A2E",
          light: "#1F1240",
          lighter: "#2A1A55",
        },
        // Primary accent — purple
        purple: {
          DEFAULT: "#9B72F2",
          light: "#B79BFF",
          dark: "#6D4BC4",
        },
        // Secondary accent from the logo
        sky: {
          DEFAULT: "#2BA9E0",
          light: "#5DC1EC",
          dark: "#1B86B8",
        },
        navy: {
          DEFAULT: "#0E4A60",
          light: "#16627E",
          dark: "#072E3C",
        },
        cream: {
          DEFAULT: "#F6ECD8",
          light: "#FBF5E9",
          dark: "#EBDCBF",
        },
        // Soft light text on dark
        lav: {
          DEFAULT: "#E9E2FB",
          dim: "#B7AED2",
        },
        // Playful accents
        sun: "#FFC83D",
        coral: "#FF6B5C",
        mint: "#3FCB8E",
        grape: "#8B6CE0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(6deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
        "gradient-pan": "gradient-pan 12s ease infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
