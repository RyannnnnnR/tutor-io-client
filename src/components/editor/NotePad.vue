<script>
import Quill from 'quill'

export default {
  mounted () {
    var quill = new Quill('#editor', {
      theme: 'snow'
    })
  }
}
</script>

<template>
    <div id="editor">
      <h1>Notes</h1>
    </div>
</template>

<style lang="scss" scoped>
  #editor {
    height: 100%;
  }
</style>

<style src="quill/dist/quill.snow.css"></style>
