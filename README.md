## 目标

1、从零到一搭建React项目工程架构
2、学习React技术栈：React、React-Router、Mobx
3、硬件：win7/win10
4、环境：node.js v12+
5、构建工具：Webpack


## 起步

1、创建项目 npm init


## Webpack

是前端工程的构建工具
是前端资源打包器

重点：入口、出口、loader、plugin

安装：
  cnpm install webpack -D
  cnpm install webpack -g
  cnpm install webpack-cli -D
  cnpm install webpack-cli -g

手动创建 webpack.config.js

编写webpack.config.js配置文件

打包命令：webpack --config webpack.config.js

plugin插件：
  用于打包时的额外功能
  html-webpack-plugin
  clean-webpack-plugin

loaders用于编译打包文件模块，将其转换成浏览器能够识别的代码
 css->用到style-loader css-loader
 sass -> 用到style-loader css-loader sass-loader node-sass
 js -> babel-loader @babel/core

本地服务：
  webpack-dev-server
  open
  contentBase
  hot

热更新：
 devServer.hot = true
 使用两个webpack的内置插件

生产环境与开发环境的区分:
 cross-env 使用这个包来指定
 process.env.NODE_ENV 环境变量

ESLint配置
 cnpm install eslint eslint-loader -D
 手动创建.eslintrc.json配置文件

使用React:
 cnpm install react react-dom -S
 cnpm @babel/preset-react 配置文件
 添加一个配置文件: .babelrc.json

使用较新js语法：
 cnpm install @babel/preset-env
