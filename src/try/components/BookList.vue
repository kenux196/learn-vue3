<script setup>
import { computed, ref } from 'vue';
import { store } from '../store/store';
import { Book } from '../js/Book';

const allCheckState = ref(false);
const isChecked = computed(() => {
  console.log(allCheckState.value);
  return allCheckState.value ? true : false;
});

function updateChecked() {
  return (allCheckState.value = !allCheckState.value);
}

const repository = store.bookRepository;
const books = computed(() => getBooks());

function getBooks() {
  return repository.findAll();
}

function addBook() {
  console.log('book 추가하기');
  const book = Book.createBook(
    '동에 번쩍, 서에 번쩍',
    '홍길동',
    13000,
    new Date().toLocaleDateString()
  );
  repository.save(book);
  alert('새로운 책이 추가되었습니다.');
}
</script>
<template>
  <table>
    <thead>
      <th>
        <input
          type="checkbox"
          :checked="allCheckState"
          @click="updateChecked()"
        />
      </th>
      <th>#</th>
      <th>제목</th>
      <th>작가</th>
      <th>가격</th>
      <th>발행일</th>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.id">
        <td>
          <input type="checkbox" :checked="isChecked" />
        </td>
        <td>
          <a href="#">{{ book.id }}</a>
        </td>
        <td>
          <a href="#">{{ book.title }}</a>
        </td>
        <td>{{ book.author }}</td>
        <td>{{ book.price }}</td>
        <td>{{ book.publishDate }}</td>
      </tr>
    </tbody>
  </table>
  <div class="grid">
    <p role="button" @click="addBook()">add</p>
    <p role="button">remove</p>
    <p role="button">modify</p>
    <p role="button" class="outline">prev</p>
    <p role="button" class="outline">next</p>
  </div>
</template>
<style scoped></style>
