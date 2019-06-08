<template>
    <div id="console" class="bg-charcoal">
      <h1>Yeet</h1>
      <div id="console-output">
      </div>
    </div>
</template>

<script>
export default {
  name: 'console'
}
</script>

<style lang="scss" scoped>
  #console{
    height: 100%;
    overflow-y: scroll;
    color: $gray;
    border: 1px solid darken($charcoal, 10%)
  }
</style>
