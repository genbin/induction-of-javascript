
isNaN(null)等于false, 不等于true。因为null已经被释放内存，更不会有任何有效值，所以不能转化成NaN值。

已经分配内存（var声明），但没有被赋值的变量的值是undefined。

isFinite(null)等于true，它只判断值是否是number类型且是有限的。