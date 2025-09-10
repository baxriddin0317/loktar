import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.PUBLIC_API_BASE_URL || "http://localhost:3000",
      useMock: process.env.PUBLIC_USE_MOCK === 'true',
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
