
**** 刷新页面 ****

Javascript刷新页面的几种方法： 

1 history.go(0) 
2 location.reload() 
3 location=location 
4 location.assign(location) 
5 document.execCommand('Refresh') 
6 window.navigate(location) 
7 location.replace(location) 
8 document.URL=location.href 

详细出处参考：http://www.jb51.net/article/14397.htm


**** 自动刷新页面 ****

<script language="JavaScript"> 
    function myrefresh() 
    { 
        window.location.reload(); 
    } 
    setTimeout('myrefresh()',1000); //指定1秒刷新一次 
</script> 

详细出处参考：http://www.jb51.net/article/14397.htm