/*
 * Sorted Union
Write a function that takes two or more arrays and returns a new array of unique
values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array
should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
  
  //we'll need an outer for loop to loop through all the arguments n-1 times

  //then an innner for loop to produce a union each time through
  //this will be the union operation 

  let tempArray = [];

  for(let i = 0; i < arr.length - 1; i++){
    console.log('** top of outer for loop ** ')
    console.log("attempting to join: " + arguments[i] + " with: " + arguments[i+1]);

    //create a blank solutionArray to hold the answer
    let solutionArray = [];

    for(let j = 0; j < arguments[i].length; j++){
      console.log("\t * top of inner for loop *"); 
      //here's the algorithm: 
      //maybe we can just merge all the arrays together to create one long array
      //and then iterate over that array checking for duplicates at each index?
      //maybe use a filter function to to this?

      if(!arguments[i+1].includes(arguments[i][j])){
        //push that unique value into a temp array
        tempArray.push(arguments[i][j])
        console.log('\tfound a unique value and pushing into tempArray: ', arguments[i][j])
      }
      console.log("\t * bottom of inner for loop *"); 
    }

    console.log("tempArray is       :", tempArray)
    console.log("tempArray should be: [1, 3, 2, 5, 4]")
  console.log("** bottom of outer for loop **\n")
  }

  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
