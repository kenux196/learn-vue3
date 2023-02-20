<script setup>
import { computed, ref } from 'vue';
import About from './About.vue';
import Home from './Home.vue';
import NotFound from './NotFound.vue';
import { store } from './store';

const routes = {
  '/': Home,
  '/about': About,
};

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound;
});
</script>

<template>
  <a href="#/">Home</a> | <a href="#/about">About</a> |
  <a href="#/non-existent-path">Wrong link</a>
  <component :is="currentView" />
</template>
