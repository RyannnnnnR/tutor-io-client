<template>
  <div id="codepad">
    <div id="code-action-bar" class="flex content-center justify-between flex-wrap bg-charcoal-dark text-base">
    <button
      class="bg-light-blue-dark hover:bg-secondary-blue text-white font-bold px-2 rounded h-8 w-24 mx-2"
    >
    <span class="py-2">
      <span>Run</span>
      <font-awesome-icon icon="caret-right" class="ml-3 mt-1"/>
    </span>
    </button>
    <div class="dropdown relative mr-1">
      <button
        class="bg-transparent border border-gray hover:bg-light-blue text-gray font-bold rounded h-8 w-40 mx-2"
        @click="toggleDropdown"
      >
      <span class="py-2">
        <span>{{selectedLanguage}}</span>
        <font-awesome-icon icon="chevron-down" class="ml-4 text-xs"/>
      </span>
      </button>
      <div class="dropdown-list text-center shadow-md z-50 text-white absolute mt-4" v-show="isDropdownShown" >
      <ul class=" bg-charcoal-light rounded-sm">
        <li class="p-1" v-for="language in languages" v-bind:key="language" @click="changeLanguage(language)">{{language}}</li>
      </ul>
    </div>
    </div>
  </div>
  <div id="code-area" @keyup="handleKeyPress($event)">
  </div>
  </div>
</template>
<script>

import CodeMirror from 'codemirror'
import 'imports-loader?tern=tern!codemirror/addon/tern/tern'
import 'tern/node_modules/acorn/dist/acorn'
import 'codemirror/addon/edit/matchbrackets'
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
import { mapGetters, mapState } from 'vuex'
import languageRepo from '@/utils/languageRepository'
export default {
  name: 'codepad',
  data () {
    return {
      current: '',
      socket: getConnection(),
      isDropdownShown: false,
    }
  },
  computed: mapState('editor', [
    'code',
    'selectedLanguage',
    'languages'
  ]),
  mounted () {
    window.editor = CodeMirror(document.getElementById('code-area'), {
      lineNumbers: true,
      value: this.code,
      mode: this.selectedLanguage.toLowerCase(),
      theme: 'light-table',
      matchBrackets: true

    })
    window.server = new CodeMirror.TernServer({ defs: [ecma] })
    console.log(this.server)
    if(window.server) {
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
    this.socket.on('sync', function(payload){
       if(this.code != window.editor.getDoc().getValue()) {
        window.editor.getDoc().setValue(payload);
      }
    });
  },
  methods: {
    handleKeyPress (event) {
      if(window.server && event.key == '.') {
        window.server.complete(window.editor);
      }
      if(this.current != window.editor.getValue()) {
        this.current = window.editor.getValue();
        this.$store.dispatch('editor/UPDATE_EDITOR', this.current)
      }
    },
    toggleDropdown () {
      this.isDropdownShown = !this.isDropdownShown
    },
    changeLanguage (langauge) {
      if (this.selectedLanguage != langauge) {
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

<style src="codemirror/lib/codemirror.css"></style>
<style src="codemirror/theme/dracula.css"></style>
<style src="codemirror/addon/hint/show-hint.css"></style>
<style src="codemirror/addon/tern/tern.css"></style>
<style src="codemirror/addon/dialog/dialog.css"></style>

<style lang="scss" scoped>
#codepad {
  height: 100%;
  border-right: 1px solid darken($charcoal, 10%);
  border-bottom: 1px solid darken($charcoal, 10%);
}
#code-area {
  height: calc(100% - 44px);
  background: $charcoal !important;
}
#code-action-bar{
  height: 44px;
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
