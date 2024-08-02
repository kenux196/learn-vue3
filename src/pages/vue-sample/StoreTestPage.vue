<template>
  <div class="grid">
    <p>counterStore.state.name: {{ name }}</p>
    <input type="text" v-model="name" />
    <p>{{ count }} * 2 = {{ doubleCount }}</p>
    <button @click="counterStore.increment">count 증가</button>
    <button @click="counterStore.decrement">count 감소</button>
    <button @click="counterStore.$reset">초기화</button>
    <p v-if="isOver10">{{ count }}가 10보다 커졌습니다.</p>
  </div>
  <div class="grid">
    <p>counterStoreOptionApi.state.name: {{ counterStoreOptionApi.name}}</p>
    <input type="text" v-model="counterStoreOptionApi.name" />
    <p>{{ count }} * 2 = {{ doubleCount }}</p>
    <button @click="counterStoreOptionApi.increment">count 증가</button>
    <button @click="counterStoreOptionApi.decrement">count 감소</button>
    <button @click="counterStoreOptionApi.$reset">초기화</button>
    <p v-if="isOver10">{{ count }}가 10보다 커졌습니다.</p>
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
    <button @click="userStore.$reset">reset user data</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterOptionApiStore, useCounterStore, useUserStore } from '../../stores/store';

const counterStore = useCounterStore();
const userStore = useUserStore();
const counterStoreOptionApi = useCounterOptionApiStore();

// 반응형을 유지하면서 스토어에서 속성 추출하기: storeToRefs() 사용
// 스토어의 상태만 사용하고, 액션을 호출하지 않을 때 유용한 방법이다.
const { name, count, doubleCount } = storeToRefs(counterStore);
const { accessToken, firstName, lastName } = storeToRefs(userStore);

const isOver10 = ref(false);

// pinia subscribe 테스트
counterStore.$subscribe(() => {
  console.log(count.value);
  if (count.value > 10) {
    isOver10.value = true;
  }
});
</script>
