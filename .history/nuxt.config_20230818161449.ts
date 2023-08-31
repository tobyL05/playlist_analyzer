// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Open Sans': true,
    },
    display: 'swap',
  },
  devtools: { enabled: true }
})
