/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

*/
//in progress, previousValue in reducer is showing up as undefined
//still working on it,
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function findLongestWordLength(str) {
  //convert str to array
  let strArray = str.split(" ");
  
  console.log(strArray[0]);
  console.log(typeof strArray[0]);
  console.log(strArray[0].length);

  //reducer method
  const reducer = (word) => {
    console.log('word is: ' + word); 
    console.log('word.length is: ' + word.length)
    const returns = Math.max(previous.length, current.length);
    return returns;
    }

  let answer = strArray.reduce(reducer)
  return answer;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
