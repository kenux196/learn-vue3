<script setup>
// const jsonData = require('../json/test.json');
// console.log(jsonData);
// fetch('../json/test.json')
//   .then((res) => {
//     return res.json();
//   })
//   .then((jsonData) => console.log(jsonData));
import user from '@/assets/model/user.json';
import { ref } from 'vue';

const userList = ref(user);
console.log(userList.value);
</script>
<template>
  <h1>Json file load test</h1>
  <p>전체 리스트 길이: {{ userList.length }}</p>
  <table>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>JOIN DATE</th>
    </tr>
    <tr v-for="user in userList" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.joinDate }}</td>
    </tr>
  </table>
</template>
