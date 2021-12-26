// Fibonacci series
var fib = prompt("enter the number");
fib = parseInt(fib);
var t1 = 0;
var t2 = 1;
var nextterm =0;
for(var i=0; i<=fib; i++ ){
console.log(nextterm);
  var nextterm = t1+t2
  t1 = t2
  t2 = nextterm
 // console.log(nextterm);
}