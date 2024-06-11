const nestedRoutes = {
  path: '/nested-route',
  component: () => import('@/pages/nested-route/NestedRoutePage.vue'),
  children: [
    {
      path: 'sub-page1',
      component: () => import('@/pages/nested-route/SubPage1.vue'),
    },
    {
      path: 'sub-page2',
      component: () => import('@/pages/nested-route/SubPage2.vue'),
    },
    {
      path: 'sub-page3',
      component: () => import('@/pages/nested-route/SubPage3.vue'),
    },
    {
      path: 'sub-page4',
      component: () => import('@/pages/nested-route/SubPage4.vue'),
    },
    {
      path: 'books',
      component: () => import('@/pages/nested-route/BooksPage.vue'),
    },
  ],
};

export default nestedRoutes;
