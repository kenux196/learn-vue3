<template>
  <q-drawer>
    <q-list>
      <q-item-label header class="text-weight-bolder text-h5">
        <q-icon name="menu"></q-icon>
        Menu
      </q-item-label>
      <MainMenuItem v-for="link in linksList" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import MainMenuItem from './components/MainMenuItem.vue';

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard',
  },
  {
    title: 'Posts',
    icon: 'article',
    link: '/posts',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings',
  },
  {
    title: '중첩된 라우팅 연습',
    icon: 'auto_awesome_mosaic',
    link: '/nested-route',
  },
  {
    title: 'Quasar Samples',
    icon: 'memory',
    link: '/quasar',
  },
  {
    title: 'Chart.js Test',
    icon: 'bar_chart',
    link: '/chart-js',
  },
  {
    title: 'Vue3 Test',
    icon: 'laptop',
    link: '/vue',
  },
  {
    title: '구구단 테스트',
    icon: 'toys',
    link: '/gugudan',
  },
];
</script>
