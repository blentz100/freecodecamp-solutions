/*
 * Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  let answerArray = arr2.slice(0,n);
  console.log(answerArray);
  answerArray.push(...arr1);
  console.log(answerArray);
  
  for(let i = n; i < arr2.length; i++){
    answerArray.push(arr2[i]);
  }

  console.log(answerArray);
  return answerArray;

}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
