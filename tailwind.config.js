module.exports = {
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#FF7272',
        primary: '#0E0F1A',
      },
      fontFamily: {
        primary: ['Syne', 'sans-serif'],
      },
      transitionProperty: {
        bg: 'background-color',
      },
      transitionTimingFunction: {
        'out-sine': 'cubic-bezier(0.61, 1, 0.88, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
