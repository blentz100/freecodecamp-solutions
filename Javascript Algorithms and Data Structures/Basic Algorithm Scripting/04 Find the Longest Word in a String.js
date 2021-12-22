/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//This video helped on figuring out reduce

function findLongestWordLength(str) {
  //convert str to array
  let strArray = str.split(" ");
  
  console.log(strArray[0]);
  console.log(typeof strArray[0]);
  console.log(strArray[0].length);

  const answer = strArray.reduce((longest, current) => {
    console.log(`longest is: ${longest}`);
    console.log(`current is: ${current}`);
    return Math.max(longest,current.length)
  },0)
  return answer;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
