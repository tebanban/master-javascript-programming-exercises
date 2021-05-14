// Write your function here

function getAverageOfElementsAtProperty(obj, key){
   var arr= obj[key];
   var sum= 0
    
   if(!Array.isArray(arr) || arr.length < 1){
    return 0;
  } 
   else{
       for (let i = 0; i < arr.length; i++) {
      sum += arr[i]  
   }
return sum/arr.length
   }

}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
