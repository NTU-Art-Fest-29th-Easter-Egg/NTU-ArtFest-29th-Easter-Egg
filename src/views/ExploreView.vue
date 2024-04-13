<template>
  <div class="explore">
    <transition name="fade">
      <div class="enterPage" v-if="!showTestPage">
        <div class="bg-gradient-to-br from-white to-[#F6F800] h-screen flex flex-col items-center justify-center">
          <div class="flex justify-center items-center mb-5">
            <div>
              <p class="text-black text-xl max-w-[250px]">
                有天你突然發現自己身處一個神祕的房間，房間很空曠，只有在一個褐色美式鄉村木桌和放在上面的電話，忽然桌上電話響起，你走進一看，發現來電顯示上寫著：「穿越時空」。你要接起來嗎？
              </p>
            </div>
          </div>

          <div class="flex justify-center items-center">
            <img @click="showTestPage = true" src="@/assets/explore-page/點擊穿越時空.png" class="w-8/12 mx-5 my-3" />
          </div>
        </div>
      </div>

      <div class="testPage" v-else>
        <p class="text-black text-xl max-w-[250px]">Start test...</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTestPage: false,
    };
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<!-- I0   E1 -->
<!-- N0   S1 -->
<!-- T0   F1 -->
<!-- P0   J1 -->