const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}',  flowbite.content()],
  darkMode: 'class',
 theme:{},
  plugins: [flowbite.plugin(),],
};

