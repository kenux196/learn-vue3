<!-- Simple Component -->
<script setup>
import { ref } from 'vue';
import SampleTodoItem from './SampleTodoItem.vue';

const groceryList = ref([
  { id: 0, text: 'Vegetables' },
  { id: 1, text: 'Cheese' },
  { id: 2, text: 'Whatever else humans are supposed to eat' },
]);
</script>
<template>
  <h2>Simple Component</h2>
  <ol>
    <SampleTodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></SampleTodoItem>
  </ol>
</template>
