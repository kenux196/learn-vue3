<script setup>
import { ref, provide, readonly } from 'vue';
import { myInjectionKey } from './keys.js';
import { useMouse } from './mouse.js';
import Child from './Child.vue';

const message = ref('Hello');
provide('message', message);

const sayGoobye = ref('Good Bye~!');
provide('goodbye', sayGoobye);

const location = ref('북극');
function updateLocation() {
  if (location.value != '남극') {
    location.value = '남극';
  } else {
    location.value = '북극';
  }
}
provide('location', {
  location,
  updateLocation,
});

const count = readonly(100);
provide(myInjectionKey, {
  count,
});

const { x, y } = useMouse();
</script>

<template>
  <input v-model="message" />
  <Child />
  <p>mouse position: {{ x }}, {{ y }}</p>
</template>
