/*
 * Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

*/
function palindrome(str) {
  
  //make everything lowerCase
  let lowerStr = str.toLowerCase();
  
  //strip out all non alpha numeric characters
  let cleanStr = "";
  for (let i = 0; i < lowerStr.length; i++){
    let code = lowerStr[i].charCodeAt();
    if( (code >= 48 && code <= 57) || (code >= 97 && code <= 122) ){
      cleanStr += lowerStr[i]
    }
  }

  //slice it in half depending on the length
  let str1, str2 = ""
  if(cleanStr.length % 2 == 1){
    str1 = cleanStr.slice(0,cleanStr.length / 2)
    str2 = cleanStr.slice((cleanStr.length / 2) +1)
  }
  else{
    str1 = cleanStr.slice(0,cleanStr.length / 2)
    str2 = cleanStr.slice((cleanStr.length / 2) )
  }
  //convert each slice to an array and reverse the second
  let arr1 = str1.split("");
  let arr2 = str2.split("").reverse();

  //compare both arrays with
  if(JSON.stringify(arr1)==JSON.stringify(arr2)){
    return true;
  }
  else{
    return false;
  }
}

palindrome("race")
