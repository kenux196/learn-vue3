const libsRoutes = {
  path: '/libs',
  component: () => import('@/pages/libs-sample/LibsSampleMainPage.vue'),
  children: [
    {
      path: 'export',
      component: () => import('@/pages/libs-sample/ExportToExcel.vue'),
    },
    {
      path: 'quill',
      component: () => import('@/pages/libs-sample/VueQuillTestPage.vue'),
    },
    {
      path: 'tiptap',
      component: () => import('@/pages/libs-sample/TiptapTestPage.vue'),
    },
    {
      path: 'vue-query',
      component: () => import('@/pages/libs-sample/VueQueryTestPage.vue'),
    },
    {
      path: 'i18n',
      component: () => import('@/pages/libs-sample/LanguageTestPage.vue'),
    },
  ],
};

export default libsRoutes;
