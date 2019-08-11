import Vue from 'vue'
import Vuex from 'vuex'
import editorModule from '@/modules/editorModule'
import consoleModule from '@/modules/consoleModule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    editor: editorModule,
    console: consoleModule
  }
})
