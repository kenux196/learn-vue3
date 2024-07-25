<template>
  <q-layout view="hHh Lpr fFf">
    <Header @toggle-menu="toggleMainMenuDrawer" />
    <MainMenu v-model="menuOpen" show-if-above bordered />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/layouts/HeaderLayout.vue';
import Footer from '@/layouts/FooterLayout.vue';
import MainMenu from '@/layouts/MainMenuLayout.vue';

const menuOpen = ref(true);

function toggleMainMenuDrawer() {
  menuOpen.value = !menuOpen.value;
  console.log(menuOpen.value);
}
</script>
