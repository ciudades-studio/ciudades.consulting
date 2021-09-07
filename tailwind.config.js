module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main": "#f0f0e9",
        "font-color": "#697984",
        "font-main-color": "#798084",
        "bg-line": "#ffe4c4"
      },
      height: {
        "60vmin": "60vmin",
        "component-height": "700px"
      },
      width: {
        "60vmin": "60vmin",
      },
      screens: {
        "xs": "500px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}