<template>
  <q-layout view="hHh Lpr fFf">
    <Header @toggle-menu="toggleLeftDrawer" />
    <Menu v-model="menuOpen" show-if-above bordered />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import Header from 'src/layouts/HeaderLayout.vue';
import Footer from 'layouts/FooterLayout.vue';
import Menu from 'layouts/LeftMenu.vue';

const menuOpen = ref(true);

function toggleLeftDrawer() {
  menuOpen.value = !menuOpen.value;
  console.log(menuOpen.value);
}
</script>
