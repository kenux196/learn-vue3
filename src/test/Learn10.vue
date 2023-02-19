<script>
import UserName from './UserName.vue';

export default {
  components: { UserName },
  data() {
    return {
      first: 'John',
      last: 'Doe',
    };
  },
};
</script>

<template>
  <h1>{{ first }} {{ last }}</h1>
  <UserName v-model:first-name="first" v-model:last-name="last" />
</template>
