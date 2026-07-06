import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ===== Identidade PKC 2027 — clara e iridescente =====
        // Superfícies claras (base do site)
        paper: {
          DEFAULT: "#FBFAFF", // fundo geral
          soft: "#F2EEFC", // seção alternada / lavanda claro
          tint: "#E9E2F8", // cartões / bordas suaves
        },
        // Azul primário — #043C86
        blue: {
          DEFAULT: "#043C86",
          light: "#3E74C9",
          dark: "#022A5F",
        },
        // Magenta secundário — #CB6CE6
        magenta: {
          DEFAULT: "#CB6CE6",
          light: "#E2A6F1",
          dark: "#A445C2",
        },
        // Quase-preto para texto — #0F1211
        ink: {
          DEFAULT: "#0F1211",
          soft: "#3F4348",
          mute: "#71757B",
        },
        // Lavanda auxiliar (bordas, brilhos, texto sobre escuro)
        lav: {
          DEFAULT: "#EDE8FB",
          deep: "#D3C7F1",
          dim: "#9A8FBE",
        },
        // ===== aliases on-brand (compat p/ referências antigas) =====
        purple: { DEFAULT: "#CB6CE6", light: "#E2A6F1", dark: "#A445C2" },
        sky: { DEFAULT: "#043C86", light: "#3E74C9", dark: "#022A5F" },
        navy: { DEFAULT: "#043C86", light: "#3E74C9", dark: "#022A5F" },
        cream: { DEFAULT: "#FBFAFF", light: "#FFFFFF", dark: "#F2EEFC" },
        sun: "#CB6CE6",
        coral: "#CB6CE6",
        mint: "#3E74C9",
        grape: "#A445C2",
      },
      fontFamily: {
        // Títulos e corpo em Montserrat (a Monument fica só na logo).
        display: ["var(--font-body)", "system-ui", "sans-serif"],
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
