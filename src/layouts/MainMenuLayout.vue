<template>
  <q-drawer>
    <q-list>
      <q-item-label header class="text-weight-bolder text-h5">
        <q-icon name="menu"></q-icon>
        Menu
      </q-item-label>
      <MainMenuItem v-for="menu in mainMenus" :key="menu.title" v-bind="menu" />
    </q-list>
  </q-drawer>
</template>

<script setup>
import MainMenuItem from './components/MainMenuItem.vue';
import { ref } from 'vue';

const mainMenus = ref([
  {
    title: 'menu.main.dashboard',
    icon: 'dashboard',
    link: '/dashboard',
  },
  {
    title: 'menu.main.posts',
    icon: 'article',
    link: '/posts',
  },
  {
    title: 'menu.main.settings',
    icon: 'settings',
    link: '/settings',
  },
  {
    title: 'menu.main.nested-routing',
    icon: 'auto_awesome_mosaic',
    link: '/nested-route',
  },
  {
    title: 'menu.main.quasar',
    icon: 'memory',
    link: '/quasar',
  },
  {
    title: 'menu.main.charts',
    icon: 'bar_chart',
    link: '/chart-js',
  },
  {
    title: 'menu.main.vue',
    icon: 'laptop',
    link: '/vue',
  },
  {
    title: 'menu.main.gugudan',
    icon: 'toys',
    link: '/gugudan',
  },
  {
    title: 'menu.main.about',
    icon: 'lightbulb',
    link: '/about',
  },
]);
</script>
