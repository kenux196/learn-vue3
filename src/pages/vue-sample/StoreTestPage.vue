<script setup>
import { storeToRefs } from 'pinia';
import { useCounter2Store, useCounterStore, useUserStore } from '../../stores/store';

const counterStore = useCounterStore();
const counterStore2 = useCounter2Store();
const userStore = useUserStore();

// 반응형을 유지하면서 스토어에서 속성 추출하기: storeToRefs() 사용
// 스토어의 상태만 사용하고, 액션을 호출하지 않을 때 유용한 방법이다.
const { name, count, doubleCount } = storeToRefs(counterStore);
const { accessToken, firstName, lastName } = storeToRefs(userStore);
</script>
<template>
  <div class="grid">
    <p>counterStore.state.name: {{ name }}</p>
    <input type="text" v-model="name" />
    <p>{{ count }} * 2 = {{ doubleCount }}</p>
    <button @click="counterStore.increment">count 증가</button>
  </div>
  <div>
    <p>
      accessToken: {{ accessToken }} <br />
      user name: {{ firstName }} {{ lastName }}
    </p>
    <div class="grid">
      <input type="text" v-model="lastName" />
      <input type="text" v-model="firstName" />
      <input type="text" v-model="accessToken" />
    </div>
  </div>
</template>
