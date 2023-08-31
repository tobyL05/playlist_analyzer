/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './src/**/*.{html,js}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Open Sans']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:[{
      custom:{
        'text': '#151414',
        'background': '#f2f2f3',
        'primary': '#1db954',
        'secondary': '#d6d7d7',
        'accent': '#706f71',
      }
    }]
  }
}
