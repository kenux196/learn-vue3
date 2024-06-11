const quasrRoutes = {
  path: '/quasar',
  component: () => import('@/pages/quasar-sample/QuasarSamplePage.vue'),
  children: [
    {
      path: 'basic',
      component: () => import('@/pages/quasar-sample/QuasarBasicTestPage.vue'),
    },
    {
      path: 'cards',
      component: () => import('@/pages/quasar-sample/CardPage.vue'),
    },
  ],
};

export default quasrRoutes;
