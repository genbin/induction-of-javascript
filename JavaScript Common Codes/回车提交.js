常常需要捕捉 用户的输入后用回车提交的事件，而不是用鼠标单击
一般有两种情况

按回车提交要注意焦点问题，必须使文本输入框失去焦点。让另一个控件获得焦点就等于让文本输入框失去焦点。
一、整个页面用一个回车提交事件：

<input type="button" value="回车提交" id="auto" onclick="alert('你按了回车')"/>
<script type="text/javascript">
    document.onkeydown = function(e){
        e = e || window.event;
        if((e.keyCode || e.which) == 13){
            var obtnSearch=document.getElementById("btnSearch")
            obtnSearch.focus();//让另一个控件获得焦点就等于让文本输入框失去焦点
            obtnSearch.click();
        }
    }

</script>

二、某个输入框中注册回车事件，一般用于用户在页面输入后按回车:

<script>
function enterIn(e){
    var e = e || window.event;
    if (e.keyCode==13){
        // your code
    }
}
</script>

<input type="text" id ="input1" maxlength="3" onkeydown="enterIn(event);"/> 

如果一个页面可能需要捕捉多个回车事件，那么就利用上面的方式分开写

