// Write your function here

function getElementsThatEqual10AtProperty(obj, key){
    
var array= [];
 for( var key in obj){
     for(let i=0; i < obj[key].length; i++) {
         if(obj[key][i] === 10){
             array.push(obj[key][i])
         }
     }
      return array
 }
}

 
    


var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]