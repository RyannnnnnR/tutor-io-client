export default {
    state: {
        value: '<p>Hit <span class="italic font-bold text-purple-400">Run</span> to execute some code :)</p>'
    },
    getters: {
        value: state => {
            return state.value
        }
    },
    mutations: {
        updateValue(state, payload) {
            state.value = payload
        }
    },
    actions: {
        updateValue({ commit }, payload) {
            commit('updateValue', payload)
        }
    }
}