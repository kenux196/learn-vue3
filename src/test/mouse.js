import { ref, onMounted, onUnmounted } from 'vue';

// 관례상, 컴포저블 함수 이름은 'use'로 시작한다.
export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });
  onUnmounted(() => {
    window.addEventListener('mousemove', update);
  });

  return { x, y };
}
