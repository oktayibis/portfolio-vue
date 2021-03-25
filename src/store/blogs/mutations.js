const mutations = {

  setAllBlog (state, payload) {
    state.blogs = payload
  },
  setSelectedBlog (state, payload) {
    state.selectedBlog = payload
  }
}

export default mutations
