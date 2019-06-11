<template>
  <div id="codepad"></div>
</template>

<script>
import * as monaco from 'monaco-editor'
import theme from '@/assets/themes/theme.json'

export default {
  name: 'codepad',
  mounted: () => {
    monaco.editor.defineTheme('myTheme', theme)
    monaco.editor.setTheme('myTheme')
    monaco.editor.create(document.getElementById('codepad'), {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
        '\n'
      ),
      language: 'javascript',
      theme: 'myTheme',
      scrollBeyondLastLine: false,
    })
  }
}
</script>

<style lang="scss" scoped>
#codepad {
  height: calc(100% - 44px);
  border-right: 1px solid darken($charcoal, 10%);
  border-bottom: 1px solid darken($charcoal, 10%);
}
</style>
