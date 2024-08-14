const libsRoutes = {
  path: '/libs',
  component: () => import('@/pages/libs-sample/LibsSampleMainPage.vue'),
  children: [
    {
      path: 'quill',
      component: () => import('@/pages/libs-sample/VueQuillTestPage.vue'),
    },
    {
      path: 'tiptap',
      component: () => import('@/pages/libs-sample/TiptapTestPage.vue'),
    },
  ],
};

export default libsRoutes;
