/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    './src/**/*.{html,js}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

