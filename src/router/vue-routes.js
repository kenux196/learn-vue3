const vueRoutes = {
  path: '/vue',
  component: () => import('@/pages/vue-sample/VueSampleMainPage.vue'),
  children: [
    {
      path: 'emit',
      component: () => import('@/pages/vue-sample/EmitTestPage.vue'),
    },
    {
      path: 'store',
      component: () => import('@/pages/vue-sample/StoreTestPage.vue'),
    },
    {
      path: 'todo-list1',
      component: () => import('@/pages/vue-sample/TodoListPage1.vue'),
    },
    {
      path: 'todo-list2',
      component: () => import('@/pages/vue-sample/TodoListPage2.vue'),
    },
    {
      path: 'utils',
      component: () => import('@/pages/vue-sample/UtilsPage.vue'),
    },
    {
      path: 'login',
      component: () => import('@/pages/vue-sample/LoginPage.vue'),
    },
    {
      path: 'vue-query',
      component: () => import('@/pages/vue-sample/VueQueryTestPage.vue'),
    },
  ],
};

export default vueRoutes;
