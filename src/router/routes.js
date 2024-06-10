const routes = [
  { path: '/', component: () => import('@/pages/LandingPage.vue') },
  {
    path: '/nested-route',
    component: () => import('@/pages/nested-route-page/NestedRoutePage.vue'),
    children: [
      {
        path: 'sub-page1',
        component: () => import('@/pages/nested-route-page/SubPage1.vue'),
      },
      {
        path: 'sub-page2',
        component: () => import('@/pages/nested-route-page/SubPage2.vue'),
      },
      {
        path: 'sub-page3',
        component: () => import('@/pages/nested-route-page/SubPage3.vue'),
      },
      {
        path: 'sub-page4',
        component: () => import('@/pages/nested-route-page/SubPage4.vue'),
      },
      {
        path: 'books',
        component: () => import('@/pages/nested-route-page/BooksPage.vue'),
      },
    ],
  },
  {
    path: '/book',
    component: () => import('@/pages/nested-route-page/BooksPage.vue'),
  },
  {
    path: '/todo-list',
    component: () => import('@/pages/TodoListView.vue'),
  },
  {
    path: '/new-todo-list', // todo: add ...
    component: () => import('@/pages/NewTodoListView.vue'),
  },
  {
    path: '/posts',
    // component: () => import('@/pages/PostsView.vue'),
    component: () => import('@/pages/PostsPage.vue'),
  },
  {
    path: '/store-sample',
    component: () => import('@/pages/StoreSampleView.vue'),
  },
  {
    path: '/color',
    component: () => import('@/pages/ColorView.vue'),
  },
  {
    path: '/emit-test',
    component: () => import('@/pages/EmitTestView.vue'),
  },
  {
    path: '/utils',
    component: () => import('@/pages/UtilsView.vue'),
  },
  {
    path: '/json-test',
    component: () => import('@/pages/JsonLoadView.vue'),
  },
  { path: '/dashboard', component: () => import('@/pages/DashboardPage.vue') },
  {
    path: '/settings',
    component: () => import('@/pages/SettingsPage.vue'),
  },
  {
    path: '/quasar-test',
    component: () => import('@/pages/QuasarTestPage.vue'),
  },
  {
    path: '/card-sample',
    component: () => import('@/pages/CardPage.vue'),
  },
  {
    path: '/chart-test',
    component: () => import('@/pages/ChartTestPage.vue'),
  },
  {
    path: '/chart-test2',
    component: () => import('@/pages/ChartTestPage2.vue'),
  },
  {
    path: '/gugudan',
    component: () => import('@/pages/GugudanPage.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
];

export default routes;
