<script setup>
import { onMounted, ref } from 'vue';

const input = ref(null);
const itemRefs = ref(null);
const list = ref([1, 2, 3]);
onMounted(() => {
  console.log('onMounted: input box에 포커싱된다.');
  input.value.focus();
  console.log('itemRefs:', itemRefs.value);
});
</script>

<template>
  <div class="container">
    <h1>템플릿 참조</h1>
    <input ref="input" />
    <ul>
      <li v-for="item in list" ref="itemRefs">{{ item }}</li>
    </ul>
  </div>
</template>
