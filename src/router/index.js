import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import maintRoutes from './main-routes';

const createHistory = import.meta.env.VITE_SERVER
  ? createMemoryHistory
  : import.meta.env.VITE_VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: maintRoutes,
  history: createHistory(),
});

export default router;
