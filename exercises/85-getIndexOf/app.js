// Write your function here

//function getIndexOf(char, string){
// if (string.indexOf(char)) {
//    return char
//}}


function getIndexOf(char, string){
  for (let i = 0; i < string.length; i++) {
      if (string[i]==char) {
          return i
      }
  } return -1
}


var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2