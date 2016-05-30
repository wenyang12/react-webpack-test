# react-webpack-test
可以用es6语法写的react，构建采用的是webpack

## 第一步 clone 代码到本地

`git clone git@github.com:wenyang12/react-webpack-test.git`

## 第二步 安装全局包

```
$ npm install babel -g
$ npm install webpack -g
$ npm install webpack-dev-server -g
```

## 第三步 安装依赖包

`$ npm install`


## 第四步 启动项目

`$ npm start`

然后通过浏览器访问 http://localhost:7777/ 

## 说明

**webpack.config.js 配置**

```
var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7777
   },
	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }
      }]
   }
	
}

module.exports = config;

```

- entry: 指定打包的入口文件 main.js。
- output：配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称。
- evServer：设置服务器端口号为 7777，端口后你可以自己设定 。
- module：定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。

**如何用`npm start`命令代替你想要的命令**

这里我们将要代替`webpack-dev-server --hot`

需要改变一下package.json文件的 scripts熟悉既可以，如下

打开 package.json 文件，找到 "scripts" 中的 "test" "echo \"Error: no test specified\" && exit 1" 使用以下代码替换：

`"start": "webpack-dev-server --hot"`

替换后的 package.json 文件 内容如下：

```
{
  "name": "react-webpack-test",
  "version": "1.0.0",
  "description": "菜鸟教程 react 测试",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --hot"
  },
  "author": "wenyang",
  "license": "ISC",
  "dependencies": {
    "babel-core": "^6.7.6",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "react": "^15.0.1",
    "react-dom": "^15.0.1",
    "react-router": "^2.3.0",
    "webpack": "^1.12.15"
  },
  "devDependencies": {
    "history": "^2.1.0"
  }
}
```

## 参考资料

[菜鸟教程--react安装](http://www.runoob.com/react/react-install.html)



