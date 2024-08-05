<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    @update:model-value="saveLocaleAndLanguage"
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
import useAppStore from '@/stores/appStore';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
// const { locale } = useI18n({
//   useScope: 'global',
// });
const { availableLocales, locale } = useI18n();
const appStore = useAppStore();

console.log('가능한 로케일 : ' + availableLocales);
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

function saveLocaleAndLanguage() {
  appStore.locale = locale.value;
  console.log('🚀 ~ save ~ locale.value:', locale.value);
  appStore.language = locale.value.split('-')[0];
}

onMounted(() => {
  locale.value = appStore.locale;
});
</script>

<style lang="scss" scoped></style>
