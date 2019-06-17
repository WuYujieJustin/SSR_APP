import service from '@/services/service.js'

export const state = () => ({
    "posts": [],
    "post": {}
})


export const mutations = {

    getPosts(state, posts) {
        state.posts = posts
    },
    getPost(state, post) {
        state.post = post
    }
}

export const actions = {

    // getPosts({commit}){
    //         return service.getPosts().then(response=>{
    //             commit('getPosts',response.data)
    //         })
    //     }

    // replace with async function

    async getPosts({ commit }) {
        let res = await service.getPosts()
        commit('getPosts', res.data)
    },

    async getPost({ commit }, id) {
        let res = await service.getPost(id)
        commit('getPost', res.data)
    }

}