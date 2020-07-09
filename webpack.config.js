var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
// process.env.xxx = 'development'
console.log('----------', process.env.NODE_ENV)

var env = process.env.NODE_ENV

var config = {
    mode: 'production', //指定打包的环境
    //入口
    entry: {
        main: path.resolve(__dirname, './src/main.js')
    },
    //出口
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist')
    },
    //plugin
    plugins: [
        //把打包成功后的.js 文件自动插入到一个html模板中
        new HtmlWebpackPlugin({
            title: "2001",
            template: path.resolve(__dirname, './public/index.html')// 只能用绝对路径
        }),
        //用于自动删除dist目录
        new CleanWebpackPlugin(),
    ],
    //loader
    module: {
        rules: [
            { test: /\.(css|scss)/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
            { test: /\.(js)/, exclude: /node_modules/, use: ['babel-loader'] },
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
        extensions: [".js", ".json"]
    }
}
// 开发环境
if (env == 'development') {
    config.mode = 'development'
    //用于热更新（这两个是webpack内置的）
    config.plugins.push(new webpack.NamedModulesPlugin())
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    //本地服务
    config.devServer = {
        port: 8888,
        proxy: {
            '/todo': {
                // target: 'http://10.36.147.164:9999/',  // 目标（远程）服务器地址
                target: 'http://10.36.147.71:3000/',// 目标（远程）服务器地址
                ws: true,
                changeOrigin: true
            },
        },
        contentBase: path.resolve(__dirname, './public'),
        open: true,
        hot: true, //开启热更新
        overlay: {
            errors: true
        }
    }
    config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
        enforce: 'pre'//在babel编译之前
    })
}
module.exports = config
