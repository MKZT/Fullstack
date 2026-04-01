import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens: {
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
        'ultra': '1920px',
      },

      colors: {
        'brand-blue': '#0052FF',
        'brand-dark': '#121212',
        'success-green': '#00C853',
        'taxi-yellow': '#ffcc00',
        'taxi-black': '#1e1e1e',
        'taxi-gray': '#f2f2f2',
      },
      borderRadius: {
    'taxi': '12px', 
    }
    },
  },
  plugins: [],
};
export default config;