
function findElement(arr, func) {
  var num;
  num = arr.filter(func);
  
  return num[0];
  
}

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
