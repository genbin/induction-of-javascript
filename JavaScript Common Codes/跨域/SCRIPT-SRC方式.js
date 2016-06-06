    
    // ＜script＞标签的src属性不存在跨域的问题
    
    //此代码在 www.a.com 下     
    var head = document.getElementsByTagName("head")[0];         
    var js = document.createElement("script");         
    js.src = "http://www.b.com/login.php?username=*&passwod=*";         
    js.onload = js.onreadystatechange = function()         
    {         
        if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")         
        {     
             head.removeChild(js);     
             //JS加载完毕了. 类似于ajax请求完成.     
             //执行是否登陆成功的判断     
        }         
    }         
    head.appendChild(js);    