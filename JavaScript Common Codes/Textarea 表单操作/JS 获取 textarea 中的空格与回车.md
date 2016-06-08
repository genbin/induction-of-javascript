JS 获取 textarea 中的空格与回车


火狐中是\n,IE下是\r\n,通过16进制对照ascii可以查看。解决办法如下：replace(/(\r)*\n/g,"<br />").replace(/\s/g," "); 

完整代码：

<script type="text/javascript">
    var $$ = function(id) { 
    	return document.getElementById(id); 
    }

    stopBubble = function (e) {
	    // 如果传入了事件对象，那么就是非IE浏览器
	    if (e && e.stopPropagation)
	        // 支持W3C的stopPropation()方法
	        e.stopPropagation();
	    else
	        // 否则，我们得使用IE的方式来取消事件冒泡
	        window.event.cancelBubble = true;
    }

    function showMsg() {
        var elem = $$("result");
        var content = $$("content");
        // alert(elem.innerHTML)
        // return;
        // alert(content.value.toString())
        // $$("result").innerHTML=content.value.toString().replace(/\s/g," ").replace(/\r\n/g,"<br/>");
      
        // alert(escape(content.value.toString()));
        $$("result").innerHTML = content.value.toString().replace(/(\r)*\n/g,"<br/>").replace(/\s/g," ");
    }
</script>

Reference

	http://zhidao.baidu.com/link?url=8RB5ROmdEg3hiEDg-fP8Bzvd3DlfPCG4pQqY0Tcdo_5bwpbu-ap1RtcyBKWgDGs6Ae2iQKgQrm8LhOHvtW4ASa

	http://www.dewen.io/q/2242
	