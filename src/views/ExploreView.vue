<template>
  <div class="explore">
    <div class="bg-gradient-to-b from-[#F9FB00] to-white h-screen flex flex-col items-center justify-center">
      <transition name="fade" mode="in-out" appear>
        <div class="enterPage" v-if="!showTestPage" v-show="showInitPage">
          <div class="flex justify-center items-center">
            <div class="flex justify-center items-center">
              <img src="@/assets/explore-page/ExploreTitle.png" class="mr-7">
            </div>
          </div>

          <div class="flex justify-center items-center" v-show="showInitPage">
            <img @click="initTestPage" src="@/assets/explore-page/EnterButton.png" class="w-8/12 mx-5 my-3 breathe" />
          </div>

          <div class="flex justify-end items-center mr-4" v-show="showInitPage">
            <img src="@/assets/explore-page/TextForArtFest_Black.png" class="h-8">
          </div>
        </div>

        <div class="testPage" v-else v-show="animateRefresh">
          <div class="bg-black h-screen flex flex-col items-center justify-center">
            <div class="relative">
              <img src="@/assets/explore-page/QuestionBackground.png" class="w-12/12 my-5 mt-12">
              <p class="w-[80%] absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
                {{ topic.question }}
              </p>
            </div>

            <div class="pt-0">
              <div>
                <div
                  :class="{ 'bg-[#F9FB00] text-black border-black': option1Selected, 'bg-white text-black border-black': !option1Selected }"
                  class="w-[90vw] h-auto min-h-[1rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 transition-colors ease-in-out duration-500"
                  @click="option1Selected = true; option2Selected = false; nextQuestion()">
                  <p class="max-w-[90%] text-left mt-1 mb-1 text-sm">
                    {{ topic.options_A.text }}
                  </p>
                </div>
              </div>

              <div class="pt-3">
                <div
                  :class="{ 'bg-[#F9FB00] text-black border-black': option2Selected, 'bg-white text-black border-black': !option2Selected }"
                  class="w-[90vw] h-auto min-h-[1rem] rounded-3xl flex items-center justify-center cursor-pointer border-2 transition-colors ease-in-out duration-500"
                  @click="option2Selected = true; option1Selected = false; nextQuestion()">
                  <p class="max-w-[90%] text-left mt-1 mb-1 text-sm">
                    {{ topic.options_B.text }}
                  </p>
                </div>
              </div>

              <div class="flex justify-center items-center pt-2">
                <img src="@/assets/explore-page/TextForArtFest_White.png" class="h-8">
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import topics from '@/assets/explore-page/topics.json';
import resultHash from '@/assets/explore-page/result_hash.json';
import router from '../router';
import { set } from '@vueuse/core';

export default {
  data() {
    return {
      showInitPage: true,
      showTestPage: false,
      animateRefresh: false,
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
      this.showInitPage = false;
      this.showTestPage = true;
      this.startTime = Date.now();

      setTimeout(() => {
        this.animateRefresh = true;
      }, 300);
    },
    nextQuestion() {
      // Wait for 0.3s to show the animate
      setTimeout(() => {
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
            this.caculateResult();
          }

          // Wait for another 0.5s to refresh the page
          setTimeout(() => {
            this.animateRefresh = true;
          }, 300);
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

      router.push({ path: '/result', hash: '#' + hash });
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

@keyframes breathe {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

.breathe {
  animation: breathe 3s ease-in-out infinite;
}
</style>

<!-- I0   E1 -->
<!-- N0   S1 -->
<!-- T0   F1 -->
<!-- P0   J1 -->
