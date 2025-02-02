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
    },
  },
  plugins: [],
} satisfies Config;
