export default {
  state: {
    value: 'Console ready. Hit run to execute some code!'
  },
  getters: {
    value: state => {
      return state.value
    }
  },
  mutations: {
    updateValue (state, payload) {
      state.value = payload
    }
  },
  actions: {
    updateValue ({ commit }, payload) {
      commit('updateValue', payload)
    }
  }
}
