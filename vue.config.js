const { defineConfig } = require('@vue/cli-service')

const baseurl =
  process.env.NODE_ENV === "development" ?
    process.env.VUE_APP_PROXY :
    process.env.VUE_APP_URL;
const mockUrl = 'http://localhost:9999';
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
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/variable.scss";`
      }
    }
  }
})
