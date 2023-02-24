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
        <tr v-for="item in todoList" :key="item.id">
          <td>
            <a @click="openDetail(item.id)">{{ item.id }}</a>
          </td>
          <td>
            <a @click="openDetail(item.id)">
              {{ item.title }}
            </a>
          </td>
          <td><input type="checkbox" :checked="item.completed" /></td>
          <td>{{ item.userId }}</td>
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

onMounted(() => {
  fetchData();
});

const todoDetailModal = ref('');

function openDetail(id) {
  console.log('open detail : ' + id);
  todoDetailModal.value.open(id);
}
</script>
