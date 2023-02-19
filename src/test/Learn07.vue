<script>
export default {
  data() {
    return {
      list: [1, 2, 3],
    };
  },
  mounted() {
    this.$refs.input.focus();
    console.log(this.$refs.items);
  },
};
</script>

<template>
  <div class="container">
    <h1>템플릿 참조</h1>
    <input ref="input" />
    <ul>
      <li v-for="item in list" ref="items">{{ item }}</li>
    </ul>
  </div>
</template>
