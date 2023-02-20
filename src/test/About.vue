<template>
  <h1>About</h1>
  <p>{{ store.count }}</p>
  <button @click="store.increment()">{{ store.count }}</button>
</template>
<script setup>
import { store } from './store';
</script>
