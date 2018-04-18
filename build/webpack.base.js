const path = require('path');
module.exports={
  entry: {
    index: [ 'babel-polyfill', './src/index.js' ],
    vendor: [
      'react',
      'react-dom',
      'antd'
    ]
  },
  resolve: {
    // root:
    extensions: [ '.js', '.json', '.css', '.less', 'scss' ],
    alias: {
      'Assets': path.resolve(__dirname, '../src/assets'),
      'Actions': path.resolve(__dirname, '../src/actions'),
      'Pages': path.resolve(__dirname, '../src/pages'),
      'Mock': path.resolve(__dirname, '../src/mock'),
      'Components': path.resolve(__dirname, '../src/components')
    }
  },
};
