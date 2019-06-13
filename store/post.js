import axios from 'axios';

export const state = () => ({
    "posts": [{
        "id": 1,
        "title": "test title",
        "content": "test content"
    }]
})


export const mutations = {
    getPost(state) {
        state.posts[0].id++
    }
}

export const actions = {
    // async getPost(state) {
    //     // const res = await axios.get(`http://localhost:4000/posts`);
    //     // state.posts = res.data;
    //     const res = await axios.get('http://localhost:4000/posts');
    //     state.posts = res.data;
    getPost({ commit }) {
        setTimeout(function () {
            commit(getPost), 3000
        })
    }
}