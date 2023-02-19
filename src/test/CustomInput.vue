<script>
export default {
  props: ['modelValue', 'title'],
  emits: ['update:modelValue', 'update:title'],
  computed: {
    value: {
      get() {
        console.log('get value:' + this.modelValue);
        return this.modelValue;
      },
      set(value) {
        console.log('value = ' + value + ' will emit');
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<template>
  <!-- <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  /> -->
  <input v-model="value" />
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
