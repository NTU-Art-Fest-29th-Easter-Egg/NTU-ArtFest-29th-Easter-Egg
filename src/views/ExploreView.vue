<template>
  <div class="explore">
    <div class="bg-gradient-to-b from-[#F9FB00] to-white h-auto flex flex-col items-center justify-start">
      <transition name="fade" mode="in-out" appear>
        <div class="enterPage">
          <div v-show="showInitPage">
            <div class="flex justify-center items-center">
              <div class="flex justify-center items-center">
                <img src="@/assets/explore-page/ExploreTitle.png" class="mr-7" v-show="showInitPage" />
              </div>
            </div>

            <div class="flex justify-center items-center">
              <img @click="initTestPage" src="@/assets/explore-page/EnterButton.png" class="w-8/12 mx-5 my-3 breathe"
                v-show="showInitPage" />
            </div>

            <div class="flex justify-end items-center mr-4">
              <img src="@/assets/explore-page/TextForArtFest_Black.png" class="h-8" v-show="showInitPage" />
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade" mode="in-out" appear>
        <div class="testPage" v-show="animateRefresh">
          <div class="bg-black h-screen flex flex-col items-center justify-start">
            <div class="relative">
              <img src="@/assets/explore-page/QuestionBackground.png" class="w-12/12 my-5 mt-12">
              <p class="w-[80%] absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
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

<script setup lang="ts">
import { ref } from 'vue';
import topics from '@/assets/explore-page/topics.json';
import resultHash from '@/assets/explore-page/result_hash.json';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showInitPage = ref(true);
const showTestPage = ref(false);
const animateRefresh = ref(false);
const option1Selected = ref(false);
const option2Selected = ref(false);
let startTime = -1;
const topic = ref({
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
    },
  },
});
const answers = ref<any[]>([]);

const initTestPage = () => {
  topic.value = topics.topic[topic.value.index];
  showInitPage.value = false;
  showTestPage.value = true;
  startTime = Date.now();

  setTimeout(() => {
    animateRefresh.value = true;
  }, 300);
};

const nextQuestion = () => {
  showInitPage.value = false;
  setTimeout(() => {
    if (option1Selected.value) {
      answers.value.push({
        usedTime: Date.now() - startTime,
        type: topic.value.options_A.type,
      });
    } else if (option2Selected.value) {
      answers.value.push({
        usedTime: Date.now() - startTime,
        type: topic.value.options_B.type,
      });
    }

    option1Selected.value = false;
    option2Selected.value = false;
    startTime = Date.now();
    animateRefresh.value = false;

    setTimeout(() => {
      if (topic.value.index < topics.topic.length) {
        topic.value = topics.topic[topic.value.index];
      } else {
        caculateResult();
      }

      setTimeout(() => {
        animateRefresh.value = true;
      }, 300);
    }, 300);
  }, 300);
};

const caculateResult = () => {
  const position = Array.from({ length: 4 }, () => []);

  for (const answer of answers.value) {
    const { position: pos, value, usedTime } = answer.type;
    if (pos !== undefined && pos >= 0 && pos < 4) {
      position[pos].push({ value, usedTime });
    }
  }

  const result: number[] = [-1, -1, -1, -1];
  for (let i = 0; i < 4; i++) {
    if (position[i].length >= 2) {
      result[i] = position[i][0].usedTime < position[i][1].usedTime ? position[i][0].value : position[i][1].value;
    } else if (position[i].length === 1) {
      result[i] = position[i][0].value;
    }
  }

  let resultStr = result[0].toString() + result[1].toString() + result[2].toString() + result[3].toString();

  // Send a get request to send the result to the server
  // https://docs.google.com/forms/d/e/1FAIpQLSev0Kl2_VkblsAfVr-QP2VVQqcssShTaTe2CpMAAKJkghrf2w/formResponse?entry.1286988761=1011

  fetch(`https://docs.google.com/forms/d/e/1FAIpQLSev0Kl2_VkblsAfVr-QP2VVQqcssShTaTe2CpMAAKJkghrf2w/formResponse?entry.1286988761=${resultStr}`, {
    mode: 'no-cors'
  })
    .then(() => {
      console.log('Request succeeded');
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  let hash = "undefined";
  for (let i = 0; i < resultHash.result.length; i++) {
    if (resultHash.result[i].type === resultStr) {
      hash = resultHash.result[i].hash;
      break;
    }
  }

  (router as Router).push({ path: '/result', hash: '#' + hash });
};

</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

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
