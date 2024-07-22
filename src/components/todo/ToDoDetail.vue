<template>
  <p>할 일 id: {{ todoId }}</p>
  <button @click="todoId++">다음 할 일 가져오기</button>
  <p v-if="!todoData">로딩...</p>
  <pre v-else>{{ todoData }}</pre>
</template>

<script setup>
import { $api } from '@/api/api';
import { onMounted, ref, watch } from 'vue';

const todoId = ref(1);
const todoData = ref(null);

async function fetchData() {
  await $api.jsonplaceholder.fetchTodoById(todoId.value).then((res) => {
    todoData.value = res.data;
  });
}

onMounted(() => {
  fetchData();
});

watch(todoId, (newTodoId) => {
  fetchData();
});
</script>
