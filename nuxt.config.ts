// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  ssr: false,

  alias: {
    "@template": "~/@template",
  },

  devtools: { enabled: true },

  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: ".mode-dark",
          cssLayer: false,
        },
      },
    },
  },
});
