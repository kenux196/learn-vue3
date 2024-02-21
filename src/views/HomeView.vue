<script setup>
import { reactive, ref } from 'vue';
import WelcomeMessage from '../components/WelcomeMessage.vue';

const today = new Date();
const showMessage = ref(false);
const someUrl = ref('https://www.naver.com');
const count = ref(0);

const person = {
  name: 'kenux',
  age: 0,
};
const state = reactive({ number: 0 });
const personProxy = reactive(person);
// const primitive = reactive(1); // reactive는 기본형 미지원. only 객체, 배열, 컬렉션 타입만 가능

function showHiddenMessage() {
  console.log('링크를 눌렀네요~~~');
  showMessage.value = !showMessage.value;
  count.value++;
  person.age++;
}
</script>

<template>
  <main class="container">
    <div class="grid">
      <h1 class="page-title">Vue3 Playground</h1>
      <p>
        KOREA - {{ today.toLocaleString() }}<br />
        UTC - {{ today.toUTCString() }}
      </p>
    </div>
    <WelcomeMessage />
    <a v-on:click="showHiddenMessage()">여기를 누르면? {{ count }}</a>
    <p v-if="showMessage">오늘은 기분이 어떤가요?</p>
    <div>
      <a v-bind:href="someUrl">네이버 : {{ someUrl }}</a>
    </div>
    <button @click="state.number++">대기번호(+): {{ state.number }}</button>
    <button @click="state.number--">대기번호(-): {{ state.number }}</button>
    <button @click="personProxy.age++">
      {{ personProxy.name }}: {{ personProxy.age }}
    </button>
  </main>
</template>

<style scoped>
.page-title {
  color: gray;
}
</style>
