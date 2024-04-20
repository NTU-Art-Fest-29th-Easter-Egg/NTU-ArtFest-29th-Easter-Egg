<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView, useRouter } from 'vue-router'

onBeforeMount(() => {
  const router = useRouter()
  if (window.location.pathname.toLowerCase() != '/sharewithqrcode' && window.matchMedia('(min-width: 768px)').matches) {
    router.push('/shareWithQRCode')
  }
})
</script>

<template>
  <RouterView />
</template>
