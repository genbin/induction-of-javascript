bower

Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.

install

npm install -g bower

usage examples

1: bower install fullcalendar
    
  在同级目录上，自动生成个node_modules目录，fullcalendar和其关联的jquery等控件都会一同下载下来。
    
2: 如果有.bowerrc和bower.json，可以直接执行 bower install
  
  在.bowerrc中可以指定安装目录和列表文件
    
  bower.json 指定要下载的控件列表（可以用bower init动态生成）

3: checkout bower info
  
  bower info xxx
  
configure

  BOWER 支持从缓存中提取并安装（用于没有互联网连接），所以需要要清除bower缓存  

    bower cache clean
 
  configure .bowerrc
 
    {
      "directory" : "public/components",  # assgin to install dir
      "json" : "bower.json" # assign to config file
    } 

  dynamitcally to generate bower.json, specify the download list

    bower init
 
  checkout bower info
  
    bower info xxx
  
Reference

  http://bower.io
  https://www.npmjs.com/package/bower

  
  
