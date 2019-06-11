<template>
  <div id="actionbar" class="flex content-center justify-between flex-wrap bg-charcoal-dark text-base">
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
</template>

<script>
export default {
  name: 'actionbar'
}
</script>

<style lang="scss" scoped>
#actionbar {
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
