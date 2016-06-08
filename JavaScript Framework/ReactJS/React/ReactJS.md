介绍

React.js 框架只是 Facebook 内部使用的 UI 库（类似bootstrap）

React 核心原理

	在Web开发中，我们总需要将变化的数据实时反应到UI上，这时就需要对DOM进行操作。而复杂或频繁的DOM操作通常是性能瓶颈产生的原因（如何进行高性能的复杂DOM操作通常是衡量一个前端开发人员技能的重要指标）。React为此引入了虚拟DOM（Virtual DOM）的机制：在浏览器端用Javascript实现了一套DOM API。基于React进行开发时所有的DOM构造都是通过虚拟DOM进行，每当数据变化时，React都会重新构建整个DOM树，然后React将当前整个DOM树和上一次的DOM树进行对比，得到DOM结构的区别，然后仅仅将需要变化的部分进行实际的浏览器DOM更新。而且React能够批处理虚拟DOM的刷新，在一个事件循环（Event Loop）内的两次数据变化会被合并，例如你连续的先将节点内容从A变成B，然后又从B变成A，React会认为UI不发生任何变化，而如果通过手动控制，这种逻辑通常是极其复杂的。尽管每一次都需要构造完整的虚拟DOM树，但是因为虚拟DOM是内存数据，性能是极高的，而对实际DOM进行操作的仅仅是Diff部分，因而能达到提高性能的目的。这样，在保证性能的同时，开发者将不再需要关注某个数据的变化如何更新到一个或多个具体的DOM元素，而只需要关心在任意一个数据状态下，整个界面是如何Render的。

Download

	by download directly
		directly to download the package files from URL

	by using npm
		npm install -g --save react react-dom（to install to {prefix}/lib/node_modules）
		npm install --save react react-dom (to install to current directory './node_modules')

	by using bower
		bower install --save react (to install to current directory './node_modules')
	
如何在 web 开发上应用 React 构建自己的 html 页面

	方式一: by <script> tab in html page

	方式二: by require() by module bundler tools with 'browserify' or 'webpack' （see relative notes in detail）

		webpack + babel + preset-react

		(see /Users/liugenjie/Projects/HTTP/react)

Reference	
https://facebook.github.io/react/
https://facebook.github.io/react/docs/tutorial.html  tutorial
https://facebook.github.io/react/docs/top-level-api.html  Top-Level API
http://reactjs.cn 
http://react-china.org
https://babeljs.io
http://webpack.github.io
