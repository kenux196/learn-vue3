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
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td><input type="checkbox" :checked="item.completed" /></td>
          <td>{{ item.userId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const todoList = ref(null);

async function fetchData() {
  todoList.value = null;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  todoList.value = await res.json();
  for (const item in todoList.value) {
    console.log(item);
  }
}

onMounted(() => {
  fetchData();
});
</script>
