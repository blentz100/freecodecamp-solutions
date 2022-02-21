/* Search and Replace
Perform a search and replace on the sentence using the arguments provided and
return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are
replacing it. For example if you mean to replace the word Book with the word
dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {

  //first match the case of the first letter of after with the first letter of befoe

  let beforeCase = "";
  let afterCase = "";
  if(before[0].toLowerCase() === before[0]){
    console.log('before is already lower')
    beforeCase = 'lower';
  }
  else{
    console.log('before is already upper')
    beforeCase = "upper";
  }
  if(after[0].toLowerCase() === after[0]){
    console.log('after is already lower')
    afterCase = 'lower';
  }
  else{
    console.log('after is already upper')
    afterCase = "upper";
  }

  let finalAfter = "";

  if(beforeCase == "upper"){
    console.log('got into first if');
    let newAfter = after.split("");
    newAfter[0] = newAfter[0].toUpperCase();
    finalAfter = newAfter.join("");
    console.log("finalAfter", finalAfter);
  }
  else if(beforeCase == "lower"){
    console.log('got into 2nd if');
    let newAfter = after.split("");
    newAfter[0] = newAfter[0].toLowerCase();
    finalAfter = newAfter.join("");
    console.log("finalAfter", finalAfter);
  }

  //then perform the search and replace with the new after

  console.log("str", str);
  console.log("before", before, "finalAfter", finalAfter)
  return str.replace(before, finalAfter);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));
