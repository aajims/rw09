
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_URL || 'https://api.example.com/',
    },
  },
  modules: [
    // '@nuxtjs/axios'
  ],
  // axios: {
  //   baseURL: 'https://api.example.com', // Replace with your API URL
  // },
})
