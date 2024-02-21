<script setup>
import { computed, reactive, ref } from 'vue';
import WelcomeMessage from '../components/WelcomeMessage.vue';

const today = new Date();
const showMessage = ref(false);
const someUrl = ref('https://www.naver.com');
const count = ref(0);

const person = {
  name: 'kenux',
  age: 0,
};
const state = reactive({ number: 0 });
const personProxy = reactive(person);
// const primitive = reactive(1);
// reactive는 기본형 미지원. only 객체, 배열, 컬렉션 타입만 가능
// 이런 저런 이유로 reactive 보다는 ref 사용을 권장함.

const author = reactive({
  name: '밥 프록터',
  books: ['book1', 'book2', 'book3'],
});

// 반응형 데이터를 포함하는 복잡한 논리의 경우, computed(계산된 속성)를 사용하는 것이 좋다.
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'yes' : 'no';
});

function calculateBookMessage() {
  return author.books.length > 0 ? 'yes' : 'no';
}

const firstName = ref('John');
const lastName = ref('Doe');
const fullName = computed({
  //getter
  get() {
    return firstName.value + ' ' + lastName.value;
  },
  // setter : 계산된 속성의 값을 변경하기 위해 setter 사용
  // 그러나 권장하지 않음. 계산된 속성은 오직 getter로만 사용하도록 코딩할 것.
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ');
  },
});

function changeName() {
  fullName.value = 'kenux yun';
}

function showHiddenMessage() {
  console.log('링크를 눌렀네요~~~');
  showMessage.value = !showMessage.value;
  count.value++;
  person.age++;
}
</script>

<template>
  <main class="container">
    <div class="grid">
      <h1 class="page-title">Vue3 Playground</h1>
      <p>
        KOREA - {{ today.toLocaleString() }}<br />
        UTC - {{ today.toUTCString() }}
      </p>
    </div>
    <WelcomeMessage />
    <a v-on:click="showHiddenMessage()">여기를 누르면? {{ count }}</a>
    <span style="margin-left: 10px" v-if="showMessage">
      오늘은 기분이 어떤가요?</span
    >
    <div>
      <a v-bind:href="someUrl">네이버 : {{ someUrl }}</a>
    </div>
    <button @click="state.number++">대기번호(+): {{ state.number }}</button>
    <button @click="state.number--">대기번호(-): {{ state.number }}</button>
    <button @click="personProxy.age++">
      {{ personProxy.name }}: {{ personProxy.age }}
    </button>
    <div>
      <p>
        <!-- 계산된 속성은 캐싱이 되어서 값 변경 시에만 재평가 된다. -->
        {{ author.name }}은(는) 집필한 책이 있다: {{ publishedBooksMessage }}
      </p>
      <p>
        <!-- 메서드 호출 방식은 캐싱되지 않아서, 리렌더링 발생할 때마다 함수가 호출된다.
          성능적으로 손해가 될 수도 있다.
         -->
        {{ author.name }}은(는) 집필한 책이 있다: {{ calculateBookMessage() }}
      </p>
    </div>
    <div>
      <p>{{ fullName }}</p>
      <button @click="changeName">change name</button>
    </div>
  </main>
</template>

<style scoped>
.page-title {
  color: gray;
}
</style>
