<script setup>
// const jsonData = require('../json/test.json');
// console.log(jsonData);
// fetch('../json/test.json')
//   .then((res) => {
//     return res.json();
//   })
//   .then((jsonData) => console.log(jsonData));
import user from '@/assets/model/user.json';
import { computed, ref } from 'vue';

const userList = ref(user);
console.log(userList.value);
const sortedUserList = computed(() => {
  return userList.value.sort((a, b) => {
    if (sortType.value === 'asc') {
      if (a.joinDate > b.joinDate) return 1;
      if (a.joinDate < b.joinDate) return -1;
      return 0;
    } else {
      if (a.joinDate < b.joinDate) return 1;
      if (a.joinDate > b.joinDate) return -1;
      return 0;
    }
  });
});

const sortType = ref('asc');
function sortJoinDate() {
  if (sortType.value === 'asc') {
    sortType.value = 'desc';
  } else {
    sortType.value = 'asc';
  }
}
const selectedList = ref([]);
const allSelected = computed({
  get() {
    if (sortedUserList.value.length === 0) return false;
    return sortedUserList.value.length === selectedList.value.length;
  },
  set(value) {
    selectedList.value = value ? sortedUserList.value : [];
  },
});

function deleteUser() {
  if (selectedList.value.length === 0) {
    alert('삭제할 항목을 선택하세요.');
    return;
  }
  userList.value = userList.value.filter(
    (user) => !selectedList.value.includes(user)
  );
  selectedList.value = [];
}
</script>
<template>
  <h1>Json file load test</h1>
  <p>전체 리스트 길이: {{ userList.length }}</p>
  <button @click="sortJoinDate">가입일별 정렬 {{ sortType }}</button>
  <button @click="deleteUser">삭제</button>
  <table>
    <tr>
      <th>
        <input
          type="checkbox"
          v-model="allSelected"
          :disabled="sortedUserList.length === 0"
        />
      </th>
      <th>ID</th>
      <th>NAME</th>
      <th>JOIN DATE</th>
    </tr>
    <tr v-for="user in sortedUserList" :key="user.id">
      <td><input type="checkbox" :value="user" v-model="selectedList" /></td>
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.joinDate }}</td>
    </tr>
  </table>
  <p>선택한 아이템 : {{ selectedList }}</p>
</template>
