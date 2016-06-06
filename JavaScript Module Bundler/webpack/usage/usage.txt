Common Usage

one, FIREST FILE

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

two, SECOND FILE
	
	add content.js
	module.exports = "It works from content.js.";

	add entry.js
	document.write(require("./content.js"));

	add index.html
	<html>
	    <head>
	        <meta charset="utf-8">
	    </head>
	    <body>
	        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
	    </body>
	</html>

	compile with:
	$ webpack ./entry.js bundle.js

three, CSS FILE
	
	npm install css-loader style-loader to install the loaders. (They need to be installed locally, without -g) 

	add content.js
	module.exports = "It works from content.js.";

	add style.css
	body { background: yellow; }

	add entry.js
	require("!style!css!./style.css");
	document.write(require("./content.js"));

	add index.html
	<html>
	    <head>
	        <meta charset="utf-8">
	    </head>
	    <body>
	        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
	    </body>
	</html>
	
	compile with:
	$ webpack ./entry.js bundle.js

four, with config file
	
	add content.js
	module.exports = "It works from content.js.";

	add style.css
	body { background: yellow; }

	add entry.js
	document.write(require("./content.js"));

	add webpack.config.js
	module.exports = {
	    entry: "./entry.js",
	    output: {
	        path: __dirname,
	        filename: "bundle.js"
	    },
	    module: {
	        loaders: [
	            { test: /\.css$/, loader: "style!css" }
	        ]
	    }
	};

	add index.html
	<html>
	    <head>
	        <meta charset="utf-8">
	    </head>
	    <body>
	        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
	    </body>
	</html>

	compile with:
	$ webpack 

Reference
http://webpack.github.io/docs/tutorials/getting-started/
http://webpack.github.io/docs/usage.html	
http://webpack.github.io/docs/cli.html  
http://webpack.github.io/docs/node.js-api.html
http://webpack.github.io/docs/configuration.html
http://webpack.github.io/docs/loaders.html 

	