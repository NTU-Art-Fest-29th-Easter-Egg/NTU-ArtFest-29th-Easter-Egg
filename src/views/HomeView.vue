<script setup lang="ts">

</script>

<template>
  <main class="h-screen w-full overflow-hidden overflow-y-auto">
    <div class="bg-black flex h-screen flex-col">
      <img src="../assets/main-page/head.png" alt="title"
        class="mt-[30px] mb-0 w-[100%] mx-auto my-auto select-none pointer-events-none" />

      <router-link to="/explore">
        <img src="../assets/main-page/button.png" alt="enter"
          class="animate-breathe mt-[-100px] w-[100%] ml-[30px] mx-auto my-auto select-none pointer-events-none" />
      </router-link>
    </div>
  </main>
</template>

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
