npm

npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.
to manage third－party class libraries of js, and download the files to 'node_modules' in current directory after executing 'npm install'

install

The npm command-line tool is bundled with Node.js. If you have it installed, then you already have npm too. 

usage

npm list: show installed packages list

npm install <package name>: This  command  installs  a package, and any packages that it depends on
	default download to current ./node_modules
	--save: Package will appear in your dependencies.
	-g: to install to {prefix}/lib/node_modules 
	--save: to install to ../../node_modules
	some packages should be installed to GLOBAL DIR by '-g', some packages should be installed to CURRENT DIR by default
	
npm config ls   列出 prefix 的配置
	to see https://docs.npmjs.com/misc/config

npm config ls -l  列出全部配置
    to see https://docs.npmjs.com/misc/config

npm config set prefix "E:\Program Files\nodejs\node_modules\npm"   修改 prefix 值
	to see https://docs.npmjs.com/misc/config

	packages are installed into the {prefix}/lib/node_modules folder, instead of the current working directory.(install -g)
	bin files are linked to {prefix}/bin
	man pages are linked to {prefix}/share/man

npm info xxx 查看xxx包信息

MY NPM INSTALL DIRECTORY: /User/liugenjie/node_modules

Reference
https://www.npmjs.com
https://docs.npmjs.com/
https://github.com/nodejs-tw/nodejs-little-book/blob/master/zh-tw/node_npm.rst

