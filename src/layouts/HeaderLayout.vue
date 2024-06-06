<template>
  <q-header class="bg-grey-9">
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="$emit('toggle-menu')" />
      <q-toolbar-title> Vue3 & Quasar App </q-toolbar-title>
      <q-toggle
        v-model="darkMode"
        checked-icon="dark_mode"
        color="grey-10"
        unchecked-icon="light_mode"
        v-on:update:model-value="toggleDarkMode"
      ></q-toggle>
      <q-btn flat>
        <q-icon name="logout"></q-icon>
      </q-btn>
      <q-avatar color="primary" text-color="white">S</q-avatar>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const darkMode = ref(false);

onMounted(() => {
  darkMode.value = new Date().getHours() >= 18 ? true : false;
  toggleDarkMode();
});

function toggleDarkMode() {
  $q.dark.set(darkMode.value);
}
</script>
