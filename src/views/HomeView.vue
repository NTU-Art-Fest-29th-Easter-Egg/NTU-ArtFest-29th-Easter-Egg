<script setup lang="ts">
function scrollToPage2() {
  const page2 = document.getElementById('page-2')
  page2?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main class="h-screen w-full overflow-hidden">
    <div class="bg-black flex h-screen flex-col" id="page-1">
      <img
        src="../assets/main-page/title.png"
        alt="title"
        class="mt-[130px] mb-0 w-[95%] max-w-4xl mx-auto my-auto select-none pointer-events-none"
      />
      <p
        class="text-center text-white text-2xl flex items-center justify-center mt-[-15%] scale-200"
      >
        NTU ATR FEST 29TH
      </p>
      <p class="text-center text-white text-2xl flex items-center justify-center mt-3 mb-32">
        5/3-5/19
      </p>
      <div class="flex items-center justify-center mb-28">
        <img src="../assets/main-page/flash.png" class="w-24" />
        <a href="https://google.com" class="text-button text-1xl text-white">藝術季官網</a>
        <div class="divider"></div>
        <button class="text-button text-1xl text-white" @click="scrollToPage2">心理測驗</button>
        <div class="w-24"></div>
      </div>
    </div>
    <div class="bg-black flex h-screen flex-col p-10 pr-0" id="page-2">
      <div
        class="bg-gradient-to-br from-white to-[#F6F800] h-screen rounded-l-[150px] flex items-center"
      >
        <div class="rounded-r-[30px] bg-black h-[400px] w-[40px]"></div>
        <div class="flex justify-end flex-1 pr-[10%]">
          <div>
            <h1 class="text-black text-4xl font-bold pb-[20px]">心理測驗</h1>
            <p class="text-black text-2xl max-w-[250px]">
              當你接到穿越時空的來電，你會怎麼做?
              我們將帶你穿梭時空，跨越過去與未來，在混亂的時空找到自我。
            </p>
            <button
              class="text-white text-1xl enter-button w-[250px] mt-[100px] flex justify-center items-begin"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
#page-1 {
  background-image: url('../assets/main-page/top.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}

.divider {
  width: 2px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  margin: 0 15px;
}

.enter-button {
  background-image: url('../assets/main-page/enter_button.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 250px;
  height: 100px;
}
</style>
