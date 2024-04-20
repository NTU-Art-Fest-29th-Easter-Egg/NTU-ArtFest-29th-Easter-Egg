<template>
  <div class="mx-8 h-[calc(85dvh-52px)] flex flex-col justify-center items-center">
    <img :src="resultSrc" class="max-h-[70dvh]" />
    <div class="text-base animate-pulse" :class="isSupported ? 'text-yellow-700' : 'text-red-700'">
      {{ isSupported ? '長按圖片可以下載' : '內嵌瀏覽器無法長按下載' }}
    </div>
  </div>
  <div class="fixed bottom-[calc(12dvh-20px)] right-6">
    <ElButton
      color="#000000"
      size="large"
      round
      :disabled="!isSupported"
      class="*:text-lg *:text-center *:font-bold *:text-white *:hover:text-yellow-500"
      @click="shareResult()"
    >
      分享
    </ElButton>
    <ElButton
      color="#000000"
      size="large"
      round
      tag="a"
      href="https://ntuartfest.com/"
      target="_blank"
      rel="noopener noreferrer"
      class="*:text-lg *:text-center *:font-bold *:text-white *:hover:text-yellow-500"
    >
      回到藝術季官網
    </ElButton>
  </div>
</template>

<script lang="ts" setup>
import allHash from '@/assets/explore-page/result_hash.json'
import { useShare, type UseShareOptions } from '@vueuse/core'
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElButton, ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()

const resultSrc = ref('')
const options = ref<UseShareOptions>({})

const { isSupported, share } = useShare(options)

const shareResult = async () => {
  if (isSupported.value) {
    await share()
  }
}

onBeforeMount(async () => {
  const hash = route.hash.slice(1)
  if (allHash.result.every((item) => item.hash !== hash)) {
    router.push({ path: '/404' })
  }

  resultSrc.value = (await import(`@/assets/results/${hash}.png`)).default

  if (isSupported.value) {
    const image = await fetch(resultSrc.value).then((res) => res.blob())
    options.value.files = [new File([image], 'result.png', { type: image.type })]
  }
})

onMounted(() => {
  if (!isSupported.value) {
    ElMessage.warning({
      message: '內嵌瀏覽器無法長按下載及分享',
      center: true,
      duration: 7000
    })
  }
})
</script>
