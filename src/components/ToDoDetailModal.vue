<script setup>
import { onMounted, ref, watch } from 'vue';

const todoId = ref(1);
const todoData = ref({
  id: null,
  title: '',
  completed: false,
  userId: null,
});

async function fetchData() {
  console.log('fetchData');
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
  console.log(todoData.value);
}

// onMounted(() => {
//   console.log('onMounted()');
//   // fetchData();
// });

watch(todoId, (newTodoId) => {
  fetchData();
});

const isOpen = ref(false);

function close() {
  isOpen.value = false;
}

function open(id) {
  isOpen.value = true;
  todoId.value = id;
}

defineExpose({
  open,
});
</script>

<template>
  <dialog :open="isOpen">
    <article>
      <header>
        <a href="#close" aria-label="Close" class="close" @click="close"></a>
        <h2>ToDo Item</h2>
      </header>
      <p>{{ todoData.title }}</p>
      <p>{{ todoData.completed }}</p>
    </article>
  </dialog>
</template>
