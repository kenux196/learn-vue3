import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import routes from './routes';

const createHistory = import.meta.env.VITE_SERVER
  ? createMemoryHistory
  : import.meta.env.VITE_VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

const router = createRouter({
  history: createHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
