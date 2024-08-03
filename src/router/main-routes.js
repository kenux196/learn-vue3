import chartjsRoutes from './chartjs-routes';
import nestedRoutes from './nested-routes';
import quasrRoutes from './quasar-routes';
import vueRoutes from './vue-routes';

const maintRoutes = [
  { path: '/', component: () => import('@/pages/LandingPage.vue') },
  { path: '/learn-vue3', component: () => import('@/pages/LandingPage.vue') },
  {
    path: '/posts',
    component: () => import('@/pages/PostsPage.vue'),
  },
  { path: '/dashboard', component: () => import('@/pages/DashboardPage.vue') },
  {
    path: '/settings',
    component: () => import('@/pages/SettingsPage.vue'),
  },
  {
    path: '/gugudan',
    component: () => import('@/pages/GugudanPage.vue'),
  },
  {
    path: '/color',
    component: () => import('@/pages/ColorView.vue'),
  },
  {
    path: '/json-test',
    component: () => import('@/pages/JsonLoadView.vue'),
  },
  nestedRoutes,
  quasrRoutes,
  chartjsRoutes,
  vueRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
];

export default maintRoutes;
