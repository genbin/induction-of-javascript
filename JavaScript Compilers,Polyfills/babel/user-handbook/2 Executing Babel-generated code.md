Executing Babel-generated code

Either of two methods is available. 

babel-polyfill

	polyfill is a piece of code that replicates a native api that does not exist in the current runtime. Allowing you to use APIs such as Array.from before they are available.
	Babel includes a polyfill that includes a custom "regenerator runtime" and "core.js".

	$ npm install --save babel-polyfill

	Then simply include the polyfill at the top of any file that requires it:
	import "babel-polyfill";

	Reference
	https://babeljs.io/docs/usage/polyfill/
	https://github.com/facebook/regenerator/blob/master/runtime.js
	https://github.com/zloirock/core-js

babel-runtime
	
	babel-runtime is a package that contains a polyfill and many other things that Babel can reference. You'd install it in your app with npm install babel-runtime
	
	transform-runtime is a Babel plugin to process your source code and inject import foo from "babel-runtime" statements so that babel-runtime is actually used. You'd also install this with npm install babel-plugin-transform-runtime.
	This plugin externalise references to helpers and builtins, automatically polyfilling your code without polluting globals

	$ npm install --save babel-runtime
	$ npm install --save-dev babel-plugin-transform-runtime
	
	Add the following line to your .babelrc file:
	{
	  "plugins": ["transform-runtime"]
	}

	Reference
	http://babeljs.io/docs/plugins/transform-runtime/

Reference
https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md#toc-executing-babel-generated-code
