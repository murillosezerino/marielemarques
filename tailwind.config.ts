import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        brand: {
          black: "#0d0d0d",
          dark: "#141414",
          card: "#1a1a1a",
          border: "#2a2a2a",
          orange: "#e07b2a",
          orange2: "#f59f3f",
          white: "#f5f0eb",
          muted: "#888888",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mariele: {
          primary: "#e07b2a",
          "primary-content": "#0d0d0d",
          secondary: "#f59f3f",
          "secondary-content": "#0d0d0d",
          accent: "#e07b2a",
          neutral: "#1a1a1a",
          "base-100": "#0d0d0d",
          "base-200": "#141414",
          "base-300": "#1a1a1a",
          "base-content": "#f5f0eb",
          info: "#888888",
          success: "#36d399",
          warning: "#f59f3f",
          error: "#f87272",
        },
      },
    ],
  },
};

export default config;
