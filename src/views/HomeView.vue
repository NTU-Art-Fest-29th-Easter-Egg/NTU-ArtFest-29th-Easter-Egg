<script setup lang="ts"></script>

<template>
  <main class="bg-[#778DA9] h-screen flex flex-col space-evenly flex-1 w-full">
    <header class="bg-[#415A77] text-center py-10">
      <h1 class="text-6xl font-bold text-[#D9D9D9]">台北掛我電話</h1>
    </header>
    <div class="px-10 py-20 flex flex-col space-y-20">
      <div class="max-w-[750px] mx-auto">
        <div class="flex flex-row gap-5">
          <div class="flex flex-col items-center">
            <button
              class="min-w-[300px] bg-[#415A77] px-10 py-8 text-[#D9D9D9] rounded-full text-5xl"
            >
              心理測驗
            </button>
            <p class="text-2xl">開始你的語音之旅</p>
          </div>
          <p class="text-[#D9D9D9] text-2xl">
            快來參加一場語音的沉浸之旅，獲得測驗結果一起解鎖可愛的電話吉祥物之外，還可以匹配到和你性格相近的藝人喔
          </p>
        </div>
      </div>
      <div class="flex flex-col items-end max-w-[750px] mx-auto">
        <div class="flex flex-row gap-5">
          <p class="text-[#D9D9D9] text-2xl">
            內有12個由驚喜來賓錄製的小語音，快來找找你偶像的聲音，聽完6個回答問題還可以參加抽獎喔!!
          </p>
          <div class="flex flex-col items-center">
            <button
              class="min-w-[300px] bg-[#415A77] px-10 py-8 text-[#D9D9D9] rounded-full text-5xl"
            >
              聲音彩蛋
            </button>
            <p class="text-2xl">快來抽獎</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
