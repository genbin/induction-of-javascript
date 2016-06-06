3 Configuring Babel (Advanced)

Manually specifying plugins
	
	Most people can get by using Babel with just the built-in presets, but Babel exposes much finer-grained power than that.
	Babel presets are simply collections of pre-configured plugins, if you want to do something differently you manually specify plugins. This works almost exactly the same way as presets.

	first step:
	$ npm install --save-dev babel-plugin-transform-es2015-classes

	second step:
	$ vim .babelrc
	  {	
	+   "plugins": [
	+     "transform-es2015-classes"
	+   ]
	  }
	http://babeljs.io/docs/plugins/  Plugins List

Plugin options

	"loose" mode: drops some spec behavior in favor of simpler and more performant generated code.
	  {
	    "plugins": [
	-     "transform-es2015-classes"
	+     ["transform-es2015-classes", { "loose": true }]
	    ]
	  }

Customizing Babel based on environment

	  {
	    "presets": ["es2015"],
	    "plugins": [],
	+   "env": {
	+     "development": {
	+       "plugins": [...]
	+     },
	+     "production": {
	+       "plugins": [...]
	+     }
	    }
	  }

	Unix
	$ BABEL_ENV=production [COMMAND]
	$ NODE_ENV=production [COMMAND]

	Windows
	$ SET BABEL_ENV=production
	$ [COMMAND]

Making your own preset
	

Reference
https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md#toc-configuring-babel-advanced
