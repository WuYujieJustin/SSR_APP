<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{post.title}}</h6>
      <p class="card-text">{{post.content}}</p>
      <nuxt-link :to="'/postDetail/' + post.id">Card link</nuxt-link>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>

</template>

<script>
export default {
  name: "Postcard",
  props: {
    post: Object
  }
};
</script>


