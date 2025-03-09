import vueCssModule from "@inetss/vite-plugin-vue-css-module"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    baseURL: "/rawrcoin/",
    head: {
      script: [{ src: "https://telegram.org/js/telegram-web-app.js" }, { src: "https://sad.adsgram.ai/js/sad.min.js" }],
    },
  },

  compatibilityDate: "2024-08-09",

  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  ssr: false,

  nitro: {
    esbuild: {
      options: {
        // For native bigints.
        target: "ESNext",
      },
    },
  },
  vite: {
    plugins: [
      vueCssModule({ attrName: "mclass", pugClassLiterals: true }),
    ],
  },

  css: [
    "~/styles/index.scss",
  ],

  piniaPersistedstate: {
    storage: "localStorage",
  },

  runtimeConfig: {
    // Token for accessing admin API
    adminToken: "",
    baseUrl: "https://seniormarat.github.io/rawrcoin/",
    database: {
      url: "postgres://localhost/rawrcoin",
      log: false,
    },
  },

})
