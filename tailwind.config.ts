import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

// const d = new Date();
// const month = d.getMonth();
// const isBer = true //month >= 8;

// const customColors = {
//   coral: {
//     50: "#ffeae7", // Very light coral
//     100: "#ffd0cc", // Light coral
//     200: "#ffa9a3", // Soft coral
//     300: "#ff817a", // Light-medium coral
//     400: "#ff6457", // Base coral (matches #ff6457)
//     500: "#e5554b", // Slightly darker
//     600: "#cc4b42", // Darker coral
//     700: "#b24138", // Even darker
//     800: "#99362f", // Deep coral
//     900: "#802c27", // Darkest coral
//   },
//   golden: {
//     50: "#fff4e0", // Very light golden
//     100: "#ffe9c2", // Light golden
//     200: "#ffdb8a", // Soft golden
//     300: "#ffcd52", // Light-medium golden
//     400: "#ffba26", // Slightly lighter than base
//     500: "#ffb100", // Base golden (matches #ffb100)
//     600: "#e69f00", // Slightly darker
//     700: "#cc8e00", // Darker golden
//     800: "#b37d00", // Deep golden
//     900: "#996d00", // Darkest golden
//   },
// };

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
        // Main brand color
        primary: {
          300: '#8cc9c9',
          500: '#4d7f7d'
        },
        
        // Panel variations
        panel: {
          1: '#5d8f8d',
          2: '#3d6f6d', 
          3: '#6d9f9d',
          4: '#2d5f5d'
        },
        
        // Text colors
        title: '#1a3332',
        description: '#4a6665',
        
        // Background colors
        card: '#f0f7f7',
        
        // Additional teal variations for flexibility
        teal: {
          50: '#f0f7f7',
          100: '#d9eded', 
          200: '#b3dbdb',
          300: '#8cc9c9',
          400: '#66b7b7',
          500: '#4d7f7d', // Your main color
          600: '#3d6f6d',
          700: '#2d5f5d',
          800: '#1e4f4d',
          900: '#0f3f3d'
        }
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
