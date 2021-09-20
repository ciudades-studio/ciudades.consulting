module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main": "#f0f0e9",
        "font-color": "#697984",
        "secondary-bg-color": "#798085",
        "health-blue": "#13CEED",
        "font-main-color": "#798084",
        "bg-line": "#ffe4c4"
      },
      height: {
        "60vmin": "60vmin",
        "500": "500px"
      },
      width: {
        "60vmin": "60vmin",
        "8xl": "90rem"
      },
      height: {
        "60vmin": "60vmin",
        "component-height": "700px"
      },
      width: {
        "60vmin": "60vmin",
      },
      maxWidth: {
        "big": "1440px",
        "m-text": "75%"
      },
      screens: {
        "xs": "500px"
      },
      padding: {
        "xl": "90rem"
      }
    },
    maxWidth: {
      "title-industry-w": '100rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}