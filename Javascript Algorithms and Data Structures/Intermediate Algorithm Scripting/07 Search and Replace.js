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
    after = 'lower';
  }
  else{
    console.log('after is already upper')
    after = "upper";
  }

  if(beforeCase !== afterCase){
    //in here change the case to match
  }

  //then perform the search and replace with the new after

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "Leaped");
