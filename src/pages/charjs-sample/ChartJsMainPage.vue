<template>
  <div class="q-pa-md">
    <div class="q-guttoer-y-md">
      <q-tabs v-model="tab" inline-label align="left" class="bg-primary text-white shadow-2">
        <q-route-tab name="chart1" icon="analytics" label="차트1" to="/chart-js/chart1" />
        <q-route-tab name="chart2" icon="trending_up" label="차트2" to="/chart-js/chart2" />
      </q-tabs>
    </div>
    <RouterView class="q-px-md" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('chart1');
</script>

<style lang="scss" scoped></style>
