import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const d = new Date();
const month = d.getMonth();
const isBer = month >= 8;

const customColors = {
  coral: {
    50: "#ffeae7", // Very light coral
    100: "#ffd0cc", // Light coral
    200: "#ffa9a3", // Soft coral
    300: "#ff817a", // Light-medium coral
    400: "#ff6457", // Base coral (matches #ff6457)
    500: "#e5554b", // Slightly darker
    600: "#cc4b42", // Darker coral
    700: "#b24138", // Even darker
    800: "#99362f", // Deep coral
    900: "#802c27", // Darkest coral
  },
  golden: {
    50: "#fff4e0", // Very light golden
    100: "#ffe9c2", // Light golden
    200: "#ffdb8a", // Soft golden
    300: "#ffcd52", // Light-medium golden
    400: "#ffba26", // Slightly lighter than base
    500: "#ffb100", // Base golden (matches #ffb100)
    600: "#e69f00", // Slightly darker
    700: "#cc8e00", // Darker golden
    800: "#b37d00", // Deep golden
    900: "#996d00", // Darkest golden
  },
};

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: isBer ? customColors.coral : customColors.golden,
        cardBorder: "rgba(0, 0, 0, 0.12)",
        tan: {
          50: "#faf5ee", // Very light tan
          100: "#f5eadd", // Light tan
          200: "#ebd6bb", // Softer tan
          300: "#e1c199", // Light-medium tan
          400: "#d7ac77", // Lighter than base
          500: "#D2B48C", // Base tan (matches #D2B48C)
          600: "#b49472", // Slightly darker
          700: "#97795d", // Darker tan
          800: "#7a5f49", // Deep tan
          900: "#5c4636", // Darkest tan
        },
        darkgray: {
          50: "#f7f7f7", // Very light gray
          100: "#eeeeee", // Light gray
          200: "#dddddd", // Softer gray
          300: "#bbbbbb", // Medium-light gray
          400: "#888888", // Lighter gray than base
          500: "#555555", // Medium-dark gray
          600: "#333333", // Slightly lighter than base
          700: "#222222", // Base dark gray (matches #222222)
          800: "#1a1a1a", // Deeper dark gray
          900: "#111111", // Darkest gray
        },
        "outer-space": {
          "50": "#f5f8f8",
          "100": "#dcebe9",
          "200": "#b9d6d2",
          "300": "#8fb9b6",
          "400": "#679a97",
          "500": "#4d7f7d",
          "600": "#3c6564",
          "700": "#335252",
          "800": "#2c4243",
          "900": "#233333",
          "950": "#131f20",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
