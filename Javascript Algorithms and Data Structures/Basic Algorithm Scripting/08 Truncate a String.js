/*function truncateString(str, num) {
  
  if(str.length > num){
    let answer = str.slice(0,num);
    answer = answer + '...';
    console.log('answer is: ' + answer)
    return answer;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
*/
function truncateString(str, num) {
  
  if(str.length > num){
    let answer = str.slice(0,num);
    answer = answer + '...';
    console.log('answer is: ' + answer)
    return answer;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
