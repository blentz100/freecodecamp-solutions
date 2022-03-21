/*
 * Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

// https://javascript.info/new-function
// https://javascript.info/currying-partials
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application

function addTogether(firstNum) {
  console.log(typeof arguments[0] !== 'number');
  console.log(typeof arguments[1] !== 'number');
  if((typeof arguments[0] !== 'number') || (typeof arguments[1] !== 'number') && arguments.length == 2){
    console.log('got in the first if')
    return undefined;
  }
  if(arguments.length == 2){
    console.log('got in the if')
    return (arguments[0] + arguments[1])
  }
  else{
    //this is the curried function
    return function(secondNum){
      console.log('got in the else')
      if(typeof arguments[0] !== 'number'){
        return undefined;
      }
      //remember, this arguments[0] is referencing this second anonymous function, not the parent function
      console.log('arguments[0] is: ' + arguments[0])
      console.log('typeof arguments[0] is: ' + typeof arguments[0])
      console.log('secondNum is: ' + secondNum)
      return firstNum + secondNum;
    }
  }
}
console.log(addTogether(2)([3]));
