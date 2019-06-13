<template>
  <div class="container">
    <Postcard v-for="post in posts" :key="post.id" :post="post"></Postcard>
    <p>{{posts[0].id}}</p>
    <button @click="getPost">add </button>
  </div>
</template>

<script>
import Postcard from "~/components/Postcard.vue";
import axios from "axios";
export default {
  components: {
    Postcard
  },
  computed: {
    posts() {
      return this.$store.state.post.posts;
    }
  },
  methods: {
    getPost(){
      this.$store.dispatch('post/getPost');
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
