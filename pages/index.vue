<template>
  <div>
    <!-- narbar layout -->
    <NavBar></NavBar>
    <div class="container">
      <Postcard v-for="post in posts" :key="post.id" :post="post"></Postcard>
    </div>
  </div>
</template>

<script>
import Postcard from "~/components/Postcard.vue";
import NavBar from "~/components/NavBar.vue";
import { mapState } from "vuex";

export default {
  components: {
    Postcard,
    NavBar
  },
  head() {
    return {
      title: "Home page"
    };
  },
  computed: mapState({
    posts: state => state.post.posts
  }),
  // async fetch data
  async fetch({ store, error }) {
    try {
      await store.dispatch('post/getPosts')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
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
