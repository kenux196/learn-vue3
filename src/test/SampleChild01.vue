<script setup>
const props = defineProps({
  message: String,
  size: Number,
  status: {
    type: String,
    validator(value, props) {
      return ['normal', 'warning', 'error'].includes(value);
    },
  },
  isAuthenticated: {
    type: Boolean,
    default: false,
  },
});
console.log(props);
</script>
<template>
  <h2>
    {{ message }} {{ size }} / status: {{ status }} / 인증?
    {{ isAuthenticated }}
  </h2>
</template>
