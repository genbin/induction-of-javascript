commonJS

what is CommonJS?

	JavaScript is a powerful object oriented language with some of the fastest dynamic language interpreters around. The official JavaScript specification defines APIs for some objects that are useful for building browser-based applications. However, the spec does not define a standard library that is useful for building a broader range of applications.

	The CommonJS API will fill that gap by defining APIs that handle many common application needs, ultimately providing a standard library as rich as those of Python, Ruby and Java. The intention is that an application developer will be able to write an application using the CommonJS APIs and then run that application across different JavaScript interpreters and host environments. With CommonJS-compliant systems, you can use JavaScript to write:

	Server-side JavaScript applications
	Command line tools
	Desktop GUI-based applications
	Hybrid applications (Titanium, Adobe AIR)

	CommonJS API定义了很多普通应用程序(主要是非浏览器的应用)使用的API。其终极目标是提供一个类似C++,Python,Ruby,Java 的标准库。这样，开发者可以使用 CommonJS API 编写应用程序，然后这些应用可以运行于不同的 JavaScript 解释器和不同的主机环境中。在兼容的 CommonJS 系统中，可以使用 JavaScript 程序开发：

	  (1) 服务器端JavaScript应用程序
	  (2) 命令行工具
	  (3) 图形界面应用程序
	  (4) 混合应用程序（如Titanium或PhoneGap）

CommonJS API 模块 1.1.1 版定义：

  (1) 二进制：二进制数据对象
  (2) 编码：编码和字符集
  (3) 输入输出：IO流
  (4) 文件系统
  (5) 系统：系统接口（控制台输入、输出、错误等）
  (6) 断言、测试：单元测试
  (7) 套接字：Socket IO
  (8) 事件队列：反应式/事件队列
  (9) worker：HTML5 Worker
  (10) 控制台

Reference
http://www.commonjs.org 
http://www.cnblogs.com/skylar/p/4065455.html  浅析JS中的模块规范（CommonJS，AMD，CMD）