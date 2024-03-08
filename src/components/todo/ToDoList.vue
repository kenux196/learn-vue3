<script setup>
import { computed, onMounted, ref } from 'vue';
import ToDoDetailModal from './ToDoDetailModal.vue';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

const todoList = ref(null);
const todoData = ref(null);
const userFilter = ref(1);

const filteredTodoList = computed(() => {
  return todoList.value.filter((temp) => temp.userId === userFilter.value);
});
console.log(filteredTodoList);

async function fetchData(url) {
  return await fetch(url).then((response) => response.json());
}

async function getTodoList() {
  todoList.value = await fetchData(baseUrl);
}
async function getDetail(id) {
  todoData.value = await fetchData(baseUrl + '/' + id);
}

onMounted(() => {
  getTodoList();
});

const todoDetailModal = ref('');

async function openDetail(id) {
  console.log('open detail : ' + id);
  await getDetail(id);
  todoDetailModal.value.open(todoData.value);
}
</script>

<template>
  <input type="text" v-model="userFilter" />
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
