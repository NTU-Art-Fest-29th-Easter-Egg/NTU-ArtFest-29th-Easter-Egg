<template>
  <div class="explore">
    <transition name="fade" mode="in-out" appear>
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
            <img @click="initTestPage" src="@/assets/explore-page/點擊穿越時空.png" class="w-8/12 mx-5 my-3" />
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
                  {{ topic.question }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-start items-left w-full pl-[10vw] pt-4">
            <div class="bg-black w-[80px] h-[35px] rounded-[5px] mr-4 relative triangle-up"></div>
            <div class="bg-black w-[80px] h-[35px] rounded-[5px] relative triangle-right"></div>
          </div>

          <div class="pt-4">
            <div>
              <div
                :class="{ 'bg-black text-white border-black': option1Selected, 'bg-white text-black border-black': !option1Selected }"
                class="w-[70vw] h-auto min-h-[3rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 transition-colors ease-in-out duration-500"
                @click="option1Selected = true; option2Selected = false">
                <p class="max-w-[90%]">
                  {{ topic.options_A.text }}
                </p>
              </div>
            </div>

            <div class="pt-3">
              <div
                :class="{ 'bg-black text-white border-black': option2Selected, 'bg-white text-black border-black': !option2Selected }"
                class="w-[70vw] h-auto min-h-[3rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 transition-colors ease-in-out duration-500"
                @click="option2Selected = true; option1Selected = false">
                <p class="max-w-[90%]">
                  {{ topic.options_B.text }}
                </p>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <button :disabled="!option1Selected && !option2Selected" @click="nextQuestion"
              :class="{ 'opacity-50': !option1Selected && !option2Selected }"
              class="w-[30vw] h-auto min-h-[3rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 border-black bg-white text-black mt-4">
              下一題
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import topics from '@/assets/explore-page/topics.json';

export default {
  data() {
    return {
      showTestPage: false,
      animateRefresh: true,
      option1Selected: false,
      option2Selected: false,
      topic: {
        index: 0,
        question: '',
        options_A: {
          text: '',
          type: {
            position: -1,
            value: -1,
          },
        },
        options_B: {
          text: '',
          type: {
            position: -1,
            value: -1,
          }
        },
      },
      answers: [],
    };
  },
  methods: {
    initTestPage() {
      this.topic = topics.topic[this.topic.index];
      this.showTestPage = true;
    },
    nextQuestion() {
      if (this.option1Selected) {
        this.answers.push(this.topic.options_A.type);
      } else if (this.option2Selected) {
        this.answers.push(this.topic.options_B.type);
      }

      this.option1Selected = false;
      this.option2Selected = false;

      if (this.topic.index < topics.topic.length) {
        this.topic = topics.topic[this.topic.index];
      } else {
        console.log(this.answers);
      }

      // Wait for 0.5s to let the transition finish
      setTimeout(() => {
        this.animateRefresh = false;
        // Wait for another 0.5s to refresh the page
        setTimeout(() => {
          this.animateRefresh = true;
        }, 500);
      }, 500);
    },
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
  transition: opacity 0.5s ease-in-out;
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