<template>
    <div id="console-action-bar" class="bg-charcoal-dark flex content-center justify-end flex-wrap">
        <button v-on:click="reset"
      class="bg-transparent border border-gray-dark hover:bg-secondary-blue text-gray font-bold px-2 rounded h-8 w-24 mx-2"
    >
    <span class="py-2">
      <span>Reset</span>
    </span>
    </button>
    </div>
</template>

<script>
    export default {
        methods: {
            reset: function(event){
                console.log(this.$store)
                this.$store.dispatch('updateValue', "Reset")
            }
        }
    }
</script>

<style lang="scss" scoped>
    #console-action-bar {
        height: 44px;
    }
</style>