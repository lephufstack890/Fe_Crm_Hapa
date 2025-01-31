const { Flowbite } = require('flowbite-react');
const defaultTheme = require('tailwindcss/defaultTheme');
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html',   flowbite.content(),],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'mine-shaft': '#333',
        'dusty-gray': '#999',
        'science-blue': '#0076DC',
        'caribbean-green': '#00CB77'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), flowbite.plugin(),],
};
