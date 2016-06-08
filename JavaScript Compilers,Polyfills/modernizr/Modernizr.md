modernizr

Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser originally written by Faruk Ateş.

	It is one of the key libraries for building cross-browser websites or applications in a modern fashion. The heart of the library is the web design pattern known as “Progressive enhancement & Graceful degradation”. This design pattern does not require Modernizr, but Modernizr can make things a lot easier. It detects the availability of native implementations for next-generation web technologies such as HTML5 or CSS3 and allow you to adapt your application accordingly, which is way better than trying some ugly voodoo user-agent sniffing.

Modernizr 与 Polyfill

	Modernizr 库只能帮你在IE中用上 HTML5 新的区块元素，但除此之外不会“现代化”（modernize）任何功能（换言之，它只能检测是否存在原生功能，不能提供该功能的实现）。之所以叫 Modernizr，目的就是让前端开发以及我们自己现代化、跟上时代步伐。尽管 Modernizr 不能提供现代化的功能，但有很多脚本可以实现浏览器不支持的功能。一般来说，这些脚本就叫做 polyfill。

Reference
https://modernizr.com/
https://modernizr.com/docs
https://github.com/Modernizr/Modernizr
https://hacks.mozilla.org/2012/07/the-web-developer-toolbox-modernizr/  The Web Developer Toolbox: Modernizr
http://webdesignernotebook.com/css/how-to-use-modernizr/  How to use Modernizr？
http://www.adobe.com/content/dotcom/cn/devnet/dreamweaver/articles/using-modernizr.html  使用Modernizr 检测HTML5和CSS3浏览器支持功能