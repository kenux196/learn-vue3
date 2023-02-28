import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import { bookMemoryRepository } from '../js/BookRepository.js';

export const store = reactive({
  player: null,
  setUser(user) {
    this.player = user;
  },
  bookRepository: bookMemoryRepository,
});

// Option Store 방식
export const useCounterStore = defineStore('counter', {
  // data
  state: () => ({
    count: 0,
    name: 'Eduardo',
  }),
  // compute
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // method
  actions: {
    increment() {
      this.count++;
    },
  },
});

// setup store 방식
export const useCounter2Store = defineStore(
  'counter2',
  () => {
    const count = ref(0);
    const name = ref('Eduardo');
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }

    return { count, name, doubleCount, increment };
  },
  {
    persist: true,
  }
);
