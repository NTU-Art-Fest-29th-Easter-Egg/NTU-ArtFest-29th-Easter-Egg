<template>
  <div class="mx-8 h-[calc(85dvh-52px)] flex justify-center items-center">
    <img :src="resultSrc" class="max-h-[70dvh]" />
  </div>
  <div class="fixed bottom-[calc(12dvh-20px)] right-6">
    <button
      class="text-xl text-white mr-1 hover:text-yellow-400 font-bold h-10 w-16 bg-black text-center rounded-2xl hover:scale-105"
      @click="share()"
    >
      分享
    </button>
    <button class="h-10 w-40 ml-1 bg-black rounded-2xl hover:scale-105">
      <a
        href="https://ntuartfest.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xl text-white hover:text-yellow-400 text-center font-bold"
        >回到藝術季官網</a
      >
    </button>
  </div>
</template>

<script lang="ts" setup>
import allHash from '@/assets/explore-page/result_hash.json'
import { useShare, type UseShareOptions } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const hash = route.hash.slice(1)
const resultSrc = '/src/assets/results/' + hash + '.png'
const options = ref<UseShareOptions>({})

const { share } = useShare(options)

onMounted(async () => {
  if (allHash.result.every((item) => item.hash !== hash)) {
    router.push({ path: '/404' })
  }

  const image = await fetch(resultSrc).then((res) => res.blob())
  options.value.files = [new File([image], 'result.png', { type: image.type })]
})
</script>
