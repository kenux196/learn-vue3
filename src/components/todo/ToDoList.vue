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
            <a href="#" @click="openDetail(todoItem.id)">{{ todoItem.id }}</a>
          </td>
          <td>
            <a href="#" @click="openDetail(todoItem.id)">
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
import axios from 'axios';

const todoList = ref(null);
const todoData = ref(null);

async function fetchData() {
  todoList.value = null;
  await axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
    todoList.value = res.data;
  });
}

async function getDetail(id) {
  await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
    todoData.value = res.data;
  });
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
