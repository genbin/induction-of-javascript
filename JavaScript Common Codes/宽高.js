
var s = "";
s += "\r\n网页可见区域宽："+ document.body.clientWidth;
s += "\r\n网页可见区域高："+ document.body.clientHeight;
s += "\r\n网页可见区域宽："+ document.body.offsetWidth   +" (包括边线和滚动条的宽)";
s += "\r\n网页可见区域高："+ document.body.offsetHeight +" (包括边线的宽)";
s += "\r\n网页正文全文宽："+ document.body.scrollWidth;
s += "\r\n网页正文全文高："+ document.body.scrollHeight;
s += "\r\n网页被卷去的高："+ document.body.scrollTop;
s += "\r\n网页被卷去的左："+ document.body.scrollLeft;
s += "\r\n网页正文部分上："+ window.screenTop;
s += "\r\n网页正文部分左："+ window.screenLeft;
s += "\r\n屏幕分辨率的高："+ window.screen.height;
s += "\r\n屏幕分辨率的宽："+ window.screen.width;
s += "\r\n屏幕可用工作区高度："+ window.screen.availHeight;
s += "\r\n屏幕可用工作区宽度："+ window.screen.availWidth;
s += "\r\n你的屏幕设置是 "+ window.screen.colorDepth +" 位彩色";
s += "\r\n你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸";
alert(s); 