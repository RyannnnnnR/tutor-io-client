export default {
    state: {
        valueq: 'my value'
    },
    getters: {
        valueq: state => {
            return state.valueq;
        }
    },
    mutations: {
        updateValueq(state, payload) {
            state.valueq = payload;
        }
    },
    actions: {
        updateValueq({ commit }, payload) {
            commit('updateValueq', payload);
        }
    }
};