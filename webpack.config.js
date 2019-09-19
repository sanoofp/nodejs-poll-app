const path = require('path');

module.exports = { 
  entry: './public/assets/js/main.js',
  output: { 
    path: path.join(__dirname,'public/assets/js'),
    filename: 'bundle.js'
  },
  watch: true
}