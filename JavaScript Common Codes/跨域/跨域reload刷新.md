

基本原理：在域A中用iframe包含域B下的页面，通过parant在域B中控制域A中reload。可以多层嵌套。

1.html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
   
</head>
<body>
    <div id="test"></div>
    <iframe src="http://localhost:53670/2.aspx" width="800px" height="400px"></iframe>
     <script type="text/javascript">
         document.getElementById("test").innerHTML = Math.random();
    </script>
</body>
</html>


2.html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <input type="button" id="btn" value="刷新" />
    </div>
        <iframe src="http://localhost:53655/3.aspx" id="iframe" style="display:none;"></iframe>
    </form>
    <script type="text/javascript">
        document.getElementById("btn").onclick = function () {
            document.getElementById("iframe").src = "http://localhost:53655/3.aspx?success=1";
        }
    </script>
</body>
</html>



3.html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript">
        <%if(Request.QueryString["success"]=="1"){ %>
        parent.parent.window.location.reload();
        <%}%>
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    </div>
    </form>
</body>
</html>



