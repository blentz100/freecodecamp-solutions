/*
 * Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

*/



const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function(){
    return firstAndLast.split(" ")[0];
  }
  this.getLastName = function(){
    return firstAndLast.split(" ")[1];
  }
  this.setFirstName = function(firstName){
    let temp = firstAndLast.split(" ");
    temp[0] = firstName;
    //console.log(temp)
    firstAndLast = temp.join(" ")
  }
  this.setLastName = function(lastName){
    let temp = firstAndLast.split(" ");
    temp[1] = lastName;
    //console.log(temp)
    firstAndLast = temp.join(" ")
  }
  this.setFullName = function(fullName){
    firstAndLast = fullName;
  }

};

const bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
console.log(bob.getFullName());

