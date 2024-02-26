<!-- Simple Component -->
<script setup>
import { ref } from 'vue';
import SampleTodoItem from './SampleTodoItem.vue';
import SampleChild01 from './SampleChild01.vue';

const groceryList = ref([
  { id: 0, text: 'Vegetables' },
  { id: 1, text: 'Cheese' },
  { id: 2, text: 'Whatever else humans are supposed to eat' },
  { id: 3, text: '동해 해물탕' },
]);
const message = '전체 리스트 갯수는 ';
const status = 'aaaa';
</script>
<template>
  <h2>Simple Component</h2>
  <SampleChild01
    :message="message"
    :size="groceryList.length"
    :status="status"
  />
  <ol>
    <SampleTodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></SampleTodoItem>
  </ol>
</template>
