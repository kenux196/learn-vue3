import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './routes'

const createHistory = process.env.SERVER
? createMemoryHistory
: process.env.VUE_ROUTER_MODE === 'history'
? createWebHistory
: createWebHashHistory;

const router = createRouter({
  history: createHistory(process.env.VUE_ROUTER_BASE),
  routes,
});

export default router;
