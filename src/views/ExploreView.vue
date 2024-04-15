<template>
  <div class="explore">
    <transition name="fade">
      <div class="enterPage" v-if="!showTestPage">
        <div class="bg-gradient-to-br from-white to-[#F6F800] h-screen flex flex-col items-center justify-center">
          <div class="flex justify-center items-center mb-5">
            <div class="flex justify-center items-center">
              <p class="text-black text-xl max-w-[90%] text-left">
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
        <div class="bg-gradient-to-br from-white to-[#F6F800] h-screen flex flex-col items-center justify-center">
          <div class="flex justify-center items-center">
            <div class="relative bg-black w-[80vw] h-auto rounded-3xl flex items-center justify-center">
              <p class="absolute top-0 mt-1 text-white text-xl max-w-[250px] text-center">NTU Art Fest</p>

              <div
                class="relative bg-[#C7D8C9] w-[70vw] h-auto min-h-[12rem] rounded-3xl overflow-hidden m-8 flex items-center">
                <img src="@/assets/explore-page/screen.png"
                  class="absolute w-full h-full transform scale-150 opacity-20" />
                <p class="relative left-[5%] right-[5%] top-[5%] bottom-[5%] text-black text-xl max-w-[90%] text-left">
                  當你還沒熟悉完村莊，電話又響了，你穿越到了一個未來的科技世界，城市裡光彩奪目的高樓大廈林立，人們穿梭在各種高科技裝置之間。一位科學家邀請你參觀他的實驗室，向你展示了一個令人驚嘆的發明，你覺得很有趣的地方可能是？
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-start items-left w-full pl-[10vw] pt-4">
            <div class="bg-black w-[80px] h-[35px] rounded-[5px] mr-4 relative triangle-up"></div>
            <div class="bg-black w-[80px] h-[35px] rounded-[5px] relative triangle-right"></div>
          </div>
        </div>
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

.triangle-up::before {
  content: "";
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 20px solid #F6F800;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.triangle-right::before {
  content: "";
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 20px solid #F6F800;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
}
</style>

<!-- I0   E1 -->
<!-- N0   S1 -->
<!-- T0   F1 -->
<!-- P0   J1 -->