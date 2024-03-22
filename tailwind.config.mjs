/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'xl':'1200px',
      'lg': "1085px",
      'md': "800px",
      'sm': "600px",
    },
    extend: {},
  },
  plugins: [],
};
