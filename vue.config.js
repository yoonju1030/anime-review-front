const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer: {
    port: process.env.VUE_APP_PORT || 8080,
    proxy: 'http://35.209.2.128:8000',
    webSocketServer: false,
  },
})
