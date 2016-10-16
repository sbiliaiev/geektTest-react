var webpack = require('webpack'),
    path    = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist'),
    SRC_DIR  = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: SRC_DIR + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    }
};

module.exports = config;
