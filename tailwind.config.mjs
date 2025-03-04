/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F2752E",
        footerTxt: "#B4B4B4",
        brdr: "#E9E9E9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: "576px",
        md: "760px",
        lg: "1024px",
        xl: "1440px",
      },

      container: {
        center: true,
        screens: {
          sm: "576px",
          md: "760px",
          lg: "1024px",
          xl: "1040px",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "1rem",
          xl: "0.5rem",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
