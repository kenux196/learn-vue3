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
const message = ref('전체 리스트 갯수는 ');
const status = ref('warning');
const count = ref(0);
const greeting = ref('Hello World!');
const firstName = ref('firstName');
const lastName = ref('lastName');
</script>
<template>
  <h1>{{ greeting }} {{ lastName + firstName }}</h1>
  <h2>Simple Component</h2>
  <SampleChild01
    :message="message"
    :size="groceryList.length"
    :status="status"
    @increase-by="(n) => (count += n)"
    v-model:greeting="greeting"
    v-model:first-name="firstName"
    v-model:last-name="lastName"
  />
  <p>count is {{ count }}</p>
  <ol>
    <SampleTodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></SampleTodoItem>
  </ol>
</template>
