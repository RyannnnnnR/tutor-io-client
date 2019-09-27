<script>
import Quill from 'quill'

export default {
  mounted () {
      var quill = new Quill('#notepad', {
        theme: 'snow'
      })
  }
}
</script>

<template>
    <div class="nodepad-container h-full">
      <div id="notepad" class="h-full">
        <h2><b>Linked Lists</b></h2>
        <p>8th September, 2019</p>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .nodepad-container {
    height: calc(100% - 3rem - 44px);
  }

</style>
