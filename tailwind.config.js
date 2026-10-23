/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FDFBF7",
        ink: "#2C221E",
        gold: "#C5A059",
        "gold-dark": "#9A7B38",
        warm: "#F5F0E6",
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', '"Songti TC"', 'serif'],
      },
    },
  },
  plugins: [],
}
