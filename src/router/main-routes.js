import chartjsRoutes from './chartjs-routes';
import libsRoutes from './libs-routes';
import nestedRoutes from './nested-routes';
import quasrRoutes from './quasar-routes';
import vueRoutes from './vue-routes';

const mainRoutes = [
  { path: '/', component: () => import('@/pages/DashboardPage.vue') },
  { path: '/learn-vue3', component: () => import('@/pages/DashboardPage.vue') },
  { path: '/dashboard', component: () => import('@/pages/DashboardPage.vue') },
  {
    path: '/posts',
    component: () => import('@/pages/PostsPage.vue'),
  },
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
  {
    path: '/about',
    component: () => import('@/pages/AboutPage.vue'),
  },
  nestedRoutes,
  quasrRoutes,
  chartjsRoutes,
  vueRoutes,
  libsRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
];

export default mainRoutes;
