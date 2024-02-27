<script setup>
// const jsonData = require('../json/test.json');
// console.log(jsonData);
// fetch('../json/test.json')
//   .then((res) => {
//     return res.json();
//   })
//   .then((jsonData) => console.log(jsonData));
import test from '@/assets/test.json';
import { ref } from 'vue';

const testList = ref(test);
console.log(testList);
</script>
<template>
  <h1>API Test App</h1>
  <p>{{ testList.length }}</p>
  <p v-for="item in testList">{{ item.name }}</p>
</template>
