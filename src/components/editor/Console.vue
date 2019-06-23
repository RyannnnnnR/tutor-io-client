<template>
    <div id="console" class="bg-charcoal">
      <div id="console-area">
      <p class="text-xl p-2">Console</p>
      <p class="mx-4">{{$store.getters.value}}</p>
      <div id="console-output">
      </div>
      </div>
      <div id="console-action-bar" class="bg-charcoal-dark flex content-center justify-end flex-wrap">
        <button
      class="bg-transparent border border-gray-dark hover:bg-secondary-blue text-gray font-bold px-2 rounded h-8 w-24 mx-2"
    >
    <span class="py-2">
      <span>Reset</span>
    </span>
    </button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'console',
  mounted () {
  },
}
</script>

<style lang="scss" scoped>
  #console{
    height: 100%;
    overflow-y: scroll;
    color: $gray;
    border-right: 1px solid darken($charcoal, 10%)
  }
  #console-area {
    height: calc(100% - 44px)
  }
  #console-action-bar{
    height: 44px;
  }
</style>
