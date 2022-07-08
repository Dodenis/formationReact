const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const browserConfig = {
    mode: 'development',
    entry: './src/browser/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            isBrowser: "true"
        })
    ]
}
const serverConfig = {
    mode: 'development',
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()], // ignores node_modules when bundling in Webpack
    output: {
        path: __dirname, // this file is the server entry,
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            isBrowser: "false"
        })
    ]
}
module.exports = [browserConfig, serverConfig]