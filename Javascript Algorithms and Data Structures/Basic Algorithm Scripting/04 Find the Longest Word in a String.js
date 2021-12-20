/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

*/
//in progress, previousValue in reducer is showing up as undefined

function findLongestWordLength(str) {
  //convert str to array
  let strArray = str.split(" ");
  
  console.log(strArray[0]);
  console.log(typeof strArray[0]);
  console.log(strArray[0].length);

  //reducer method
  const reducer = (previousValue, currentValue, index, array) => {
    console.log(`currentValue is: ${currentValue}`)
    console.log(`previousValue is: ${previousValue}`)
    /*if(previousValue.toString().length >  currentValue.toString().length){
      return previousValue.length;
    }*/
    
    }

  let answer = strArray.reduce(reducer)
  return 9999;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
