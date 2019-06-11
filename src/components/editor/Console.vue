<template>
    <div id="console" class="bg-charcoal">
      <p class="text-xl p-2">Console</p>
      <p class="mx-4">{{$store.getters.value}}</p>
      <div id="console-output">
      </div>
    </div>
</template>

<script>
export default {
  name: 'console',
  mounted () {
    console.log(this.$store)
  },
}
</script>

<style lang="scss" scoped>
  #console{
    height: calc(100% - 44px);
    overflow-y: scroll;
    color: $gray;
    border-right: 1px solid darken($charcoal, 10%)
  }
</style>
