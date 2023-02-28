import { createPersistedState } from 'pinia-plugin-persistedstate';

export default defineAppPlugin((app) => {
  app.$pinia.use(createPersistedState);
});
