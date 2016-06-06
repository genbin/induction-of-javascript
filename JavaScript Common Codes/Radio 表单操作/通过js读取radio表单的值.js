
// 通过js读取radio表单的值

function validateadd()
{
    
    var New = document.getElementsByName("New");
    
    var strNew;

    for(var i = 0; i < New.length; i++)
    {
        if (New.item(i).checked) {

          strNew = New.item(i).getAttribute("value");  
          
          break;

        } else {

          continue;

        }
   }

   if (strNew=="否") {

     alert("商品必须为新品！");

     return false;

   } 

}

