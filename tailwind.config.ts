import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      
       bgColor: "var(--bg-color)",
       primaryColor: "var(--primary-color)",
       textColor: "var(--text-color)",
       subTextColor: "var(--subtext-color)",
       buttonBgColor: "var(--button-bg-color)",
       buttonTextColor: "var(--button-text-color)",
       buttonHoverColor: "var(--button-hover-color)",
      },
      fontFamily: {
        primary: "var(--primary-font)",
        secondary: "var(--secondary-font)",
      },
    },
  },
  plugins: [],
} satisfies Config;
