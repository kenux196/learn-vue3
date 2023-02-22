<template>
  <dialog :open="isShow">
    <h1 aria-busy="true"></h1>
  </dialog>
</template>
<script setup>
import { ref } from 'vue';

const isShow = ref(false);
function show() {
  console.log('Call child openBookForm');
  isShow.value = true;
}

function hide() {
  isShow.value = false;
}

// defineExpose를 통하여 함수를 내보낸다.
defineExpose({
  show,
  hide,
});
</script>
