/*
 * Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
  
  //we'll need an outer for loop to loop through all the arguments n-1 times

  //then an innner for loop to produce a union each time through
  //this will be the union operation 

  let tempArray = [];

  for(let i = 0; i < arr.length - 1; i++){
    console.log('********* top of for loop ****** ')
    console.log(arguments[i]);

    for(let j = 0; j < arguments[i].length; j++){
  
      //check for unique values between two arrays
      if(!arguments[i+1].includes(arguments[i][j])){
        //push that unique value into a temp array
        tempArray.push(arguments[i][j])
        console.log('found a unique value and pushing into tempArray: ', arguments[i][j])
      }
    }
    console.log("tempArray is ", tempArray)
  console.log("*******bottom of the for loop********")
  }

  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
