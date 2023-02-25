<template>
  <div>
    <table>
      <thead>
        <th>#</th>
        <th>title</th>
        <th>complete</th>
        <th>userId</th>
      </thead>
      <tbody>
        <tr v-for="todoItem in todoList" :key="todoItem.id">
          <td>
            <a @click="openDetail(todoItem.id)">{{ todoItem.id }}</a>
          </td>
          <td>
            <a @click="openDetail(todoItem.id)">
              {{ todoItem.title }}
            </a>
          </td>
          <td><input type="checkbox" :checked="todoItem.completed" /></td>
          <td>{{ todoItem.userId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <ToDoDetailModal ref="todoDetailModal" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ToDoDetailModal from './ToDoDetailModal.vue';

const todoList = ref(null);
const todoData = ref(null);

async function fetchData() {
  todoList.value = null;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  todoList.value = await res.json();
  for (const key in todoList.value) {
    if (Object.hasOwnProperty.call(todoList.value, key)) {
      const element = todoList.value[key];
      console.log(element);
    }
  }
}

async function getDetail(id) {
  console.log(`getDetail(${id})`);
  todoData.value = null;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  todoData.value = await res.json();
  console.log(todoData.value);
}

onMounted(() => {
  fetchData();
});

const todoDetailModal = ref('');

async function openDetail(id) {
  console.log('open detail : ' + id);
  await getDetail(id);
  todoDetailModal.value.open(todoData.value);
}
</script>
