const v = (name) => {
  return `var(--${name})`;
};

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: v('primary'),
        accent: v('accent'),
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
