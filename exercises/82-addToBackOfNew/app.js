// Write your function here

function addToBackOfNew(arr, elem) {

    let newArr = arr.slice() //clone the array
    newArr.push(elem)
    return newArr

}
var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]