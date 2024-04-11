<template>
  <div class="mx-5 my-3">
    <img :src="'/src/assets/results/' + hash + '.jpg'" />
  </div>
</template>

<script lang="ts" setup>
import allHash from '@/assets/explore-page/mbti_hash.json'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const hash = route.hash.slice(1)

onMounted(() => {
  if (allHash.mbti.every((item) => item.hash !== hash)) {
    router.push({ path: '/404' })
  }
})
</script>
