/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens: {
        sr: "980px",
      },
    },
  },
  plugins: [],
};
