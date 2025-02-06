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
        textPrimary: "#242424",
        textSecondary: "#171717",
      },

      container: {
        center: true,
        screens: {
          DEFAULT: "1200px",
        },
      },

      fontFamily: {
        modernist: ["Sk-Modernist", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      boxShadow: {
        customShadow:
          "0px 0px 1px 0px rgba(13, 13, 13, 0.90), 0px 8px 16px 0px #0D0D0D",
      },
    },
  },
  plugins: [],
} satisfies Config;
