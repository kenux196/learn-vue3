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
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

function greeting() {
  return t('hello', { name: 'kenux' });
}
</script>

<style lang="scss" scoped></style>
