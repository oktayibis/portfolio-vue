const mutations = {

  setAllBlog (state, payload) {
    state.blogs = payload
  },
  setSelectedBlog (state, payload) {
    state.selectedBlog = payload
  },
  addBlog (state, payload) {
    state.blogs.push(payload)
  }
}

export default mutations
