<script setup>
import { computed, reactive, ref } from 'vue';
import { store } from '../store/store';

const allCheckState = ref(false);
const isChecked = computed(() => {
  console.log(allCheckState.value);
  return allCheckState.value ? true : false;
});

function updateChecked() {
  return (allCheckState.value = !allCheckState.value);
}
</script>
<template>
  <table>
    <thead>
      <th>
        <input
          type="checkbox"
          :checked="allCheckState"
          @click="updateChecked()"
        />
      </th>
      <th>#</th>

      <th>제목</th>
      <th>작가</th>
      <th>가격</th>
      <th>발행일</th>
    </thead>
    <tbody>
      <tr v-for="book in store.books" :key="book.id">
        <td>
          <input type="checkbox" :checked="isChecked" />
        </td>
        <td>
          <a href="#">{{ book.id }}</a>
        </td>
        <td>
          <a href="#">{{ book.title }}</a>
        </td>
        <td>{{ book.author }}</td>
        <td>{{ book.price }}</td>
        <td>{{ book.publishDate }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped></style>
