<template>
  <div class="bg-gradient-to-b from-[#F9FB00] to-white h-lvh">
    <img src="@/assets/result-page/head.png" class="pl-10 pr-10" />
    <div class="mx-8 h-[calc(85dvh-52px)] flex flex-col justify-center items-center">
      <img :src="resultSrc" class="max-h-[70dvh] pt-3" />
      <div class="text-base animate-pulse" :class="isSupported ? 'text-yellow-700' : 'text-red-700'">
        {{ isSupported ? '▲ 長按圖片下載結果 ▲' : '這個瀏覽器無法使用下載與分享' }}
      </div>
    </div>
    <div class="bottom-[calc(12dvh-20px)] flex justify-center items-center">
      <ElButton color="#000000" round tag="router-link" to="/explore"
        class="*:text-center *:font-bold *:text-white *:hover:text-yellow-500">
        重新測驗
      </ElButton>
      <ElButton color="#000000" round :disabled="!isSupported"
        class="*:text-center *:font-bold *:text-white *:hover:text-yellow-500" @click="shareResult()">
        分享
      </ElButton>
      <ElButton color="#000000" round tag="a" href="https://ntuartfest.com/" target="_blank" rel="noopener noreferrer"
        class="*:text-center *:font-bold *:text-white *:hover:text-yellow-500">
        藝術季官網
      </ElButton>
    </div>
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
      message: '這個瀏覽器無法下載與分享圖片，請複製網址至其他瀏覽器操作',
      center: true,
      duration: 5000
    })
  }
})
</script>
