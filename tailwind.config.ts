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
        'h-gray-500': '#edf2f4',
        'h-black-500': "#2b2d42",
      },
      width: {
        120: "30rem",
        125: "31.25rem",
      },
      height: {
        125: "31.25rem", 
      }
    },
  },
  plugins: [],
} satisfies Config;
