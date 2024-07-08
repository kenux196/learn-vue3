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

// setup store 방식
export const useCounterStore = defineStore('counter2', () => {
  const count = ref(0);
  const name = ref('Eduardo');
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function $reset() {
    count.value = 0;
  }

  const persist = () => {
    return {
      enable: true,
      strategies: [{ Storage: localStorage }],
    };
  };

  return { count, name, doubleCount, increment, decrement, $reset, persist };
});

export const useUserStore = defineStore('storeUser', {
  state: () => {
    return {
      firstName: 'S',
      lastName: 'L',
      accessToken: 'xxxxxxxxxxxxx',
    };
  },
  actions: {
    setToken(value) {
      this.accessToken = value;
    },
  },
  persist: {
    enabled: true,
  },
});
