/*Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/



function spinalCase(str) {

  //iterate over the string and add dashes if the case changes to break it up into words
  let solutionStr = str;

  for(let i = 0; i < str.length; i++){
    let currentLetter = str[i];
    let nextLetter = str[i+1];

    let currentLetterCase = "";
    let nextLetterCase = "";

    if(str[i] == str[i].toLowerCase()){
      currentLetterCase = 'lower';
    }
    else{
      currentLetterCase = 'upper'
    }

    if(str[i+1] == str[i+1].toLowerCase()){
      nextLetterCase = 'lower';
    }
    else{
      nextLetterCase = 'upper'
    }
    //console.log('current letter is: ' + currentLetter + ". and the case is: " + currentLetterCase);
    //console.log('next letter is: ' + nextLetter + ". and the case is: " + nextLetterCase);

    //if current is lower and next is upper, we need to insert a dash
    if(currentLetterCase == "lower" && nextLetterCase == 'upper'){
      console.log('now we need to insert a dash')
      solutionStr = solutionStr.slice(0,i+1) + "-" + solutionStr.slice(i+1);
      
      console.log('*******')
      console.log(solutionStr)
      console.log('*******')
    }

  }
  //return str.split(/\/).join("-").toLowerCase();
  return 9999
}

console.log(spinalCase('ThisIsSpinalTap'));
