<template>
  <div>
    <h1>Child Emit</h1>
    <input type="text" v-model="pMessage" />
    <button @click="sendEmit">send emit</button>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const emit = defineEmits(['hello']);

const pMessage = inject('parent-message');

function sendEmit() {
  console.log('will send emit~~~');
  emit('hello', '안녕하세요~');
}
</script>
