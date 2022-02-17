/*
 * Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/


function spinalCase(str) {

  
  //convert str to array to allow us to splice it
  let strArray = str.split("");

  //iterate over the string and add dashes if the case changes to break it up into words, but don't add a dash in spots it already exists
  for(let i = 0; i < strArray.length - 1; i++){
    let currentLetter = strArray[i];
    let nextLetter = strArray[i+1];

    let currentLetterCase = "";
    let nextLetterCase = "";

    //if the currentLetter is already a space or underscore, don't worry about adding a dash here, we will handle that at the very end when we split the string and join it with dashes in place. Maybe we could have handled everything at the end with a split and join, but I didn't know how to handle the case of nothing separating the words except seeing a lowercase letter and then an upperCase letter
    if (currentLetter == "_" | currentLetter == " "){
      continue;
    }

    if(currentLetter == currentLetter.toLowerCase()){
      currentLetterCase = 'lower';
    }
    else{
      currentLetterCase = 'upper'
    }
    if(nextLetter == nextLetter.toLowerCase()){
      nextLetterCase = 'lower';
    }
    else{
      nextLetterCase = 'upper'
    }
    //console.log('current letter is: ' + currentLetter + ". and the case is: " + currentLetterCase);
    //console.log('next letter is: ' + nextLetter + ". and the case is: " + nextLetterCase);

    //if current is lower and next is upper, we need to insert a dash
    if(currentLetterCase == "lower" && nextLetterCase == 'upper'){
      console.log('*******')
      console.log('now we need to insert a dash with splice')
      strArray.splice(i+1,0,'-')
      console.log("strArray: " + strArray)
      console.log('*******\n')
      //need to increment i by 1 since we just made the array longer by 1, so we don't cause
      //and infinite loop
      i++
    }
  }
  let solutionStr = strArray.join("");
  console.log('solutionStr is: ' + solutionStr.toLowerCase())
  return solutionStr.split(/-|_|\s/).join("-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));


