const path = require('path');
require('fs').writeFileSync('./lib/version.json', `{"version": "${require('./package.json').version}"}`);
module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
  output: {
    library: 'JSEncrypt',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'bin'),
    filename: 'jsencrypt.js',
  },
  mode: 'development',
  performance: { hints: false }
};
