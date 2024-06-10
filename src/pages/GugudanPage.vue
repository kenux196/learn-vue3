<template>
  <div class="q-ma-xl">
    <div>
      <div class="text-h2 text-weight-bolder text-center">감자 구구단 테스트</div>
    </div>
    <div class="text-h5 text-center q-my-md">게임화면</div>
    <div class="flex justify-evenly">
      <q-btn color="primary" :label="quizLabel" icon="send" class="q-my-md" @click="startLearnMode" />
      <q-btn color="secondary" label="시험 모드 시작" icon="send" class="q-my-md" @click="startTestMode" />
    </div>
    <div class="text-h1 text-bold q-my-md text-center" style="min-height: 120px">
      <span>{{ quiz }} </span>
      <span v-if="showAnswer">{{ answer }}</span>
    </div>
    <div class="flex">
      <q-linear-progress stripe rounded size="50px" color="red" animation-speed="500" :value="progress">
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="remainTime" />
        </div>
      </q-linear-progress>
    </div>
    <div>{{ time }}</div>
  </div>
  <div class="flex justify-end q-gutter-md">
    <div class="col" style="max-width: 200px">
      <q-select
        filled
        v-model="limitTime"
        :options="limitTimeOptions"
        dense
        label="제한시간설정"
        :disable="isRunning"
      ></q-select>
    </div>
    <div class="col" style="max-width: 200px">
      <q-select
        filled
        v-model="selectedDan"
        :options="danNumberOptions"
        dense
        label="단수설정"
        :disable="isRunning"
      ></q-select>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const progress = ref(1);
const limitTime = ref(5);
const limitTimeOptions = ref([10, 5, 3]);
const selectedDan = ref(null);
const danNumberOptions = ref([2, 3, 4, 5, 6, 7, 8, 9]);
const time = ref(limitTime.value);
const quiz = ref('');
const quizLabel = ref('문제내기');
const answer = ref('');
const showAnswer = ref(false);
const isRunning = ref(false);

const remainTime = computed(() => {
  return time.value + ' 초';
});

function getQuiz() {
  let num1 = getRandomInt(9);
  while (num1 < 2) {
    console.log(num1);
    num1 = getRandomInt(9);
  }
  let num2 = getRandomInt(9);
  while (num2 < 1) {
    num2 = getRandomInt(9);
  }

  quiz.value = num1 + ' X ' + num2 + ' = ';
  answer.value = num1 * num2;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function startTestMode() {
  reset();
  getQuiz();
  startTimer();
  isRunning.value = true;
}

function startLearnMode() {
  if (quiz.value && !showAnswer.value) {
    checkAnswer();
    quizLabel.value = '문제내기';
    return;
  }
  reset();
  getQuiz();
  quizLabel.value = '정답확인';
}

function checkAnswer() {
  showAnswer.value = !showAnswer.value;
}

let intervalId;
function startTimer() {
  intervalId = setInterval(() => {
    progress.value = --time.value / limitTime.value;
    if (time.value < 1) {
      clearInterval(intervalId);
      setTimeout(() => {
        showAnswer.value = true;
        isRunning.value = false;
        progress.value = 1;
      }, 1000);
    }
  }, 1000);
}

function reset() {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  isRunning.value = false;
  showAnswer.value = false;
  time.value = limitTime.value;
  progress.value = 1;
  quiz.value = '';
  answer.value = '';
}
</script>

<style lang="scss" scoped></style>
