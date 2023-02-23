// const UploadToCDN = require('@/upload-to-cos');
const UploadToCDN = require('./src/upload-to-cos');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  configureWebpack: {
    plugins: [new UploadToCDN({ filename: 'build' })],
  },
});
