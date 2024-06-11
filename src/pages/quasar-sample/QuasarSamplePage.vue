<template>
  <div class="q-pa-md">
    <div class="q-guttoer-y-md">
      <q-tabs v-model="tab" inline-label align="left" class="bg-primary text-white shadow-2">
        <q-route-tab name="basic" icon="dashboard_customize" label="기본" to="/quasar/basic" />
        <q-route-tab name="cards" icon="dashboard_customize" label="카드" to="/quasar/cards" />
      </q-tabs>
    </div>
    <RouterView class="q-pa-md" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('basic');
</script>

<style lang="scss" scoped></style>
