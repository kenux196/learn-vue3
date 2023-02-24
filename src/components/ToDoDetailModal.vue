<script setup>
import { computed, onMounted, ref, watch } from 'vue';

const todoId = ref(1);
const todoData = ref(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}

// onMounted(() => {
//   fetchData();
// });

watch(todoId, (newTodoId) => {
  fetchData();
});

const props = defineProps({
  id: Number,
  title: String,
  completed: Boolean,
  userId: Number,
});

const isModalOpen = ref(computed(() => (props.id ? true : false)));

function close() {}
</script>

<template>
  <dialog :open="todiId">
    <article>
      <header>
        <a href="#close" aria-label="Close" class="close" @click="close"></a>
        Modal title
      </header>
      <p>
        Nunc nec ligula a tortor sollicitudin dictum in vel enim. Quisque
        facilisis turpis vel eros dictum aliquam et nec turpis. Sed eleifend a
        dui nec ullamcorper. Praesent vehicula lacus ac justo accumsan
        ullamcorper.
      </p>
    </article>
  </dialog>
  <p>할 일 id: {{ todoId }}</p>
  <button @click="todoId++">다음 할 일 가져오기</button>
  <p v-if="!todoData">로딩...</p>
  <pre v-else>{{ todoData }}</pre>
</template>
