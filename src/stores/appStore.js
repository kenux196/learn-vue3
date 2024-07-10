import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    counter: 0,
  }),
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
});

export default useAppStore;
