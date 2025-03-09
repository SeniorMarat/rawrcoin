<script setup lang="ts">
import { TonConnectUIProvider } from "@townsquarelabs/ui-vue"

const options = {
  manifestUrl: "https://seniormarat.github.io/rawrcoin/ton-connect-manifest.json",
}
</script>

<template lang="pug">
ton-connect-u-i-provider(:options="options")
  nuxt-layout
    nuxt-page
</template>
