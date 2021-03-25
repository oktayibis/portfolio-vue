const mutations = {
  setProjects (state, payload) {
    state.projects = payload
  },
  setSelectedProject (state, payload) {
    state.selectedProject = payload
  }
}

export default mutations
