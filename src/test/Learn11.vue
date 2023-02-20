<template>
  <h1>Composition API</h1>
  <div class="grid">
    <div></div>
    <button @click="decrease">Decrease</button>
    <p style="text-align: center">{{ countWithUnit }}</p>
    <button @click="increase">Increase</button>
    <div></div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

const useCount = () => {
  const count = ref(0);

  const countWithUnit = computed(() => count.value + ' 입니다!');
  const increase = () => ++count.value;
  const decrease = () => --count.value;

  return { countWithUnit, increase, decrease };
};

export default {
  setup() {
    const { countWithUnit, increase, decrease } = useCount();

    return {
      countWithUnit,
      increase,
      decrease,
    };
  },
};
</script>
