// Write your function here

function select (arr, obj){

var newObj= {};
for (var key in obj) {
    for (var i = 0; i < arr.length; i++) {
       if (arr[i] === key) {
           newObj[key] = obj[key]
            
   }
  }
}
return newObj
}


var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c:3 }