Knowledge Architecture

Common Javascipt Grammar

	JavaScript引擎

		是一个专门处理JavaScript脚本的虚拟机，一般会附带在网页浏览器之中。目前为止，最通用的JavaScript宿主环境是网页浏览器。网页浏览器一般使用公共的API创建“宿主对象”以便于在JavaScript中支持DOM。	

	Core JavaScript

		数据类型
			Numbers, Strings, Boolean, Functions, Objects, Arrays, null, undefined, Date, Regular 
			类型转换
		变量
			定义和声明，变量范围，知道全局变量和局部变量的区别
			JavaScript的值和引用的关系，会使用
		操作符
			算术、等值、关系、逻辑等多种操作符
		语句
			if, else if, switch, while, do/while, for, for/in, continue, break, return, try/catch 等语句
		函数
			定义、调用
			参数对象，掌握函数的属性、方法
		正则表达式
			String 对象中涉及正则表达式的有关方法
			RegExp 对象中涉及正则表达式的有关方法
		常用对象
			Object 对象的概念，会用常用的属性和方法
			Array 对象的概念，会用常用的属性和方法
			String 对象的概念，会用常用的属性和方法
			Boolean 对象的概念，会用常用的属性和方法
			Date 对象的概念，会用常用的属性和方法
			Math 对象的概念，会用常用的属性和方法
		面向对象
			了解JavaScript中类的使用
			了解模块和命名空间
			掌握变量范围、函数范围、对象链、闭包，会使用闭包
			掌握垃圾收集机制，能减少内存使用，能防止内存泄漏
			掌握JavaScript中的构造函数、类、继承、父类、子类的写法和应用
			掌握模块和命名空间的使用
			能够写javascript框架

	Client-Side JavaScript
		嵌入JavaScript的两种方法：<script>, javascript:
		浏览器兼容性
			掌握分辨浏览器的方法
			能够测试浏览器的兼容性
		The Same-Origin Policy 原则
			脚本只操作本地的对象和方法，尽量不去做跨域操作
		URI 操作
			decodeURI(), decodeURIComponent(), escape() 
		常用对象
			documnet 对象
			window 对象
			location 对象
			history 对象
			screen 对象
			Navigator 对象
		常用 web 开发技术
			DOM 操作
			CSS 操作
			EVENT 操作
			掌握与 form 相关的操作
			掌握与 cookie 相关的操作
			掌握多个窗口和frame之间交互的方法
			掌握 ajax 的原理，了解 XMLHttpRequest 的对象及其使用
			掌握 JavaScript 和 flash 交互的方法
			XML 操作
			掌握<canvas>的使用，而且需要兼容IE，了解 SVG, VML
			
Framework

	Jquery 库
		Jquery 属于工具类型的框架，严格的说 Jquery 只是一个开发库
		掌握 jquery 中的常用方法
		会用 jquery 制作插件
		能读懂 jquery 的源码

	Backbone 框架
		把 javacript 用 mvp (model + view + presenter) 的思想贯穿，充分使用 ajax 异步加载的方式，实现 js、html与后端程序（php）的完全分离
 
	AngularJS 框架
		和 backbone 类似，其 mvp (model + view + presenter) 的功能进化成了 mvvm (model + view + viewModel)。angularjs 采用双向绑定（data-binding）。

	ReactJS	框架

		React.js 框架只是 Facebook 内部使用的 UI 库（类似bootstrap）

		在Web开发中，我们总需要将变化的数据实时反应到UI上，这时就需要对DOM进行操作。而复杂或频繁的DOM操作通常是性能瓶颈产生的原因（如何进行高性能的复杂DOM操作通常是衡量一个前端开发人员技能的重要指标）。React为此引入了虚拟DOM（Virtual DOM）的机制：在浏览器端用Javascript实现了一套DOM API。基于React进行开发时所有的DOM构造都是通过虚拟DOM进行，每当数据变化时，React都会重新构建整个DOM树，然后React将当前整个DOM树和上一次的DOM树进行对比，得到DOM结构的区别，然后仅仅将需要变化的部分进行实际的浏览器DOM更新。而且React能够批处理虚拟DOM的刷新，在一个事件循环（Event Loop）内的两次数据变化会被合并，例如你连续的先将节点内容从A变成B，然后又从B变成A，React会认为UI不发生任何变化，而如果通过手动控制，这种逻辑通常是极其复杂的。尽管每一次都需要构造完整的虚拟DOM树，但是因为虚拟DOM是内存数据，性能是极高的，而对实际DOM进行操作的仅仅是Diff部分，因而能达到提高性能的目的。这样，在保证性能的同时，开发者将不再需要关注某个数据的变化如何更新到一个或多个具体的DOM元素，而只需要关心在任意一个数据状态下，整个界面是如何Render的。

	React Native 框架

		基于 ReactJS 框架

		1  React Native已实现了对iOS和Android两大平台的支持。
		2  使用 React Native 开发原生应用的原理是：在 JavaScript 中用 React.js 抽象操作系统的原生 UI 组件，继而代替 DOM 元素来渲染，比如使用 <View> 取代 <div>，使用 <Image> 替代<img>等。在后台，React Native 运行在主线程之外，而在另一个专门的后台线程里运行 JavaScript 引擎，两个线程之间通过异步消息协议来通信（有个专门的插件）。
		3  在 UI 方面，React Native 提供了一个跨平台、类似Flexbox的布局系统，并且还支持 CSS 子集。
		4  可以用JSX、JavaScript、CoffeeScript 和 TypeScript 来开发。

	Vuejs 框架 
		和 AngularJS 类似，但实现更简单方便

	Extjs 框架

NodeJS
	
	NODEJS 是什么

		浏览器中的JS与服务器端的JS
    		JS语言在浏览器中使用，用浏览器中的解释器解释执行
    		JS语言在服务器端使用，NodeJS是使js语言在服务器端运行的解释器和执行器。NodeJS既是一个运行时环境，同时又是一个库。
		NodeJS 与 V8引擎
	    	Google的V8虚拟机：Google的Chrome浏览器使用的JS执行环境，来解释和执行JS代码。
	    	V8引擎本身使用了一些最新的编译技术。这使得用Javascript这类脚本语言编写出来的代码运行速度获得了极大提升，却节省了开发成本。对性能的苛求是Node的一个关键因素。
	    	Node.js是对Google V8引擎（应用于Google Chrome浏览器)进行了封装。V8引擎执行Javascript的速度非常快，性能非常好。Node对一些特殊用例进行了优化，提供了替代的API，使得V8在非浏览器环境下运行得更好。
	    	例如，在服务器环境中，处理二进制数据通常是必不可少的，但Javascript对此支持不足，因此，V8.Node 增加了 Buffer 类，方便并且高效地处理二进制数据。因此，Node不仅仅简单地使用了V8，还对其进行了优化，使其在各环境下更加给力。
	    异步式IO与事件驱动
	    	导致优异的高并发性能
	    NodeJS 可以做什么
	    	做 server
	    	做 web
	    	做 linux/windows 系统编程工具
	    	做 network 系统编程工具
    
    web/server 框架
    	express 框架

	工具类库（并不局限于仅在 nodejs 中使用，也可以在浏览器中使用）
    	任务自动管理库：grunt
    	包管理库：bower npm
    	单元测试库：nodeunit
    	进程管理库：pm2
    	流处理库：blob－stream
    	时间处理库：Time
    	模板库：ejs
    	PDF库：pdfkit scissors
    	前端开发库：bootstrap




