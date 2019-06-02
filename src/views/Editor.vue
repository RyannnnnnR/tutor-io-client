<template>
    <div class="container">
        <div class="w-1/2">
            <!-- <CodePad /> -->
            <NotePad />
        </div>
    </div>
</template>

<script>
import components from '../components/editor'
export default {
  name: 'editor',
  components: components
}
</script>

<style lang="scss" scoped>
    .container{
        max-width: 100vw;
    }
</style>
