import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => {
    return {
      counter: 0,
      language: 'ko',
      locale: 'ko-KR',
      timezone: 'Asia/Seoul',
      timeDisplay: '12h',
    };
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  persist: {
    enabled: true,
    storage: localStorage,
  },
});

export default useAppStore;
