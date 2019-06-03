<template>
    <div class="container flex">
        <div class="w-1/2">
        <div class="code-area">
            <ActionBar />
            <CodePad />
        </div>
        </div>
        <div class="w-1/2">
        <div class="notepad">
            <NotePad />
        </div>
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
        height: 100vh;
        max-height: 100vh;
    }
    .code-area {
        height: 50%;
    }
    .notepad {
        height: 50%;
    }
</style>
