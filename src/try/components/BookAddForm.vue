<template>
  <dialog :open="state.formOpen">
    <article class="dialog-b">
      <h3>책 등록!</h3>
      <label for="title">제목</label>
      <input
        id="title"
        type="text"
        placeholder="제목을 입력하세요"
        v-model="state.book.title"
      />
      <label for="author">작가</label>
      <input
        id="author"
        type="text"
        placeholder="작가명 입력"
        v-model="state.book.author"
      />
      <label for="price">가격</label>
      <input
        id="price"
        type="number"
        placeholder="제목을 입력하세요"
        v-model="state.book.price"
      />
      <label for="published-date">발행일</label>
      <input id="published-date" type="date" v-model="state.book.publishDate" />
      <div class="grid">
        <a href="#cancel" role="button" class="secondary" @click="close()"
          >취소</a
        >
        <a href="#confirm" role="button" @click="addBook()">등록</a>
      </div>
    </article>
  </dialog>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { Book } from '../js/Book';
import { bookMemoryRepository } from '../js/BookRepository';

const emit = defineEmits(['addedBook']);

const state = reactive({
  formOpen: false,
  book: new Book(),
});
console.log(state.book);

function openBookForm() {
  console.log('Call child openBookForm');
  state.formOpen = true;
}

function close() {
  state.formOpen = false;
}

function validate(book) {
  console.log(book);
  if (
    book.title == undefined ||
    book.author == undefined ||
    book.price == undefined ||
    book.publishDate == undefined
  ) {
    return false;
  }
  return true;
}

function addBook() {
  const book = state.book;
  if (validate(book)) {
    bookMemoryRepository.save(book);
    console.log('book 추가하기 성공');
    emit('addedBook');
    close();
  } else {
    alert('책 정보를 입력하세요~~~');
  }
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
