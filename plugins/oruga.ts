import { Modal, OrugaConfig } from "@oruga-ui/oruga-next"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(Modal)
    .use(OrugaConfig, {
      modal: {
        teleport: true,
      },
    })
})
