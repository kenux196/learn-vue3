<template>
  <q-footer elevated class="bg-grey-8 text-white row q-py-sm">
    <div class="col-5 q-ml-sm">{{ now }}</div>
    <div class="col text-center">
      Released under <span class="text-weight-bold">MIT License</span>.
      <div>Copyright @ 2024 kenux.yun</div>
    </div>
    <div class="col">
      <language-switcher></language-switcher>
    </div>
    <div class="col-1 q-mr-sm">Quasar v{{ $q.version }}</div>
  </q-footer>
</template>
<script setup>
import { ref } from 'vue';
import LanguageSwitcher from 'components/LanguageSwitcher.vue';

const now = ref(new Date().toLocaleString());
</script>
