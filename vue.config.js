const { defineConfig } = require('@vue/cli-service')

const baseurl =
  process.env.NODE_ENV === "development" ?
    process.env.VUE_APP_PROXY :
    process.env.VUE_APP_URL;
const mockUrl = 'http://localhost:9999';

const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false,
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    port: 8080,
    open: false,
    // 代理设置
    proxy: {
      "/local": {
        target: `${baseurl}/`,
        changeOrigin: true,
        pathRewrite: {
          "^/": "",
        },
      },
      "/mock": {
        target: `${mockUrl}/`,
        changeOrigin: true,
        pathRewrite: {
          "^/": "",
        },
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      console.log('开启gzip压缩');
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          // 正则匹配需要压缩的文件后缀
          test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
          // 大于10k的会压缩
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "basic-frame-dj";
      return args;
    })
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/variable.scss";`
      }
    }
  }
})
