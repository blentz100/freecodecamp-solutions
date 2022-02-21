/*
 * DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its
pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided
character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are
grouped into one encapsulating array.

*/

function pairElement(str) {
  let answerArray = [];
  //need to loop through the str, visiting each element
  for(let i = 0; i < str.length; i++){
    console.log(str[i])
    if(str[i] == "G"){
      answerArray.push(['G', 'C'])
    }
    if(str[i] == "C"){
      answerArray.push(['C', 'G'])
    }
    if(str[i] == "A"){
      answerArray.push(['A', 'T'])
    }
    if(str[i] == "T"){
      answerArray.push(['T', 'A'])
    }

  }
  //at each element, need to push a new 2 length array and push it into a new answer array.
  return answerArray;
}
console.log(pairElement("GCG"));

