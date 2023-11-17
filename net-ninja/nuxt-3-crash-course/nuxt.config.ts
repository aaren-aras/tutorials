// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Here, add custom metadata, modules, env variables (API keys), etc.
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    // Define site-wide title values, metatags, links to external resources, etc.
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  // Exposes env variables 
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
    // Exposes them to frontend instead of just backend: `public: { currencyKey: '' }`
  }
})
