<template>
  <div class="container">
    <div class="flex">
      <div class="w-1/2">
        <div class="height-60">
          <CodePad/>
        </div>
      </div>
      <div class="w-1/2">
        <div class="height-60">
          <NotePad/>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2">
        <div class="height-40">
          <Console/>
        </div>
      </div>
      <div class="w-1/2">
        <div class="height-40">
          <PeerDetails/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import components from '../components/editor'
import { getConnection } from '@/utils/socketHandler'
export default {
  name: 'editor',
  components: components,
  mounted () {
    var socket = getConnection()
    socket.emit('join', this.$route.params.id)
    console.log('sent')
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.container {
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
}
.height-60 {
  height: 60vh;
}
.height-40 {
  height: 40vh;
}
</style>
