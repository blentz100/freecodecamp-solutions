/*
 * Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly
divided by both, as well as by all sequential numbers in the range between these
parameters.

The range will be an array of two numbers that will not necessarily be in
numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
that is also evenly divisible by all numbers between 1 and 3. The answer here
would be 6.

*/
function smallestCommons(arr) {
  // first we need to put the incoming array in order
  let sortedArray = arr.sort(function(a, b){return a-b})
  console.log(sortedArray);

  let firstNum = sortedArray[0];
  let secondNum = sortedArray[1];

  //this for loop will print out the multiples of the two numbers, in order
  let j = 1, k = 1, currentMultiple = 0, matchCounter = 0;
  while(matchCounter < (secondNum - firstNum) ){
    if(firstNum * j < secondNum * k){
      //console.log(firstNum *j)
      currentMultiple = firstNum * j;
      j++
    }
    else{
      //console.log(secondNum * k)
      currentMultiple = secondNum * k;
      k++
    }
    //find the common multiples of both numbers
    let flag = false;
    if((currentMultiple % firstNum == 0) && (currentMultiple % secondNum == 0) ){
      console.log('we found a common multiple of both numbers: ' + currentMultiple)
      flag = true;
    }
    matchCounter = 0;
    //check of all the sequential numbers can be evenly divided also
    for(let m = firstNum + 1; m <= secondNum -1; m++){
      if(currentMultiple % m == 0){
        console.log(currentMultiple + " currentMultiple % " + m + " == 0")
        matchCounter++;
      }
      if(matchCounter == (secondNum - firstNum - 1) && flag == true){
        return currentMultiple;
      }
    }
  }
}
smallestCommons([23,18]);

