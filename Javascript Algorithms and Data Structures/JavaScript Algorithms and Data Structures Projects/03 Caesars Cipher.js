/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/


function rot13(str) {
  let reference = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B",
    "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"] 

    let solution = ""
    for(character of str){
      if(character.charCodeAt() >= 65 && character.charCodeAt() <= 90 ){
         solution += (reference[reference.indexOf(character) + 13]);
      }
      else solution += character;     
    }
  return solution;
}

console.log(rot13("SERR PBQR PNZC"));


