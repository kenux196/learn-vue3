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
export const useCounterStore = defineStore('counter', () => {
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
      strategies: [{ storage: localStorage }],
    };
  };

  return { count, name, doubleCount, increment, decrement, $reset, persist };
});

export const useCounterOptionApiStore = defineStore('counter2', {
  state: () => {
    return {
      count: 0,
      name: 'kenux',
    };
  },
  getters: {
    doubleCount() {
      return this.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
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
    storage: localStorage, // default : localstorage
    paths: ['accessToken', 'lastName'], // 특정값만 지정해서 저장.
    beforeRestore: (ctx) => {
      // 복구전 호출되는 콜백
      console.log(`about to restore '${ctx.store.$id}`);
    },
    afterRestore: (ctx) => {
      // 복구 후 호출되는 콜백
      console.log(`just restored '${ctx.store.$id}'`);
    },
  },
});
