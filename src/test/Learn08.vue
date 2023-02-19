<script>
import BlogPost from './BlogPost.vue';
import ButtonCounter from './ButtonCounter.vue';
import AlertBox from './AlertBox.vue';

export default {
  components: { ButtonCounter, BlogPost, AlertBox },
  data() {
    return {
      posts: [
        { id: 1, title: 'I may be wrong' },
        { id: 2, title: 'Spring Boot 3.0' },
        { id: 3, title: 'Vue 3.0 + Vite' },
      ],
      postFontSize: 1,
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>Component</h1>
    <p>
      아래에 자식 컴포넌트가 있다. <br />
      각 컴포넌트는 독립적인 count를 유지한다. 컴포넌트를 사용할 때마다 해당
      컴포넌트의 새 인스턴스가 생성되기 때문이다.
    </p>
    <div class="grid">
      <ButtonCounter />
      <ButtonCounter />
      <ButtonCounter />
      <button-counter></button-counter>
    </div>
    <p>"props"는 컴포넌트에 등록할 수 있는 사용자 정의 속성이다.</p>
    <!-- <BlogPost title="Vue와 함께한 나의 여행" /> -->
    <!-- <BlogPost title="I MAY BE WRONG" /> -->
    <!-- <BlogPost title="JPA Book" /> -->
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="postFontSize += 0.1"
      />
    </div>
    <AlertBox> 나쁜 일이 일어났습니다. </AlertBox>
  </div>
</template>
