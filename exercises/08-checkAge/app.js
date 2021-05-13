function checkAge(name, age) {
  // your code here
  if (age<21){
      message="Go home, " + name +"!"
  }

  else {message="Welcome, " +name +"!"}
      
  return message
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'S