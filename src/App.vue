<script setup>
import HomeView from './views/HomeView.vue';
</script>

<template>
  <header class="container">
    <nav>
      <ul>
        <li><h3>Learn Vue3</h3></li>
      </ul>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/todo-list">ToDo</router-link>
        </li>
        <li><router-link to="/store-sample">Store-Test</router-link></li>
      </ul>
    </nav>
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>
