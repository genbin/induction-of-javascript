babel

Babel transforms your JavaScript
 
Babel does this by compiling down JavaScript code written with the latest standards into a version that will work everywhere today. This process is known as source-to-source compiling, also known as transpiling.
However, Babel can do much more than this as Babel has support for syntax extensions such as the JSX syntax for React and Flow syntax support for static type checking.
Further than that, everything in Babel is simply a plugin and anyone can go out and create their own plugins using the full power of Babel to do whatever they want.
Even further than that, Babel is broken down into a number of core modules that anyone can use to build the next generation of JavaScript tooling.

Babel 是一个转换编译器，它能将 ES6 转换成可以在浏览器中运行的代码。Babel 由来自澳大利亚的开发者 Sebastian McKenzie 创建。他的目标是使 Babel 可以处理 ES6 的所有新语法，并为它内置了 React JSX 扩展及 Flow 类型注解支持。Babel 是所有 ES6 转换编译器中 “与 ES6 规范兼容度” 最高的，甚至超过了谷歌创建已久的 Traceur 编译器。Babel 允许开发者使用 ES6 的所有新特性，而且不会影响与老版本浏览器的兼容性。此外，它还 “支持许多不同的构建&测试系统” ，使开发者很容易将它集成到自己的工具链中。Babel的插件系统允许开发者自定义代码转换器并插入到编译过程。这些转换器会接收一棵抽象语法树，并在代码转换成可执行的JavaScript之前对其进行操作。Babel还能提升JavaScript的执行速度。

Reference

https://babeljs.io
http://babeljs.io/docs/setup/  Using Babel: How to use Babel with your tool of choice（babel 支持的不同的构建&测试系统）
http://babeljs.io/docs/plugins/  You need to use plugins to transform your code. 

https://github.com/thejameskyle/babel-handbook 
https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/README.md  hand-book (English)
https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md 
https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md

https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/README.md   hand-book (中文版)
https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md  Babel 用户手册
https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md  Babel 插件手册

http://www.infoq.com/cn/news/2015/05/ES6-TypeScript/  为什么说Babel将推动JavaScript的发展
