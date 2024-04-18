<template>
  <div class="explore">
    <transition name="fade" mode="in-out" appear>
      <div class="enterPage" v-if="!showTestPage">
        <div class="bg-gradient-to-br from-white to-[#F6F800] h-screen flex flex-col items-center justify-center">
          <div class="flex justify-center items-center mb-5">
            <div class="flex justify-center items-center">
              <p class="text-black text-xl max-w-[70%] text-left">
                有天你突然發現自己身處一個神祕的房間，房間很空曠，只有在一個褐色美式鄉村木桌和放在上面的電話，忽然桌上電話響起，你走進一看，發現來電顯示上寫著：「穿越時空」。你要接起來嗎？
              </p>
            </div>
          </div>

          <div class="flex justify-center items-center">
            <img @click="initTestPage" src="@/assets/explore-page/點擊穿越時空.png" class="w-8/12 mx-5 my-3" />
          </div>
        </div>
      </div>

      <div class="testPage" v-else v-show="animateRefresh">
        <div class="bg-gradient-to-br from-white to-[#F6F800] h-screen flex flex-col items-center justify-center">
          <div class="flex justify-center items-center">
            <div class="relative bg-black w-[80vw] h-auto rounded-3xl flex items-center justify-center">
              <p class="absolute top-0 mt-1 text-white text-xl max-w-[250px] text-center">NTU Art Fest</p>

              <div
                class="relative bg-[#C7D8C9] w-[70vw] h-auto min-h-[12rem] rounded-3xl overflow-hidden m-8 flex items-center">
                <img src="@/assets/explore-page/screen.png"
                  class="absolute w-full h-full transform scale-150 opacity-20" />
                <p
                  class="relative left-[5%] right-[5%] top-[5%] bottom-[5%] text-black text-xl max-w-[90%] text-left mt-2 mb-2">
                  {{ topic.question }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-start items-left w-full pl-[10vw] pt-4 ml-2">
            <div class="bg-black w-[40px] h-[17px] rounded-[5px] mr-2 relative triangle-up"></div>
            <div class="bg-black w-[40px] h-[17px] rounded-[5px] relative triangle-right"></div>
          </div>

          <div class="pt-4">
            <div>
              <div
                :class="{ 'bg-black text-white border-black': option1Selected, 'bg-white text-black border-black': !option1Selected }"
                class="w-[70vw] h-auto min-h-[3rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 transition-colors ease-in-out duration-500"
                @click="option1Selected = true; option2Selected = false">
                <p class="max-w-[90%] text-left mt-2 mb-2">
                  A. {{ topic.options_A.text }}
                </p>
              </div>
            </div>

            <div class="pt-3">
              <div
                :class="{ 'bg-black text-white border-black': option2Selected, 'bg-white text-black border-black': !option2Selected }"
                class="w-[70vw] h-auto min-h-[3rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 transition-colors ease-in-out duration-500"
                @click="option2Selected = true; option1Selected = false">
                <p class="max-w-[90%] text-left mt-2 mb-2">
                  B. {{ topic.options_B.text }}
                </p>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <button :disabled="!option1Selected && !option2Selected" @click="nextQuestion"
              :class="{ 'opacity-50': !option1Selected && !option2Selected }"
              class="w-[30vw] h-auto min-h-[2rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 border-black bg-white text-black mt-4">
              <span v-if="topic.index >= 7">尋找屬於你的電話</span>
              <span v-else>下一題</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import topics from '@/assets/explore-page/topics.json';
import resultHash from '@/assets/explore-page/result_hash.json';
import router from '../router';

export default {
  data() {
    return {
      showTestPage: false,
      animateRefresh: true,
      option1Selected: false,
      option2Selected: false,
      startTime: -1,
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
      this.startTime = Date.now();
    },
    nextQuestion() {
      if (this.option1Selected) {
        this.answers.push({
          'usedTime': Date.now() - this.startTime,
          'type': this.topic.options_A.type
        });
      } else if (this.option2Selected) {
        this.answers.push({
          'usedTime': Date.now() - this.startTime,
          'type': this.topic.options_B.type
        });
      }

      this.option1Selected = false;
      this.option2Selected = false;
      this.startTime = Date.now();


      this.animateRefresh = false;
      // Wait for 0.5s to refresh the page
      setTimeout(() => {
        if (this.topic.index < topics.topic.length) {
          this.topic = topics.topic[this.topic.index];
        } else {
          console.log(this.answers);
          this.caculateResult();
        }

        // Wait for another 0.5s to refresh the page
        setTimeout(() => {
          this.animateRefresh = true;
        }, 300);
      }, 300);
    },
    caculateResult() {
      var position = [[], [], [], []];
      for (var i = 0; i < this.answers.length; i++) {
        position[this.answers[i].type.position].push({
          value: this.answers[i].type.value,
          usedTime: this.answers[i].usedTime
        });
      }

      var result = [-1, -1, -1, -1];
      for (var i = 0; i < 4; i++) {
        if (position[i].length === 1) {
          result[i] = position[i][0].value;
        } else {
          if (position[i][0].value === position[i][1].value) {
            result[i] = position[i][0].value;
          } else {
            if (position[i][0].usedTime < position[i][1].usedTime) {
              result[i] = position[i][0].value;
            } else {
              result[i] = position[i][1].value;
            }
          }
        }
      }

      let resultStr = result[0].toString() + result[1].toString() + result[2].toString() + result[3].toString();
      // Find hash from result_hasg.json
      var hash = "undefined";
      for (var i = 0; i < resultHash.result.length; i++) {
        if (resultHash['result'][i].type === resultStr) {
          hash = resultHash['result'][i].hash;
          break;
        }
      }

      console.log(resultStr);
      console.log(hash);
      router.push('/result#' + hash);
    }
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
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.triangle-up::before {
  content: "";
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 8px solid #F6F800;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.triangle-right::before {
  content: "";
  width: 0;
  height: 0;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-left: 8px solid #F6F800;
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