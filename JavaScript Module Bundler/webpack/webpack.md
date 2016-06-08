webpack

what is webpack ?

	webpack is the flexible module bundler. webpack takes modules with dependencies and generates static assets representing those modules.

webpack goals
	
	Today’s websites are evolving into web apps:
		More and more JavaScript is in a page.
		You can do more stuff in modern browsers.
		Fewer full page reloads → even more code in a page.
		As a result there is a lot of code on the client side!
	A big code base needs to be organized. Module systems offer the option to split your code base into modules.

	So the Goals of webpack is as follows:
		Split the dependency tree into chunks loaded on demand
		Keep initial loading time low
		Every static asset should be able to be a module
		Ability to integrate 3rd-party libraries as modules
		Ability to customize nearly every part of the module bundler
		Suited for big projects

Install

	npm install -g -save webpack

Usage Example

	Create these files:

	add entry.js
	document.write("It works.");

	add index.html
	<html>
	    <head>
	        <meta charset="utf-8">
	    </head>
	    <body>
	        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
	    </body>
	</html>

	Then run the following:
	$ webpack ./entry.js bundle.js

Reference
http://webpack.github.io
http://webpack.github.io/docs/
http://webpack.github.io/docs/configuration.html
http://webpack.github.io/docs/loaders.html 
