/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        veryLightGrayishBlue: "#f7fafd",
        lightGrayishBlueOne: "#e5effa",
        lightGrayishBlueTwo: "#dde7ee",
        grayishBlue: "#939dae",
        darkGrayishBlue: "hsl(219, 12%, 42%)",
        veryDarkBlue: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
