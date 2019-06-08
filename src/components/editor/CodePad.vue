<template>
  <div id="codepad"></div>
</template>

<script>
import * as monaco from 'monaco-editor'

export default {
  name: 'codepad',
  mounted: () => {
    monaco.editor.defineTheme('myTheme', {
      base: 'vs',
      inherit: true,
      rules: [{ background: '2a2836' }],
      colors: {
        'editor.foreground': '#000000',
        'editor.background': '#2a2836',
      }
    })
    monaco.editor.setTheme('myTheme')
    monaco.editor.create(document.getElementById('codepad'), {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
        '\n'
      ),
      language: 'javascript',
      theme: 'myTheme'
    })
  }
}
</script>

<style lang="scss" scoped>
#codepad {
  height: calc(100% - 44px);
}
</style>
