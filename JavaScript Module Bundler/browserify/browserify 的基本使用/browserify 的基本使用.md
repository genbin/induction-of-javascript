# readme

这是一个基本的 browerify 的使用实例，其它详细内容参见对 browserify 库的独立笔记

## 安装 browserify

	npm install -g browserify，browserify 会下载到 prefix 变量指定的目录中

	（prefix 变量用 npm config -l 命令在 cmd 上查看）

## 安装 uniq

	在 cmd 上执行 npm install uniq，uniq 会下载到当前目录的 ./node_modules/uniq 目录中

## 写 nums.js 文件

## 用 browserify 处理 nums.js 
	
	在 cmd 上执行 browserify nums.js > bunder.js

## 写 test.html 文件

	用 script 标签包含 bunder.js 文件

在浏览器上执行 test.html，console 将有输出

