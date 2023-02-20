<script setup>
import { inject } from 'vue';
import { myInjectionKey } from './keys';

const message = inject('message');
const goodbye = inject('goodbye', 'default');
const { location, updateLocation } = inject('location');
const injected = inject(myInjectionKey);
</script>
<template>
  <p>손자에게 전하는 메시지: {{ message }}</p>
  <p>{{ goodbye }}</p>
  <button @click="updateLocation">{{ location }}</button>
  <p>{{ injected.count }}</p>
</template>
