<script setup>
import { provide } from 'vue';
import { store } from './store/store.js';

import WelcomeMessage from './components/WelcomeMessage.vue';
import BookList from './components/BookList.vue';
import TodoDetailView from './components/TodoDetailView.vue';
import StoreSample from './components/StoreSample.vue';

const today = new Date();
// const user = provide('user', prompt('이름을 입력하세요.'));
// store.setUser(prompt('이름을 입력하세요'));
</script>

<template>
  <main class="container">
    <div class="grid">
      <h1 class="page-title">Vue3 Playground</h1>
      <p>
        KOREA - {{ today.toLocaleString() }}<br />
        UTC - {{ today.toUTCString() }}
      </p>
    </div>
    <WelcomeMessage />
    <BookList /><br />
    <div>
      <TodoDetailView />
    </div>
    <div>
      <StoreSample />
    </div>
  </main>
</template>

<style scoped>
.page-title {
  color: gray;
}
</style>
