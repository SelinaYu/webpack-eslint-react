const path = require('path');
module.exports={
  entry: [ 'babel-polyfill', './src/index.js' ],
  resolve: {
    // root:
    extensions: [ '.js', '.json', '.css', '.less', 'scss' ],
    alias: {
      'assets': path.join(__dirname, '../src/assets'),
      'actions': path.join(__dirname, '../src/actions'),
      'pages': path.join(__dirname, '../src/pages'),
      'mock': path.join(__dirname, '../src/mock')
    }
  },
};
