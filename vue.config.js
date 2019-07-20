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
    resolve: {
      // .mjs needed for https://github.com/graphql/graphql-js/issues/1272
      extensions: ['*', '.mjs', '.js', '.vue', '.json']
    },
    plugins: [
      new MonacoWebpackPlugin({
        languages: ['javascript', 'typescript']
      })
    ],
    module: {
      rules: [ // fixes https://github.com/graphql/graphql-js/issues/1272
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    }
  }
}
