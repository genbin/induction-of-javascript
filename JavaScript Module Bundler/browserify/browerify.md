# browerify

npm install -g --save browserify

Browsers don't have the require method defined, but Node.js does. With Browserify you can write code that uses require in the same way that you would use it in Node.

## For example
	
	first: browserify a.js > bundle.js

	second: in html, <script src='bundle.js'></script>

## Common Usage
	
	browserify a.js > bundle.js

	browserify a.js -o bundle.js 

 	browserify --help

## Reference
	http://browserify.org
	https://github.com/substack/node-browserify
	https://github.com/substack/browserify-handbook
	http://benclinkinbeard.com/posts/how-browserify-works/
	http://www.ruanyifeng.com/blog/2015/05/commonjs-in-browser.html
	