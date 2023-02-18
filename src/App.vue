<script>
import { nextTick, reactive } from 'vue';

export default {
  // data로 묶은것이 반응형이다.
  data() {
    return {
      count: 1,
      msg: 'Hello World',
      someObject: {},
      author: {
        name: '윤상규',
        books: [
          '200자 챌린지만 해도 글쓰기 잘한다.',
          '내가 중심이 되면 부는 따라온다.',
          '멈추는 순간 보이는 것들',
        ],
      },
    };
  },
  created() {
    console.log('created()');
    this.msg = 'CREATED';
  },
  mounted() {
    console.log('mounted(): count = ' + this.count);
    this.count = 2;
    this.msg = 'Hello World!!!';

    const newObject = {};
    this.someObject = newObject;

    console.log(newObject === this.someObject); // false. JavaScript Proxy 객체
  },
  computed: {
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      console.log('computed - publishedBooksMessage');
      return this.author.books.length > 0 ? 'Yes' : 'No';
    },
  },
  methods: {
    increamentCount() {
      this.count++;
      if (this.count % 2 == 0) {
        this.msg = 'Hello World!';
      } else {
        this.msg = '안녕하세요!!!';
      }
      console.log('반응형 데이터 값을 변경하였다.');
      nextTick(() => {
        console.log('업데이트된 DOM에 접근 가능하다.');
      });
    },
    calcualteBooksMessage() {
      console.log('method: calcualteBooksMessage()');
      return this.author.books.length > 0 ? 'Yes' : 'No';
    },
  },
  setup() {
    const state = reactive({ name: 'kenux' });

    function changeName() {
      state.name = 'jiwon';
    }

    return {
      state,
      changeName,
    };
  },
};
</script>

<template>
  <main class="container">
    <h1>{{ msg }}</h1>
    <p>Count is: {{ count }}</p>
    <button @click="increamentCount">click me~!</button>
    <div>{{ state.name }}</div>
    <button @click="changeName">changeName</button>
    <p>
      책을 가지고 있다: <span>{{ publishedBooksMessage }}</span>
    </p>
    <p>
      책을 가지고 있다: <span>{{ calcualteBooksMessage() }}</span>
    </p>
  </main>
</template>
