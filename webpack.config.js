let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        first: path.resolve(__dirname, 'src/js/main.js')
        // second: path.resolve(__dirname, './src/second.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,'src/index.html'),
            filename: 'index.html'
        })
    ]
}