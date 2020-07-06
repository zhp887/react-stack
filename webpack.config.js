var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'production', //指定打包的环境
    //入口
    entry:{
        main : path.resolve(__dirname,'./src/main.js')
    },
    //出口
    output:{
        filename: '[name].[hash].js',
        path:path.resolve(__dirname,'./dist')
    },
    //loader
    //plugin
    plugins:[
        //把打包成功后的.js 文件自动插入到一个html模板中
        new HtmlWebpackPlugin({
            title: "2001",
            template:path.resolve(__dirname,'./public/index.html')   // 只能用绝对路径
        }),
        //用于自动删除dist目录
        new CleanWebpackPlugin()
    ]
}