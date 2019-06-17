<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img src="#" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">{{post.content}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "What you need to know about " + this.post.title
        }
      ]
    };
  },
  computed: mapState({
    post: state => state.post.post
  }),
  async fetch({ store, error, params }) {
    try {
      await store.dispatch("post/getPost", params.id);
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch event #" + params.id
      });
    }
  }
};
</script>