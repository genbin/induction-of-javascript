
// 弹窗居中显示
function centerPopup(id){
    
    // 浏览器窗口的宽度和高度
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // 弹窗的宽度和高度,这里的值我们在CSS中定义。
    var popupHeight = $(id).height();
    var popupWidth = $(id).width();
    
    // 弹窗定位
    $(id).css({
        "position": "absolute",
        "top": windowHeight/2+scrollTop/2-popupHeight/2,
        "left": windowWidth/2-popupWidth/2
    });
}

// 常用 window 事件
window.onscroll = function(){};
window.onresize = function(){};
