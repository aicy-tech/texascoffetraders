import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: {
            50: "#fff5f6",
            100: "#ffe6e9",
            200: "#ffd1d7",
            300: "#ffadb8",
            400: "#ff7a8d",
            500: "#f45b69",
            600: "#e13b4c",
            700: "#bd2d3c",
          },
        },
        "near-black": "#1a1a1a",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
