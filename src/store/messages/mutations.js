const mutations = {
  setMessages (state, payload) {
    state.messages = payload
  },
  addMessage (state, payload) {
    state.message.push(payload)
  }
}

export default mutations
