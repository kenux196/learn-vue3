<script setup>
import { store } from './store';
</script>

<template>
  <h1>HOME</h1>
  <p>{{ store.count }}</p>
  <button @click="store.increment()">{{ store.count }}</button>
</template>
