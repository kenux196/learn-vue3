import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => {
    return {
      language: 'ko',
      locale: 'ko-KR',
      timezone: 'Asia/Seoul',
      timeDisplay: '12h',
      theme: 'dark',
    };
  },
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    storage: localStorage,
  },
});

export default useAppStore;
