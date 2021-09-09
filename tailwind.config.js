module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main": "#f0f0e9",
        "font-color": "#697984",
        "second-bg-color": "#798085"
      },
      height: {
        "60vmin": "60vmin"
      },
      width: {
        "60vmin": "60vmin"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}