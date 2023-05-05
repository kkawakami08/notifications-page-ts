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
        darkGrayishBlue: "#5e6778",
        veryDarkBlue: "#1c202b",
      },
    },
  },
  plugins: [],
};
