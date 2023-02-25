import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/book',
      component: () => import('../views/BookView.vue'),
    },
    {
      path: '/todo-list',
      component: () => import('../views/TodoListView.vue'),
    },
    {
      path: '/store-sample',
      component: () => import('../views/StoreSampleView.vue'),
    },
    {
      path: '/color',
      component: () => import('../views/ColorView.vue'),
    },
  ],
});

export default router;
