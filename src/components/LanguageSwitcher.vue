<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    dark
    dense
    borderless
    emit-value
    map-options
    options-dense
    options-dark
    style="max-width: 150px; margin: auto"
  >
    <template v-slot:before>
      <q-icon name="language" />
    </template>
  </q-select>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({
  useScope: 'global',
});

const localeOptions = [
  {
    value: 'ko-KR',
    label: '한국어',
  },
  {
    value: 'en-US',
    label: 'English',
  },
];
</script>

<style lang="scss" scoped></style>
