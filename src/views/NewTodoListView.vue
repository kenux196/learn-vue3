<template>
  <h1>New Todo</h1>
</template>

<script setup>
import { ref } from 'vue';

const todos = ref([
  {
    title: 'todo1',
    detail: 'details',
    status: 'todo',
    dueDate: '2024-03-11',
    createdDate: '2024-03-05',
  },
]);
</script>

<style lang="scss" scoped></style>
