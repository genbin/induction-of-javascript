Setting up Babel

babel-cli
	Babel's CLI is a simple way to compile files with Babel from the command line.
	$ npm install --global babel-cli
	$ babel example.js -o compiled.js
	or
	$ babel src/ -d lib/

Running Babel CLI from within a project
	$ npm install babel-cli
	edit package.json
		{
		    "name": "my-project",
		    "version": "1.0.0",
		+   "scripts": {
		+     "build": "babel src -d lib"
		+   },
		    "devDependencies": {
		      "babel-cli": "^6.0.0"
		    }
		  }
	npm run build	

babel-register
	$ npm install --save-dev babel-register
	add file register.js
		require("babel-register");
		require("./index.js");
	$ node register.js

babel-node
	If you are just running some code via the node CLI the easiest way to integrate Babel might be to use the babel-node CLI which largely is just a drop in replacement for the node CLI.
	$ npm install --save-dev babel-cli
	$ npm install --save-dev babel-node
	babel-node script.js

babel-core
	If you need to use Babel programmatically for some reason, you can use the babel-core package itself.
	$ npm install babel-core
	edit file: 
	var babel = require("babel-core");
	babel.transform("code();", options);
	babel.transformFile("filename.js", options, function(err, result) {
	  result; // => { code, map, ast }
	});
	babel.transformFileSync("filename.js", options);
	babel.transformFromAst(ast, code, options);
	http://babeljs.io/docs/usage/options/
	
Reference
http://babeljs.io/docs/setup/
https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md#toc-setting-up-babel