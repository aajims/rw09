
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // runtimeConfig: {
  //   public: {
  //     API_BASE_URL: process.env.API_URL || 'https://api.example.com/',
  //   },
  // },
  modules: [
    // '@nuxtjs/axios'
  ],
})
