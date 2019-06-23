import io from 'socket.io-client';
import { getConnection } from '../utils/socketHandler'
var socket = getConnection();
export default {
    state: {
        code: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
            '\n'
        )
    },
    getters: {
        code: state => {
            return state.code;
        }
    },
    mutations: {
        JOIN_ROOM(state, payload) {

        },
        UPDATE_EDITOR(state, payload) {
            socket.emit('update', payload)
            state.code = payload;
        }
    },
    actions: {
        joinRoom({ commit }, payload) {
            commit('updateValueq', payload);
        },
        UPDATE_EDITOR({ commit }, payload) {
            commit('UPDATE_EDITOR', payload);
        },
    }
};