<script>
export default {
  setup() {
    console.log('setup');
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('컴포넌트가 마운트되었습니다.');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  data() {
    return {
      greetingMsg: 'Hello World',
    };
  },
  methods: {
    sayGoodBye() {
      this.greetingMsg = 'Good Bye!';
    },
  },
};
</script>

<template>
  <div class="container">
    <p>{{ greetingMsg }}</p>
    <button @click="sayGoodBye">say</button>
  </div>
</template>
