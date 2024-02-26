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
defineEmits(['increaseBy']);
const model = defineModel('greeting');
const firstName = defineModel('firstName');
const lastName = defineModel('lastName');
console.log(props);
</script>
<template>
  <h2>
    {{ props.message }} {{ props.size }} / status: {{ props.status }} / 인증?
    {{ props.isAuthenticated }}
  </h2>
  <button @click="$emit('increaseBy', 1)">IncreaseBy 1</button>
  <span>My input: </span><input type="text" v-model="model" />
  <div>
    이름: <input type="text" v-model="firstName" /> 성:
    <input type="text" v-model="lastName" />
  </div>
</template>
