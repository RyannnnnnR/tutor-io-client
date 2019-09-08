const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
