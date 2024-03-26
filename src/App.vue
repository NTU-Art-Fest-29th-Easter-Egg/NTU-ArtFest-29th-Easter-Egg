<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'

onBeforeMount(() => {
  if (window.location.pathname.toLowerCase() != '/sharewithqrcode' && window.matchMedia('(min-width: 768px)').matches) {
    window.location.href = '/shareWithQRCode'
  }
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
