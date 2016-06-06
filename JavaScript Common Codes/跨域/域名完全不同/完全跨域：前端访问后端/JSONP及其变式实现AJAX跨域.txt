
http://blog.sina.com.cn/s/blog_51c99bb201013iqd.html

/**
 *  <script>标签的src属性指向的是返回JS代码的地址URL
 *  当载入<script>标签后，载入的是URL返回的JS代码，并同时执行了这段JS代码  
 *  第一段代码示例是说明JSONP原理的
 *  第二段代码示例是一般常用的写法，基本意思是相同的 
 */    




JSONP是一个非官方的协议，它允许在服务器端集成Script tags返回至客户端，通过javascript callback的形式实现跨域访问（这仅仅是JSONP简单的实现形式）。下面是一个简单的跨域AJAX例子：

客户端：
    <head>
        <title></title>
    </head>
    <body>
    <script type="text/javascript">
        // 通过向页面添加js文件的方式实现跨域访问
        var loadJs = function (url, charset) {
            var _js = document_createElement_x_x_x('script');
            var _this = this;
            if (!(charset == null || charset == '')) { _js.setAttribute('charset', charset); }
            _js.setAttribute('type', 'text/javascript');
            _js.setAttribute('src', url);
            document.getElementsByTagName_r('head')[0].a(_js);
        }
        // 在这里定义了回调函数的具体实现
        function aa(num1, num2) {
            alert(num1 + num2);
        }
        // 调用方法，获取服务器端数据，注意callback=aa，这里实际上就是运行了aa函数
        loadJs("http://172.16.82.47:8099/test.aspx?callback=aa", "utf-8");
    </script>
    </body>
    </html>
    
服务器端：
    // 获取callback参数
    string callback=Request.QueryString["callback"];
    // 返回JS形式的数据，实际上就是执行了客户端定义的函数
    Response.Write(callback + "(1,2)");

下面还有种变式：

客户端：
    <script type="text/javascript">
        var tool = {
            loadJs: function (url, charset, callback) {
                var _js = document_createElement_x_x_x('script');
                var _this = this;
                if (!(charset == null || charset == '')) { _js.setAttribute('charset', charset); }
                _js.setAttribute('type', 'text/javascript');
                _js.setAttribute('src', url);
                document.getElementsByTagName_r('head')[0].a(_js);
                // JS加载完成后执行
                _js.onload = _js.onreadystatechange = function () {
                    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                       // 执行回调函数: 
                       //   实际上此时已经有 var aa={num1:1,num2:2} 位于当前函数的的作用域中（被<script>载入后得到的），
                       //   此时相当于function () { var data = eval_r("aa"); alert(data.num1+data.num2); } ( ) ，
                       //   所以这里已经取得了服务器端数据并执行了
                        callback(_js);
                        _this.removeJs(_js);
                    }
                }
            },
            removeJs: function (o) {
                var _js = (typeof o == "string") ? document.getElementByIdx_x_x_x(o) : o;
                _js.onload = _js.onreadystatechange = null;
                try {
                    _js.parentNode.removeChild(_js);
                } catch (e) { }
            }
        }
        // 调用跨域函数
        tool.loadJs("http://172.16.82.47:8099/test.aspx?jsname=aa", "utf-8", function () {
            var data = eval_r("aa");
            alert(data.num1+data.num2);
        });
    </script>
    
服务器端：
    // 以函数语句的形式返回
    string jsname=Request.QueryString["jsname"];
    Response.Write("var "+jsname+"={num1:1,num2:2};");
    
这种方法实际上也是在服务器端集成客户端js表达式，其道理和上面一种是一样的
