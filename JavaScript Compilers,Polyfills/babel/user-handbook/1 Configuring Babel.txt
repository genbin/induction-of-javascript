Configuring Babel

You can give Babel instructions on what to do by installing plugins or presets (groups of plugins).

.babelrc
	create a .babelrc file at the root of your project. Start off with it like this:
	{
	  "presets": [],
	  "plugins": []
	}

babel-preset-es2015
	to compile ES2015 (the newest version of the JavaScript standard, also known as ES6) to ES5 (the version available in most JavaScript environments today)
	$ npm install --save-dev babel-preset-es2015
	$ vim .babelrc
	{
	    "presets": [
	+     "es2015"
	    ],
	    "plugins": []
	}

babel-preset-react
	$ npm install --save-dev babel-preset-react
	$ vim .babelrc
	{
	    "presets": [
	      "es2015",
	+     "react"
	    ],
	    "plugins": []
	}

babel-preset-stage-x
	$ npm install --save-dev babel-preset-stage-
	$ vim .babelrc
	{
	    "presets": [
	      "es2015",
	      "react",
	+     "stage-2"
	    ],
	    "plugins": []
  	}
  	
Reference
https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md#toc-configuring-babel