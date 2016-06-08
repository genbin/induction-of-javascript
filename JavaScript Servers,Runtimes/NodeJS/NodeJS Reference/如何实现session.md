
* session 的基本原理
	
	session的本质使用cookie来实现。 
	1 http 在服务端把 sessionid 设置到 cookie 中
	2 服务端拿到 cookie 中的 sessionid, 去固定地点（数据库，文件）检索出对应的数据。
	3 把检索出来的数据赋值给本次请求的request
	在PHP,ASP或者其他服务端语言中都自动帮你实现了，而在nodejs中需要自己处理。

* 在 nodejs 中 实现 Cookie

	第一步，在 Cookie 中设置 sessionid

		res.setHeader("Set-Cookie", ["sessionid=无重复字符串;path=/;domain=网站根域名;expires="+new Date("过期日期")]);

	第二步，设置 req.session

		function session ( req, res, next ) {
	　　　　　
	        req.session = {};

	        if ( req.cookies && req.cookies.sessionid ) {

	            var sessionid = req.cookies.sessionid;

	            UserModel.hexFind ( sessionid, function( status ) {

	                if(status.code == "0"){

	                    req.session.user = status.result;
	                    
	                }

	                next();
	            });
	            
	        } else {
	            
	            next();

	        }  
	      
	    }



