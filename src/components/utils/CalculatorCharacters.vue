<script setup>
import { computed, ref } from 'vue';

const content = ref('');
const countOfAllCharacter = computed(() => {
  console.log(content.value);
  return content.value.length;
});
const countOfOnlyChar = computed(() => {
  const rows = content.value.split('\n').length;
  return content.value.replace(' ', '').length - rows + 1;
});
</script>

<template>
  <h1>글자수세기</h1>
  <textarea v-model="content"></textarea>
  <p>전체 글자수 : {{ countOfAllCharacter }}</p>
  <p>공백 제외한 글자수 : {{ countOfOnlyChar }}</p>
</template>
