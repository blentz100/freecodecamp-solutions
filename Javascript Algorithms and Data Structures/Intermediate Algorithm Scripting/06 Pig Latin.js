/*Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant
cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be
English words in all lowercase.
*/

function translatePigLatin(str) {

  if(str.match(/^(a|e|i|o|u)./)){
    console.log('starts with a vowel')
    return (str + "way")
  }
  else{
    console.log('starts with a consonant')
    let consonantCluster = str.match(/^[bcdfghjklmnpqrstvwxyz]*/);
    console.log("consonantCluster", consonantCluster)
    console.log(consonantCluster.toString())
    let solutionStr = str.split("").splice(consonantCluster.toString().length)
    solutionStr = solutionStr.join("") + consonantCluster.toString() + "ay";
    console.log("solutionStr", solutionStr)
    return solutionStr;
  }

}

console.log(translatePigLatin("california"));


