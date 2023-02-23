<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useCounter2Store } from '../store/store';

const store = useCounter2Store();

// 반응형을 유지하면서 스토어에서 속성 추출하기: storeToRefs() 사용
// 스토어의 상태만 사용하고, 액션을 호출하지 않을 때 유용한 방법이다.
const { name, count, doubleCount } = storeToRefs(store);
</script>
<template>
  <div class="grid">
    <p>store.state.name: {{ name }}</p>
    <input type="text" v-model="name" />
    <p>{{ count }} * 2 = {{ doubleCount }}</p>
    <button @click="store.increment">count 증가</button>
  </div>
</template>
