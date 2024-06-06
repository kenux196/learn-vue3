<template>
  <q-item class="flex text-h3">
    <q-icon name="logo_dev" />
    <span class="text-h4 text-weight-bold">Quasar Test Page</span>
  </q-item>
  <q-item class="text-body1">{{ hello }}</q-item>
  <div class="flex">
    <q-item class="text-weight-bold">{{ counter }}</q-item>
    <q-btn @click="increaseeCounter">카운트 증가</q-btn>
    <q-btn @click="decreaseeCounter">카운트 감소</q-btn>
    <q-item class="text-weight-bold">{{ doubleCount }}</q-item>
  </div>
  <div v-if="$q.platform.is.chrome" class="text-body1">user agent: chrome</div>
  <div v-else-if="$q.platform.is.safari" class="text-body1">user agent : safari</div>
  <div v-else class="text-body1">This message others</div>
  <div class="m-5">
    <div class="text-h6 text-bold">i18n 테스트</div>
    <span>설정된 언어: {{ selectedLanguage }} / {{ $t('failed') }} / {{ $t('success') }}</span>
    <div class="text-bold">{{ currentLocale }}</div>
    <div class="text-bold">{{ $t('jiwon') }}</div>
  </div>
  <div style="width: 60%; border: 1px; border-style: dashed">
    <div class="text-h1 text-primary">Headlin1</div>
    <div class="text-h2 text-secondary">Headlin2</div>
    <div class="text-h3 text-accent">Headlin3</div>
    <div class="text-h4 text-dark">Headlin4</div>
    <div class="text-h5 text-positive">Headlin5</div>
    <div class="text-h6 text-negative">Headlin6</div>
    <div class="text-subtitle1 text-info">Subtitle1</div>
    <div class="text-subtitle2 text-warning">Subtitle2</div>
    <div class="text-body1 bg-negative text-white">Body1. this is text-body1.</div>
    <div class="text-body2 bg-secondary text-white">Body2. this is text-body2.</div>
    <div class="text-right">text-right</div>
    <div class="text-left">text-left</div>
    <div class="text-center">text-center</div>
    <div class="text-justify">text-justify</div>
    <div class="bg-positive">
      <span class="text-bold">text-bold / </span>
      <span class="text-italic">text-italic / </span>
      <span class="text-strike">text-strike / </span>
      <span class="text-uppercase">text-upppercase / </span>
      <span class="text-lowercase">Text-Lowercase / </span>
      <span class="text-capitalize">text-capitalize / </span>
    </div>
  </div>
  <div>
    <div class="text-h5">Spacing</div>
    <div class="q-mx-auto">margin x auto</div>
    <div class="q-mx-xs">margin x xs</div>
    <div class="q-mx-sm">margin x sm</div>
    <div class="q-mx-md">margin x md</div>
    <div class="q-mx-lg">margin x lg</div>
    <div class="q-mx-xl">margin x xl</div>
  </div>
  <div style="width: 200px; height: 100px; background-color: brown">
    <div class="fit bg-primary text-white text-center">Size : fit -> 영역 전체를 가득 채운다.</div>
  </div>
  <div style="width: 200px; height: 100px; background-color: brown">
    <div class="full-height bg-secondary text-white text-center">Size : full-heigt -> 높이를 가득 체운다.</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import useCounterStore from 'stores/example-store';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const lang = ref($q.lang.isoName);
console.log('platform type:', $q.platform);
console.log('lang: ', $q.lang);

const counter = computed(() => {
  return useCounterStore().counter;
});

const doubleCount = computed(() => {
  return useCounterStore().doubleCount;
});

const selectedLanguage = computed(() => {
  return $q.lang.nativeName;
});

const currentLocale = computed(() => {
  return $q.lang.getLocale();
});

const hello = ref('Hello Quasar!!');

function increaseeCounter() {
  useCounterStore().increment();
}

function decreaseeCounter() {
  useCounterStore().decrement();
}
</script>

<style lang="scss" scoped>
.m-5 {
  margin: 5px;
}
</style>
