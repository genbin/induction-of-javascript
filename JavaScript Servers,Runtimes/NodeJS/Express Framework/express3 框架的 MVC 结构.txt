
express3 

入口文件 app.js

一个请求过来，node会把这一个请求的数据通过一个个你加载进去的middleware进行处理，bodyParser会解析request里body的内容，然后赋值给req.body，而route是匹配request的路径，定位到一个function里边去处理
