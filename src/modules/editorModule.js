import io from 'socket.io-client'
import { getConnection } from '../utils/socketHandler'
var socket = getConnection()
export default {
  namespaced: true,
  state: {
    code: 'function hello() {\n\xa0\xa0console.log(\"Hello, World!\");\n}\nhello();',
    languages: ['JavaScript', 'Python', 'Java'],
    selectedLanguage: 'JavaScript'
  },
  getters: {
    code (state) {
      return state.code
    }
  },
  mutations: {
    JOIN_ROOM (state, payload) {

    },
    UPDATE_EDITOR (state, payload) {
      socket.emit('update', payload)
      state.code = payload
    },
    UPDATE_SELECTED_LANGUAGE (state, payload) {
      state.selectedLanguage = payload
    },
    SYNC_EDITOR (state, p) {

    }
  },
  actions: {
    joinRoom ({ commit }, payload) {
      commit('updateValueq', payload)
    },
    UPDATE_EDITOR ({ commit }, payload) {
      commit('UPDATE_EDITOR', payload)
    },
    UPDATE_SELECTED_LANGUAGE ({ commit }, payload) {
      commit('UPDATE_SELECTED_LANGUAGE', payload)
    }
    // SYNC_EDITOR
  }
}
