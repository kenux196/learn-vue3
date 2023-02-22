<template>
  <dialog :open="isOpen">
    <article class="dialog-b">
      <h3>책 등록!</h3>
      <label for="title">제목</label>
      <input
        id="title"
        type="text"
        placeholder="제목을 입력하세요"
        :value="title"
      />
      <label for="author">작가</label>
      <input
        id="author"
        type="text"
        placeholder="작가명 입력"
        :value="author"
      />
      <label for="price">가격</label>
      <input
        id="price"
        type="number"
        placeholder="제목을 입력하세요"
        :value="price"
      />
      <label for="published-date">발행일</label>
      <input id="published-date" type="date" :value="publishedDate" />
      <div class="grid">
        <a href="#cancel" role="button" class="secondary" @click="close()"
          >취소</a
        >
        <a href="#confirm" role="button" @click="close()">등록</a>
      </div>
    </article>
  </dialog>
</template>
<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function openBookForm() {
  console.log('Call child openBookForm');
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
}

// defineExpose를 통하여 함수를 내보낸다.
defineExpose({
  openBookForm,
});
</script>
<style scoped>
.dialog-b {
  width: 100%;
}
</style>
