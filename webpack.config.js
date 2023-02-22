const UploadToCDN = require('./src/upload-to-cos');
const { FileListPlugin } = require('./src/upload-to-cos/test');
module.exports = {
  plugins: [
    new UploadToCDN(),
    new FileListPlugin({
      outputFile: 'my-assets.md',
    }),
  ],
};
