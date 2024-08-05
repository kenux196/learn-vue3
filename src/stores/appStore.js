import { acceptHMRUpdate, defineStore } from 'pinia';

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

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}

export default useAppStore;
