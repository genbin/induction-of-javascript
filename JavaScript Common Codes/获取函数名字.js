
// 第一种情况
function kk(){
  return (arguments.callee.toString().replace(/function\s?/mi,"").split("("))[0];
}
alert(kk()) // 返回 kk

// 第二种情况
var d = {};
d.a = function(){
    return (arguments.callee.toString().replace(/function\s?/mi,"").split("("))[0];
};
alert(d.a()) // 返回 空

// 第三种情况
var d = {};
d.b = function(){
  return getObjFirstAttrName(this);
}
function getObjFirstAttrName(obj){
  for (var key in obj) return key;
}
alert(d.b()) // 返回 b

