<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import Footer from './components/Footer.vue'

onBeforeMount(() => {
  const router = useRouter()
  console.log()
  if (window.location.pathname.toLowerCase() != '/sharewithqrcode' && window.matchMedia('(min-width: 768px)').matches) {
    router.push('/shareWithQRCode')
  }
})
</script>

<template>
  <RouterView />
  <Footer v-show="$router.currentRoute.value.path !== '/explore'" />
</template>
