
    function printObj(obj){
        var txt = '';
        for (var key in obj) {
            txt += ' ' + key + ' ' + obj[key] + "\n";
        }
        alert(txt);
    }