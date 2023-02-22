const JSZip = require('jszip');

const zip = new JSZip();
const path = require('path');
const RawSource = require('webpack-sources').RawSource;
const COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');
const cos = new COS({
  SecretId: 'AKIDLZvYM3hIlFmOwPWkv2CFD7wmZIxVwFRU',
  SecretKey: 'Lhw7XvDOTSMAsUM5f4MZmuyAHwWyJWdf',
});

class UploadToCDN {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    console.log('我在运行呀');
    console.log(this.options.filename);
    compiler.hooks.emit.tapAsync('UploadToCDN', (compilation, callback) => {
      const folder = zip.folder(this.options.filename);
      for (let filename in compilation.assets) {
        const source = compilation.assets[filename].source();
        folder.file(filename, source);
      }
      zip.generateAsync({ type: 'nodebuffer' }).then((content) => {
        this.outputPath = path.join(
          compilation.options.output.path,
          `${this.options.filename}.zip`
        );
        const outputRelativePath = path.relative(
          compilation.options.output.path,
          this.outputPath
        );
        compilation.assets[outputRelativePath] = new RawSource(content);
        console.log('Build zip success........!');
        callback();
      });
    });

    compiler.hooks.afterEmit.tapAsync(
      'UploadToCDN',
      (compilation, callback) => {
        cos.putObject(
          {
            Bucket: 'zipfile-1314929303',
            Region: 'ap-chengdu',
            Key: `${this.options.filename}.zip`,
            StorageClass: 'STANDARD',
            Body: fs.createReadStream(this.outputPath),
            onProgress: (progressData) => {
              console.log(JSON.stringify(progressData));
            },
          },
          (err, data) => {
            if (err) {
              console.log(err);
              console.error('Upload to cdn fail.......!');
            }
            console.log('Upload to cdn success...!', data);
            callback();
          }
        );
      }
    );
  }
}

module.exports = UploadToCDN;
