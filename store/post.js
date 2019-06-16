import axios from 'axios';

export const state = () => ({
    "posts": []
})


export const mutations = {
    newPost(state) {
        
    }
}

export const actions = {
    // async getPost(state) {
    //     // const res = await axios.get(`http://localhost:4000/posts`);
    //     const res = await axios.get('http://localhost:4000/posts');
    //     state.posts = res.data;
    newPost({ commit }) {
        setTimeout(function () {
            console.log("success")
            commit('newPost')
        }, 3000)
    },
    getPosts({commit}){
        axios.get('http://localhost:4000/posts',(res)=>{
            console.log(res.data)
            commit('getPosts')
        })
    }
}