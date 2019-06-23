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
      >
      <span class="py-2">
        <span>JavaScript</span>
        <font-awesome-icon icon="chevron-down" class="ml-4 text-xs"/>
      </span>
      </button>
      <div class="dropdown-list text-center shadow-md z-50 text-white absolute mt-4" v-show="false">
      <ul class=" bg-charcoal-light rounded-sm">
        <li class="p-1">Python 3</li>
        <li class="p-1">JavaScript</li>
        <li class="p-1">Java</li>
      </ul>
    </div>
    </div>
  </div>
  <div id="code-area" @keyup="update"></div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'
import theme from '@/assets/themes/theme.json'
import {getConnection} from '@/utils/socketHandler'

export default {
  name: 'codepad',
  data() {
    return {
      current: ''
    }
  },
  mounted() {
    monaco.editor.defineTheme('myTheme', theme)
    monaco.editor.setTheme('myTheme')
    window.editor = monaco.editor.create(document.getElementById('code-area'), {
      value: this.$store.getters.code,
      language: 'javascript',
      theme: 'myTheme',
      scrollBeyondLastLine: false,
    });
    var socket = getConnection();
    socket.on('sync', function(data){
      window.editor.setValue(data)
    })
  },
  methods: {
    update() {
      if(this.current != window.editor.getValue()){
        this.$store.dispatch('UPDATE_EDITOR', window.editor.getValue())
        this.current = this.$store.getters.code
      }
    }
  },
}
</script>

<style lang="scss" scoped>
#codepad {
  height: 100%;
  border-right: 1px solid darken($charcoal, 10%);
  border-bottom: 1px solid darken($charcoal, 10%);
}
#code-area {
  height: calc(100% - 44px);
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
