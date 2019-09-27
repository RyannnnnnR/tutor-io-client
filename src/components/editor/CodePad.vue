<template>
  <div id="codepad">
    <div id="code-action-bar" class="flex content-center justify-between flex-wrap bg-charcoal-dark text-base h-12 py-3">
    <button
      class="bg-gray-700 hover:bg-secondary-blue text-white px-6 py-1 rounded  mx-3"
    >
    <div class="flex items-center">
      <span>Run</span>
      <font-awesome-icon icon="play" class="text-gray-500 ml-3 text-xs"/>
    </div>
    </button>
    <div class="dropdown relative mr-2">
      <button
        class="bg-transparent hover:bg-secondary-blue text-white rounded px-4 py-1"
        @click="toggleDropdown"
      >
      <div class="flex items-center">
        <p>{{selectedLanguage}}</p>
        <font-awesome-icon icon="chevron-down" class="ml-2 text-gray-500"/>
      </div>
      </button>
      <div class="dropdown-list text-center shadow-md z-50 text-white absolute mt-4" v-show="isDropdownShown" >
      <ul class=" bg-charcoal-light rounded-sm">
        <li class="p-1" v-for="language in languages" v-bind:key="language" @click="changeLanguage(language)">{{language}}</li>
      </ul>
    </div>
    </div>
  </div>
  <div id="code-area">
    <div id="editor" class="h-full"></div>
  </div>
  </div>
</template>

<script>

import CodeMirror from 'codemirror'
import 'imports-loader?tern=tern!codemirror/addon/tern/tern'
// import 'tern/node_modules/acorn/dist/acorn'
// import 'codemirror/addon/edit/matchbrackets'
import 'tern/doc/demo/polyfill'
import 'tern/lib/signal'
import 'tern/lib/def'
import 'tern/lib/comment'
import 'tern/lib/infer'
import 'tern/plugin/doc_comment'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'
import 'codemirror/mode/clike/clike'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/dialog/dialog'
import { getConnection } from '@/utils/socketHandler'
import ecma from 'tern/defs/ecmascript.json'
import { mapState } from 'vuex'
import languageRepo from '@/utils/languageRepository'

export default {
  name: 'codepad',
  data () {
    return {
      current: '',
      socket: getConnection(),
      isDropdownShown: false
    }
  },
  computed: mapState('editor', [
    'code',
    'selectedLanguage',
    'languages'
  ]),
  mounted () {
    window.editor = CodeMirror(document.getElementById('editor'), {
      mode: languageRepo[this.selectedLanguage.toLowerCase()].mode,
      value: languageRepo[this.selectedLanguage.toLowerCase()].code,
      lineNumbers: true,
      theme: 'light-table'

    })
    window.server = new CodeMirror.TernServer({ defs: [ecma] })
    if (window.server) {
      window.editor.setOption('extraKeys', {
        'Ctrl-Space': function (cm) { window.server.complete(cm) },
        'Ctrl-I': function (cm) { window.server.showType(cm) },
        'Ctrl-O': function (cm) { window.server.showDocs(cm) },
        'Alt-.': function (cm) { window.server.jumpToDef(cm) },
        'Alt-,': function (cm) { window.server.jumpBack(cm) },
        'Ctrl-Q': function (cm) { window.server.rename(cm) },
        'Ctrl-.': function (cm) { window.server.selectName(cm) }
      })
      window.editor.on('cursorActivity', function (cm) { window.server.updateArgHints(cm) })
    }
    this.socket.on('sync', function (payload) {
      if (this.code !== window.editor.getDoc().getValue()) {
        window.editor.getDoc().setValue(payload)
      }
    })
  },
  methods: {
    handleKeyPress (event) {
      if (window.server && event.key === '.') {
        window.server.complete(window.editor)
      }
      if (this.current !== window.editor.getValue()) {
        this.current = window.editor.getValue()
        this.$store.dispatch('editor/UPDATE_EDITOR', this.current)
      }
    },
    toggleDropdown () {
      this.isDropdownShown = !this.isDropdownShown
    },
    changeLanguage (langauge) {
      if (this.selectedLanguage !== langauge) {
        var selected = languageRepo[langauge.toLowerCase()]
        window.editor.getDoc().setValue(selected.code)
        window.editor.setOption('mode', selected.mode)
        window.$store.dispatch('editor/UPDATE_SELECTED_LANGUAGE', langauge)
      }
      this.toggleDropdown()
    }
  }
}
</script>

<style lang="scss" scoped>

#codepad {
  height: 100%;
}
#code-area {
  height: calc(100% - 3rem);
}
.dropdown-list {
  &::after {
    content: '';
    position: absolute;
    right: 30px;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid $charcoal-light;
    z-index: -1;

  }
  li:hover {
    background-color: $light-blue-dark;
    cursor: pointer;
  }
  min-width: 160px;
  width: 200px;
}
</style>
