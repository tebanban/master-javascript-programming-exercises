// Write your function here
function addToFrontOfNew(arr, elem) {
var newArr=arr.slice();
newArr.unshift(elem);
return  newArr 
    
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]