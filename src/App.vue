<script>
import { ref, reactive, toRefs, toRef, computed } from 'vue';

export default {
  props: {
    title: 'Vue3 배웁시다.',
  },
  setup(props, context) {
    const count = ref(1);
    const plusOne = computed(() => count.value + 1);
    console.log(plusOne.value);
    //plusOne.value++; // error 읽기 속성에 직접 액세스...

    const plusTwo = computed({
      get: () => count.value + 2,
      set: (val) => {
        count.value = val - 2;
      },
    });
    plusTwo.value = 2;
    console.log(plusTwo.value);

    // 템플릿 및 기타 옵션 API 훅에 노출
    return {
      count,
    };
  },

  mounted() {
    console.log(this.count);
  },
};
</script>
<template>
  <main class="container">
    <button @click="count++">{{ count }}</button>
  </main>
</template>
