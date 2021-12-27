/*
 * Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make
sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words
like the and of.
*/

function titleCase(str) {
  let answer = str.toLowerCase(); 
  let answerArray = answer.split(" ");
  let newArray = [];
  for(let i = 0; i < answerArray.length; i++){
    newArray[i] = answerArray[i][0].toUpperCase() + answerArray[i].slice(1);
  }
  return newArray.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
