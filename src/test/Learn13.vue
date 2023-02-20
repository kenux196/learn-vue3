<script setup>
import FancyButton from './FancyButton.vue';
import AwesomIcon from './AwesomIcon.vue';
import { computed, ref } from 'vue';
import { useFetch } from './fetch.js';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
const id = ref('1');
const url = computed(() => baseUrl + id.value);
const { data, error, retry } = useFetch(url);
</script>

<template>
  Load post id:
  <div class="grid">
    <button v-for="i in 5" @click="id = i">{{ i }}</button>
  </div>

  <div v-if="error">
    <p>앗! 오류 발생: {{ error.message }}</p>
    <button @click="retry">재시도</button>
  </div>
  <div v-else-if="data">
    로드된 데이터:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>로딩...</div>
  <FancyButton>
    <span style="color: red"> 클릭하기 </span>
    <AwesomIcon />
  </FancyButton>
</template>
