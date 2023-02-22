<script setup>
import { computed, ref, reactive } from 'vue';
import { store } from '../store/store';
import BookAddForm from './BookAddForm.vue';

const repository = store.bookRepository;
const state = reactive({
  selectedAll: false,
  books: null,
  selectedBook: [],
});

state.books = getBooks();

function selectAll() {
  console.log('[debug] updateChecked');
  if (state.selectedAll) {
    state.selectedAll = false;
    state.selectedBook.splice(0, state.selectedBook.length);
  } else {
    state.selectedAll = true;
    state.books.forEach((book) => {
      state.selectedBook.push(book.id);
    });
  }
}

function getBooks() {
  return repository.findAll();
}

function updateBooks() {
  state.books = getBooks();
}

function modifyBook() {
  console.log('[debug] Modify book');
  if (state.selectedBook.length > 1) {
    alert('여러 항목을 동시에 수정할 수 없습니다. 하나만 선택하세요.');
  }
}

function removeBooks() {
  console.log('[debug] remove books ' + state.selectedBook);
  state.selectedBook.forEach((id) => repository.delete(id));
  state.selectedAll = false;
  updateBooks();
}

const bookAddForm = ref('');
function openBookForm() {
  console.log('Call parent openBookForm()');
  bookAddForm.value.openBookForm();
}

function selectedBookList() {
  console.log('[debug] selected book :' + state.selectedBook);
}
</script>

<template>
  <div class="grid">
    <p style="font-size: xx-large">보유 도서 목록</p>
    <p role="button" @click="openBookForm()">add</p>
    <p role="button" @click="removeBooks()">remove</p>
    <p role="button" @click="modifyBook()">modify</p>
  </div>
  <table role="grid">
    <thead>
      <th>
        <input
          type="checkbox"
          :checked="state.selectedAll"
          @change="selectAll()"
        />
      </th>
      <th>#</th>
      <th>제목</th>
      <th>작가</th>
      <th>가격</th>
      <th>발행일</th>
    </thead>
    <tbody>
      <tr v-for="book in state.books" :key="book.id">
        <td>
          <input
            type="checkbox"
            v-model="state.selectedBook"
            :value="book.id"
            @change="selectedBookList()"
          />
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
  <div class="grid page-num">
    <a>prev</a>
    <a v-for="i in 10" :key="i">{{ i }}</a>
    <a>next</a>
  </div>
  <BookAddForm ref="bookAddForm" @added-book="updateBooks" />
</template>
<style scoped></style>
