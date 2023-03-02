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
import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/posts';

const posts = ref('');
const post = ref('');

async function fetchData() {
  axios.get(url).then((res) => (posts.value = res.data));
}

const showPostContent = async (id) => {
  axios.get(url + '/' + id).then((res) => {
    post.value = res.data;
    alert(post.value.body);
  });
};

onMounted(() => {
  fetchData();
});
</script>
