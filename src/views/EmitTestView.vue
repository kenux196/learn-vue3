<template>
  <div>
    <h1>Hello Emit Test</h1>
    <input type="text" v-model="message" />
    <button @click="sendToChild">send to child {{ count }}</button>
    <div>지금 시간은 ? {{ afterMessage }}</div>
    <button @click="runAction">run some action</button>
  </div>
  <EmitTestComponent @hello="say"></EmitTestComponent>
</template>

<script setup>
import EmitTestComponent from '@/components/EmitTestComponent.vue';
import { runSomeAction } from '@/js/emit-test';
import { provide, ref } from 'vue';

const message = ref('good');
const count = ref(0);
const pMessage = ref('');
const afterMessage = ref('');

function say(msg) {
  console.log(`recieved message: ${msg}`);
  message.value = msg;
}

function sendToChild() {
  count.value++;
  pMessage.value = count.value + '번 메시지입니다.';
}

function runAction() {
  runSomeAction(afterRunner);
}

function afterRunner() {
  console.log('afterRunner');
  afterMessage.value = new Date();
}

provide('parent-message', pMessage);
</script>
