var triangle=function(A, B, C)

var A=parseInt($("input").value());
var B=parseInt($("input").value());
var C=parseInt($("input").value());
var result=triangle(A, B, C)

if(A===B $$ B===C $$ A===C){
  alert "Equilateral";
}
else if(A===B || A===C|| C===B){
  alert "Isosceles";
}
else if(A!=B $$ A!=C $$ C!=B){
  alert "Scalene";
}
