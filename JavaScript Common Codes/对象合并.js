       
var extend = function(o,n,override){
  for(var p in n)if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override))o[p]=n[p];
};

var o1={hello:1},o2={world:2};
extend(o1,o2);
alert(o1.world);
 