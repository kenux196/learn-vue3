<script setup>
import { inject } from 'vue';

const message = inject('message');
const goodbye = inject('goodbye');
</script>
<template>
  <p>손자에게 전하는 메시지: {{ message }}</p>
  <p>{{ goodbye }}</p>
</template>
