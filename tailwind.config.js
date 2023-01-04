/** @type {import('tailwindcss').Config} */
module.exports = {
  content:['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin'),
    require('tailwindcss-textshadow')
  ],
    
    
}
