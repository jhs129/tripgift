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
        primary: "var(--christmas-green)",
        secondary: "var(--christmas-red)",
        accent: "var(--christmas-gold)",
        background: "var(--snow-white)",
        "background-alt": "var(--pine-dark)",
        foreground: "var(--pine-dark)",
        "foreground-alt": "var(--snow-white)",
      },
      borderColor: {
        DEFAULT: "var(--christmas-gold)",
      },
    },
  },
  plugins: [],
} satisfies Config;
