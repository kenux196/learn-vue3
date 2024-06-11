<template>
  <q-drawer>
    <q-list>
      <q-item-label header class="text-weight-bolder text-h5">
        <q-icon name="menu"></q-icon>
        Menu
      </q-item-label>
      <menu-item v-for="link in linksList" :key="link.title" v-bind="link"></menu-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import MenuItem from '@/components/MenuItem.vue';

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
    icon: 'credit_card',
    link: '/nested-route',
  },
  {
    title: 'Quasar Samples',
    icon: 'lightbulb',
    link: '/quasar',
  },
  {
    title: 'Chart.js Test',
    icon: 'bar_chart',
    link: '/chart-js',
  },
  {
    title: 'Vue3 Test',
    icon: '',
    link: '/vue',
  },
  {
    title: '구구단 테스트',
    icon: 'bar_chart',
    link: '/gugudan',
  },
];
</script>
