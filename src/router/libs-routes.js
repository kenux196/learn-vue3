const libsRoutes = {
  path: '/libs',
  component: () => import('@/pages/libs-sample/LibsSampleMainPage.vue'),
  children: [
    {
      path: 'quill',
      component: () => import('@/pages/libs-sample/VueQuillTestPage.vue'),
    },
  ],
};

export default libsRoutes;
