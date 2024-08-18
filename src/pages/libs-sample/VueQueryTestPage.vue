<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <span v-else-if="isFetching">Refreshing...</span>
  <ul v-else>
    <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
  </ul>
  <button @click="onButtonClick">Add Todod</button>
</template>

<script setup>
import { $api } from '@/api/api';
// import { useQueryClient, useQuery, useMutation } from 'vue-query';
import { useQuery } from 'vue-query';

// Access QueryClient instance
// const queryClient = useQueryClient();

// Query
const { isLoading, isError, data, error, isFetching } = useQuery(['todos'], getTodos, {
  staleTime: 10 * 1000,
});

// // Mutation
// const mutation = useMutation(postTodo, {
//   onSuccess: () => {
//     // Invalidate and refetch
//     queryClient.invalidateQueries(['todos']);
//   },
// });

// function onButtonClick() {
//   mutation.mutate({
//     id: Date.now(),
//     title: 'Do Something...',
//   });
// }

async function getTodos() {
  return await $api.jsonplaceholder
    .fetchTodos()
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
}
</script>

<style lang="scss" scoped></style>
