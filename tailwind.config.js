module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main": "#f0f0e9",
        "font-color": "#697984",
        "health-blue": "#13CEED"
      },
      height: {
        "60vmin": "60vmin",
        "500": "500px"
      },
      width: {
        "60vmin": "60vmin",
        "8xl": "90rem"
      }
    },
    maxWidth: {
      "title-industires-w": '100rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}