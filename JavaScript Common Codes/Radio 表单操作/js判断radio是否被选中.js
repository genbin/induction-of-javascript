
// js判断radio是否被选中

// 方法一
function validate()
{
	var resualt = false;
	for (var i = 0; i < document.formName.radioName.length; i++)
	{
    	if(document.formName.radioName[i].checked)
    	{
      		resualt = true;
    	}
	}
	if(!resualt)
	{
    	alert("为啥不选一个捏~！");
	}
	return resualt;
}

// 方法二
function validate(radioName)
{
	var resualt = false;
	var New = document.getElementsByName(radioName);
	for (var i = 0; i < New.length; i++)
	{
    	if (New.item(i).checked)
    	{
      		resualt = true;
    	}
	}
	if(!resualt)
	{
    	alert("为啥不选一个捏~！");
	}
	return resualt;
}

