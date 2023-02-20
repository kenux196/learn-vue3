<script setup>
import { ref, provide } from 'vue';
import Child from './Child.vue';

const message = ref('Hello');
const sayGoobye = ref('Good Bye~!');
provide('message', message);
provide('goodbye', sayGoobye);
</script>

<template>
  <input v-model="message" />
  <Child />
</template>
