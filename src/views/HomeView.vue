<template>
  <main class="h-auto w-full overflow-hidden overflow-y-auto">
    <div class="bg-black flex h-auto flex-col">
      <img src="../assets/main-page/head.png" alt="title"
        class="mt-[30px] mb-0 w-full mx-auto my-auto select-none pointer-events-none" />

      <router-link to="/explore">
        <img src="../assets/main-page/button.png" alt="enter"
          class="animate-breathe mt-[-100px] w-full ml-[30px] mx-auto my-auto select-none" />
      </router-link>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useShare, type UseShareOptions } from '@vueuse/core'
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElButton, ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()

const options = ref<UseShareOptions>({})

const { isSupported, share } = useShare(options)

onMounted(() => {
  if (!isSupported.value) {
    ElMessage.warning({
      message: '這個瀏覽器可能造成部分功能異常，請複製網址至其他瀏覽器操作！',
      center: true,
      duration: 10000,
      showClose: true
    })
  }
})
</script>


<style scoped>
@keyframes breathe {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-breathe {
  animation: breathe 5s ease-in-out infinite;
}
</style>
