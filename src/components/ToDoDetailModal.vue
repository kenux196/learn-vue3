<script setup>
import { ref } from 'vue';

const todoData = ref('');
const isOpen = ref(false);

function close() {
  isOpen.value = false;
}

function open(data) {
  console.log('modal open');
  isOpen.value = true;
  todoData.value = data;
  console.log(data);
}

defineExpose({
  open,
});
</script>

<template>
  <dialog :open="isOpen">
    <article style="width: 100%">
      <h3>할 일</h3>
      <p>{{ todoData.title }}</p>
      <p>{{ todoData.completed ? '완료' : '미완료' }}</p>
      <input type="checkbox" v-model="todoData.completed" />
      <footer>
        <a href="#confirm" role="button" @click="close()">확인</a>
      </footer>
    </article>
  </dialog>
</template>
