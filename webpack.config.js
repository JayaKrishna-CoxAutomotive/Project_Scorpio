
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.jsx',
    target: 'node',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel',
                loader1 : 'json-loader' 
            }
        ],
        resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  node: {
    fs: '{}',
    net: '{}',
    tls: '{}',
    readline:'{}',
    dns:'{}',
   
    
    
  }
    }
};



module.exports = config;