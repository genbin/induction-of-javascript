polyfill

What is a Polyfill?
	
	HTML5 的很多功能并不是所有浏览器都支持。为了解决跨浏览器兼容性问题，Introducing HTML5 一书的合著者 Remy Sharp 在该书中首次提到了 ployfilling 的概念。（http://remysharp.com/2010/10/08/what-is-a-polyfill/）

	A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively. Flattening the API landscape if you will.（一段代码或插件，可以让开发人员使用应有的技术，就像浏览器原生提供该功能一样。换句话说，它能帮你抹平API之墙。）

Modernizr 与 Polyfill

	Modernizr 库只能帮你在IE中用上 HTML5 新的区块元素，但除此之外不会“现代化”（modernize）任何功能（换言之，它只能检测是否存在原生功能，不能提供该功能的实现）。之所以叫Modernizr，目的就是让前端开发以及我们自己现代化、跟上时代步伐。尽管Modernizr不能提供现代化的功能，但有很多脚本可以实现浏览器不支持的功能。一般来说，这些脚本就叫做 polyfill。好消息是，Modernizr检测的每一个HTML5功能，现在"都有了对应的polyfill"。

	警告：不能因为能用polyfill就乱用。最关键的是还是要关注最佳用户体验

Shim 与 Polyfill

	a polyfill is a shim for a browser API

Reference
https://remysharp.com/2010/10/08/what-is-a-polyfill  What is a Polyfill?
https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills  Modernizr And HTML5 Cross Browser Polyfills
https://addyosmani.com/blog/writing-polyfills/  The Developer's Guide To Writing Cross-Browser JavaScript Polyfills
http://www.ituring.com.cn/article/766  HTML5逸事：一袋“腻子粉”的故事
http://www.2ality.com/2011/12/shim-vs-polyfill.html  What is the difference between a shim and a polyfill?


