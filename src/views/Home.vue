<template>
  <div class="container">
    <router-link :to="generateURL" tag="button">foo</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import * as monaco from 'monaco-editor'

export default {
  name: 'home',
  computed: {
    generateURL: function() {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < 8; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      console.log(result)
      return "editor/"+result;
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
