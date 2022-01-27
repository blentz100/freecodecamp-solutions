function largestOfFour(arr) {

// 1. DONE - come up with a way to loop through arr
// 2. DONE For each sub array, find the largest element
// 3. Take the largest, and push that into a solution array
console.log(" ")
console.log("original input: ")
console.log(arr)
let largestElementSeenSoFar = 0;
let montysArray = [];

for (let i = 0; i < arr.length; i++){
  largestElementSeenSoFar = arr[i][0]
  for(let j = 0; j < arr[i].length; j++){
    if(arr[i][j] > largestElementSeenSoFar){
    largestElementSeenSoFar = arr[i][j];
    }
  }
   console.log("largestElementSeenSoFar: " + largestElementSeenSoFar)
   montysArray.push(largestElementSeenSoFar);
  
}
console.log("montysArray is: " + montysArray)

  return montysArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
