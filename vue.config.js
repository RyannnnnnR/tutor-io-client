const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/index.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: ['javascript', 'typescript']
      })
    ]
  }
}
