<template>
  <table>
    <thead>
      <th>#</th>
      <th>title</th>
    </thead>
    <tbody>
      <tr v-for="post in posts">
        <td>
          <a @click="showPostContent(post.id)">{{ post.id }}</a>
        </td>
        <td>
          <a>
            {{ post.title }}
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const url = 'http://jsonplaceholder.typicode.com/posts';

const posts = ref('');
const post = ref('');

async function fetchData() {
  const res = await fetch(url);
  posts.value = await res.json();
}

const fetchContent = async (id) => {
  fetch(url + '/' + id)
    .then((res) => {
      console.log(res.status);
      if (!res.ok) {
        throw new Error(`오류 발생: ${res.status}`);
      }
      return res.json();
    })
    .then((json) => {
      post.value = json;
      console.log(post.value);
      alert(post.value.body);
    });
};

function showPostContent(id) {
  fetchContent(id);
}

onMounted(() => {
  fetchData();
});
</script>
