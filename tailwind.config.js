const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: 'class',
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  purge: {
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      colors: {
        primary: 'rgb(74 222 128)',
        secondary: 'rgb(20 184 166);',
      },
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
