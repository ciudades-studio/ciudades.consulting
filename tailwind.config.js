module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        blue: '#004B83',
        lightBlue: '#0081E2',
        darkBlue: '#002642'
      },
      text: {
        whiteText: '#FFFFFF',
        grayText: '606060',
        blackText: '#262626',
      },
      bgColors: {
        white: '#FFFFFF',
        white1: '#F0F0E8',
        white2: '#DEDECB',
        gray1: '#DEDEDE',
        gray2: '#C0C0C0',
        grayBlue: '#D9EFFF'
      },
      detailColors: {
        green: '#30F58B',
        yellow: '#FCFF65',
        red: '#EA136C',
      }
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
    },
    fontSize: {
      bld: '64px',
      semiBld: '32px',
      mdm: '24px',
      semiMdm: '21px',
      rglr: '16px',
      semiRglr: '12px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
