<script>
import CustomInput from './CustomInput.vue';

export default {
  components: { CustomInput },
  data() {
    return {
      message: 'hello',
    };
  },
};
</script>

<template>
  <!-- <CustomInput v-model="message" /> {{ message }} -->
  <CustomInput v-model:title="bookTitle" />
</template>
