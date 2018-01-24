# core-js

Install
	npm i core-js
	bower install core.js

Usage
	require('core-js');
	// Without global namespace pollution
	var core = require('core-js/library');
	// Shim only
	require('core-js/shim');

Example
	Array.from(new Set([1, 2, 3, 2, 1]));          // => [1, 2, 3]
	'*'.repeat(10);                                // => '**********'
	Promise.resolve(32).then(x => console.log(x)); // => 32
	setImmediate(x => console.log(x), 42);         // => 42
	
Reference
https://github.com/zloirock/core-js