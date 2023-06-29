/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      Open: "Open Sans",
    },
    width: {
      120: "25rem",
      124: "30rem",
      128: "32rem",
    },
    height: {
      120: "25rem",
      124: "30rem",
      128: "32rem",
    },
  },
      },
  plugins: [],
}
