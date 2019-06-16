<template>
  <div>
    <!-- narbar layout -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Expand at md</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search">
        </form>
      </div>
    </nav>
    <div class="container">
      <Postcard v-for="post in posts" :key="post.id" :post="post"></Postcard>
    </div>

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
  data(){
    return{
      posts:[]
  }},
  created() {
    // axios.get(' http://localhost:4000/posts',(res)=>{
    //  console.log('123')
    // //   this.posts = res.data
    // // })
    // console.log(axios)
    axios.get('http://localhost:4000/posts')
      .then((res)=>{
        this.posts = res.data
      })
    
  },
  methods: {
    getPost() {
      this.$store.dispatch("post/newPost");
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
