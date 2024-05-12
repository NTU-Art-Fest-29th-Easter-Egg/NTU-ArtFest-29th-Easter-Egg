<template>
  <div class="NotFound" @touchstart="playSound" @mouseover="playSound" @touchmove="playSound">
    <main class="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8" @touchstart="playSound"
      @mouseover="playSound" @touchmove="playSound">
      <div class="text-center">
        <p class="text-xl font-semibold text-indigo-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">您撥的號碼是空號</h1>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">請查明後再撥</h1>
        <p class="mt-6 text-base leading-7 text-gray-400">The number you dialed is incorrect</p>
        <p class="text-base leading-7 text-gray-400">Please check it and try
          again!</p>
        <button @click="playSound" class="mt-6 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-lg">Call
          Out</button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let audio = ref(new Audio('404NotFound.mp3'));

const playSound = async () => {
  await audio.value.play();
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

@keyframes hue {
  from {
    filter: hue-rotate(0);
  }

  to {
    filter: hue-rotate(-360deg);
  }
}

.rainbow-text {
  color: transparent;
  animation: hue 1.5s linear infinite;
  background-image: linear-gradient(90deg,
      violet,
      indigo,
      blue,
      green,
      yellow,
      orange,
      red,
      violet);
  -webkit-background-clip: text;
}
</style>
