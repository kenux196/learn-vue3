<template>
  <h3>다국어 테스트</h3>
  <p>{{ $t('hello', { name: 'kenux' }) }}</p>
  <p>{{ greeting() }}</p>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

function greeting() {
  return t('hello', { name: 'kenux' });
}
</script>

<style lang="scss" scoped></style>
