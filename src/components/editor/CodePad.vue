<template>
  <div id="codepad"></div>
</template>

<script>
import * as monaco from 'monaco-editor'

export default {
  name: 'codepad',
  mounted: () => {
    monaco.editor.create(document.getElementById('codepad'), {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
        '\n'
      ),
      language: 'javascript',
      theme: 'vs-dark'
    })
  }
}
</script>

<style lang="scss" scoped>
#codepad {
  height: 100%;
}
</style>
