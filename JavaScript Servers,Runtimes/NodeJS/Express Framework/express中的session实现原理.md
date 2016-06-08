
* express 中的 session 是什么

	nodejs本身不管session，因为用了express框架，express基于connect，connect中有session管理的能力。
	connect是插件式架构，它的插件称之为“中间件”，其中有个中间件就是叫作session。

* express 中 session 的使用方法

	使用express命令搭建应用框架时，加上－s选项，就可以添加对session的支持。
	之后在url映射函数中，直接使用req.session就可以访问和添加session信息。

* connect 的 session 中间件的 session 实现原理
	
	1 session 保存在称为 sessionStore 的数据仓库中。默认使用 MemoryStore，就是所有 session 信息都保存在内存中。
	2 每来一个请求后，在路由分发前，首先使用 cookieParser 中间件将 cookie 中的 sessionID 解析出来。
	3 根据 sessionID 去 sessionStore 中进行查找，如果能找到，就使用 sessionStore 中的数据构建一个新的 session 对象。
	4 把这个 session 对象放到 req.session 中，这就是 session 的由来。	
	另外，session 中间件还改写了 res.end 方法，在将应答发送回浏览器之前，先将 session 数据写回 sessionStore。

	从实现过程可以看出：
	1 每个 session 对象都是针对某一个 http 请求的，每个请求的 session 对象相互独立，互不影响。
	2 在没有调用 res.end 之前，session对象不会回写到 sessionStore 中，除非主动调用了session.save 方法。
	3 session 的解析依赖 cookieparser，因此 cookieparser 中间件应该放到 session 之前。
	4 路由处理函数依赖 session 数据，因此 app.router 中间件应该放到 session 之后
	5 因每个请求有独立的 session 对象，因此对于同一个客户端有多个链接的情况，需要考虑 session 回写的并发问题。

* 直接调用 session.save 会报错的问题

	直接调用 session.save 会报错，说 session 数据有循环依赖，无法保存回 sessionStore。
	实际上是 session 数据如果有循环依赖的话，无法使用 JSON.stringify 转化为字符串。
	memorystore 是使用字符串保存 session 数据的，所以会出错。

	解决办法是避免用 session 传递这类数据，实际上也没有必要以 session 的形式传递。

