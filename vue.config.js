const path = require("path");

module.exports = {
  devServer: {
    port: 9000
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, "./src/style.scss")]
    }
  }
}
