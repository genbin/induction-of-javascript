
	// 把.net默认日期格式(如 2007-4-12 6:00:00)转成JS日期对象
    
    function netToDate (str) {
        var newDate = new Date();
        if (str) {
            str = str.replace("-", "/ ");
            var val = Date.parse(str);
            newDate = new Date(val);
        }
        return newDate;
    }
