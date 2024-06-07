<template>
  <div class="text-h5">책</div>
  <div class="q-gutter-md">
    <q-btn color="primary" @click="openBookForm" class="q-mx-sm">추가</q-btn>
    <q-btn color="primary" @click="removeBooks" class="q-mx-sm">삭제</q-btn>
    <q-btn color="primary" @click="modifyBook" class="q-mx-sm">수정</q-btn>
  </div>
  <div class="q-my-md">
    <q-table
      ref="tableRef"
      title="책 리스트"
      :rows="rows"
      :columns="columns"
      row-key="id"
      selection="multiple"
      v-model:selected="selected"
      @selection="handleSelection"
    >
      <template v-slot:header-selection="scope">
        <q-checkbox v-model="scope.selected" />
      </template>
      <template v-slot:body-selection="scope">
        <q-checkbox
          :model-value="scope.selected"
          @update:model-value="
            (val, evt) => {
              Object.getOwnPropertyDescriptor(scope, 'selected').set(val, evt);
            }
          "
        />
      </template>
    </q-table>
  </div>
  <table role="grid">
    <thead>
      <th>
        <input type="checkbox" :checked="state.selectedAll" @change="selectAll()" />
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
          <input type="checkbox" v-model="state.selectedBook" :value="book.id" @change="selectedBookList()" />
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
  <Progress ref="progress" />
</template>
<script setup>
import { ref, reactive, toRaw, nextTick } from 'vue';
import { store } from '@/stores/store';
import BookAddForm from './BookAddForm.vue';
import Progress from '../common/Progress.vue';

const repository = store.bookRepository;
const state = reactive({
  selectedAll: false,
  books: null,
  selectedBook: [],
});

state.books = getBooks();

const tableRef = ref();
const selected = ref([]);
let storedSelectedRow;

const columns = [
  {
    name: 'id',
    required: true,
    label: 'no.',
    align: 'left',
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: 'title', align: 'center', label: '제목', field: 'title', sortable: true },
  { name: 'author', align: 'center', label: '저자', field: 'author', sortable: true },
  { name: 'price', align: 'center', label: '가격', field: 'price' },
  { name: 'publishDate', align: 'center', label: '발행일', field: 'publishDate' },
];
const rows = getBooks();

function handleSelection({ rows, added, evt }) {
  // ignore selection change from header of not from a direct click event
  if (rows.length !== 1 || evt === void 0) {
    return;
  }

  const oldSelectedRow = storedSelectedRow;
  const [newSelectedRow] = rows;
  const { ctrlKey, shiftKey } = evt;

  if (shiftKey !== true) {
    storedSelectedRow = newSelectedRow;
  }

  // wait for the default selection to be performed
  nextTick(() => {
    if (shiftKey === true) {
      const tableRows = tableRef.value.filteredSortedRows;
      let firstIndex = tableRows.indexOf(oldSelectedRow);
      let lastIndex = tableRows.indexOf(newSelectedRow);

      if (firstIndex < 0) {
        firstIndex = 0;
      }

      if (firstIndex > lastIndex) {
        [firstIndex, lastIndex] = [lastIndex, firstIndex];
      }

      const rangeRows = tableRows.slice(firstIndex, lastIndex + 1);
      // we need the original row object so we can match them against the rows in range
      const selectedRows = selected.value.map(toRaw);

      selected.value =
        added === true
          ? selectedRows.concat(rangeRows.filter((row) => selectedRows.includes(row) === false))
          : selectedRows.filter((row) => rangeRows.includes(row) === false);
    } else if (ctrlKey !== true && added === true) {
      selected.value = [newSelectedRow];
    }
  });
}
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
  showProgressBar();
}

function modifyBook() {
  console.log('[debug] Modify book');
  if (state.selectedBook.length > 1) {
    alert('여러 항목을 동시에 수정할 수 없습니다. 하나만 선택하세요.');
    return;
  }
  showProgressBar();
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

const progress = ref('');
function showProgressBar() {
  progress.value.show();
  setTimeout(() => {
    progress.value.hide();
  }, 1000);
}

function selectedBookList() {
  console.log('[debug] selected book :' + state.selectedBook);
}
</script>
<style scoped></style>
