
* 举例接入redis

  在 package.json 的 dependencies 对象中加 "redis" : "*"
  
  在需要用的文件中写入
  var redis = require('redis');
  var db = redis.createClient();
  
  
  