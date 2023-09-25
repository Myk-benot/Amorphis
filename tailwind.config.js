/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        goldrod: "rgb(238,232,170)",
        vegasgold: "rgb(197,179,88)",
      },
    },
  },

  plugins: [],
};
