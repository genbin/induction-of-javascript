
    var tim = 0;
    
    var st = setTimeout(function(){
        window.location.href = "http://www.baidu.com";
        clearInterval(si);
        clearTimeout(st);
    }, 10000);
    
    var si = setInterval(function(){
        tim = tim + 1;
        document.getElementById("timer").innerHTML = (10 - tim);
    }, 1000);
    
    