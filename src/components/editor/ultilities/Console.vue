<template>
    <div id="console" class="bg-charcoal">
      <div id="console-area">
        <div class="p-8 text-white text-lg">
          <p>Running <span class="text-green-400 italic font-bold"> <font-awesome-icon :icon="['fab','node-js']" class="mr-2"></font-awesome-icon>Node v12.3.1</span>. </p> 
          <p v-html="$store.getters.value"></p>
        </div>
      <div id="console-output">
      </div>
      <button
      class="bg-gray-700 hover:bg-secondary-blue text-white px-6 py-1 m-4 rounded right-0 bottom-0 absolute shadow-md"
    >
    <span class="py-2">
      <span>Reset Output</span>
      <font-awesome-icon icon="undo" class="text-gray-500 ml-2 mt-1"/>
    </span>
    </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'console',
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  #console{
    height: 100%;
    overflow-y: scroll;
    color: $gray;
    border-right: 1px solid darken($charcoal, 10%)
  }
</style>
