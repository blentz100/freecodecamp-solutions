function telephoneCheck(str) {

  //use regex
  //start writing patterns to match each of the different cases
  //everything else fails

  let phoneRegex = /^\d{3}-\d{3}-\d{4}$|^1\s\d{3}-\d{3}-\d{4}$|^1\s\(\d{3}\)\s\d{3}-\d{4}$|^\d{10}$/;

  


  return phoneRegex.test(str);

}

console.log(telephoneCheck("1 (555) 555-5555"));
