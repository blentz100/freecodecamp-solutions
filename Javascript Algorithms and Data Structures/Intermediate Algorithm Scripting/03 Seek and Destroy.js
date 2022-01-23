/*
 * Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer
function), followed by one or more arguments. Remove all elements from the
initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr) {
  console.log(arguments)
  let initialArray = arguments[0]
  console.log('initialArray is: ' + initialArray)
  
  for(let i = 1; i < arguments.length; i++){
    console.log("arguments[i] is: " + arguments[i])
    if(initialArray.includes(arguments[i])){
      console.log('i need to remove ' + arguments[i])
      console.log(initialArray.splice(i,1))
    }
  }
  return initialArray;
}


console.log('final answer is: ' + destroyer([1, 2, 3, 1, 2, 3], 2, 3));
