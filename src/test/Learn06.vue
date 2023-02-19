<script>
export default {
  data() {
    return {
      question: '',
      answer: '질문에는 일반적으로 물음표가 포함됩니다.',
    };
  },
  watch: {
    // 질문이 변경될 때마다 이 함수가 실행됩니다.
    question(newQuestion, oldQuestion) {
      console.log('watch-question');
      if (newQuestion.includes('?')) {
        console.log('watch-question has "?"');
        this.getAnswer();
      }
    },
  },
  methods: {
    async getAnswer() {
      this.answer = 'thinking...';
      try {
        const res = await fetch('https://yesno.wtf/api');
        this.answer = (await res.json()).answer === 'yes' ? '네' : '아니오';
      } catch (error) {
        this.answer = '에러! API에 연결할 수 없습니다. ' + error;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>감시자</h1>
    <p>
      예/아니오 질문:
      <span>
        <input v-model="question" />
      </span>
    </p>
    <p>대답: {{ answer }}</p>
  </div>
</template>
