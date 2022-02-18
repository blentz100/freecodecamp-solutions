/*
 * Finders Keepers
Create a function that looks through an array arr and returns the first element
in it that passes a 'truth test'. This means that given an element x, the 'truth
test' is passed if func(x) is true. If no element passes the test, return
undefined.

*/

function findElement(arr, myCallBackFunction) {
  let num = 0;

  for(let i = 0; i < arr.length; i++){
  
    if(myCallBackFunction(arr[i])){
      console.log(arr[i]);
      console.log('we passed the truth test')
      return arr[i];
    }
    
  }
  return undefined;
  
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 == 0));

/* 
How to think of a modulo expression
let num = 9;

num % 2 === 0
9 % 2 === 0
1 === 0
true
*/
