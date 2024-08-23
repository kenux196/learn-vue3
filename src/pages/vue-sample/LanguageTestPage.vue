<template>
  <h3>다국어 테스트</h3>
  <p>{{ $t('hello', { name: 'kenux' }) }}</p>
  <p>{{ greeting() }}</p>
  <p>{{ $t('book', ['투자의 정석', '유목민']) }}</p>
  <p>{{ $t('email', { account: 'kenux', domain: 'test.com' }) }}</p>
  <p>{{ $t('linked') }}</p>
  <p>{{ $t('car', 1) }}</p>
  <p>{{ $t('car', 2) }}</p>
  <p>{{ $t('apple', 0) }}</p>
  <p>{{ $t('apple', 1) }}</p>
  <p>{{ $t('apple', 10, { count: 10 }) }}</p>
  <p>{{ $d(new Date(), 'short') }}</p>
  <p>{{ $d(new Date(), 'long') }}</p>
  <p>{{ $d(new Date(), 'long_h_12') }}</p>
  <p>{{ $d(new Date(), 'long_h_24') }}</p>
  <p>{{ $d('2011-10-10T14:48:00', 'long_h_12') }}</p>
  <p>{{ $n(10000, 'currency') }}</p>
  <p>{{ $n(10000, 'currency') }}</p>
  <p>{{ $n(10000, 'currency', { useGrouping: false }) }}</p>
  <p>{{ $n(987654321, 'currency', { notation: 'compact' }) }}</p>
  <p>{{ $n(0.99123, 'percent') }}</p>
  <p>{{ $n(0.99123, 'percent', { minimumFractionDigits: 2 }) }}</p>
  <p>{{ $n(12.11612345, 'decimal') }}</p>
  <p>{{ $n(12145281111, 'decimal') }}</p>

  <h3>Day.js 테스트</h3>
  <p>현재 시간(UTC): {{ today }}</p>
  <p>한국어 12H Asia/Seoul: {{ displayDateTime('12h', today, 'Asia/Seoul') }}</p>
  <p>영어 12H Asia/Seoul: {{ displayDateTime('12h', today, 'Asia/Seoul') }}</p>
  <p>24H Asia/Seoul: {{ displayDateTime('24h', today, 'Asia/Seoul') }}</p>

  <p>한국어 12H Europe/London: {{ displayDateTime('12h', today, 'Europe/London') }}</p>
  <p>영어 12H Europe/London: {{ displayDateTime('12h', today, 'Europe/London') }}</p>
  <p>24H Europe/London: {{ displayDateTime('24h', today, 'Europe/London') }}</p>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import useAppStore from '@/stores/appStore';
import { Builder } from 'builder-pattern';
import TestClass from '@/utils/TestClass';
const { t } = useI18n();
const appStore = useAppStore();

dayjs.extend(utc);
dayjs.extend(timezone);

const today = ref(new Date().toISOString());

function greeting() {
  return t('hello', { name: 'kenux' });
}

const displayDateTime = (type, date, timezone) => {
  if (type === '12h') {
    return dayjs(date).tz(timezone).locale(appStore.language).format('YYYY-MM-DD A h:mm');
  }
  return dayjs(date).tz(timezone).locale(appStore.language).format('YYYY-MM-DD HH:mm');
};

onMounted(() => {
  const test = Builder(TestClass).name('kenux').age(20).address('대구').build();
  console.log('🚀 ~ onMounted ~ 1 test:', test);
  test.name = 'abc';
  console.log('🚀 ~ onMounted ~ 2 test:', test);
});
</script>

<style lang="scss" scoped></style>
