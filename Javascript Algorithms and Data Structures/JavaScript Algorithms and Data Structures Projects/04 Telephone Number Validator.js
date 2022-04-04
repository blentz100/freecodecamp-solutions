/*Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the
format of a valid US number. The following are examples of valid formats for US
numbers (refer to the tests below for other variants):

555-555-5555 (555)555-5555 (555) 555-5555 555 555 5555 5555555555 1 555 555
5555 For this challenge you will be presented with a string such as
800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US
phone number based on any combination of the formats provided above. The area
code is required. If the country code is provided, you must confirm that the
country code is 1. Return true if the string is a valid US phone number;
otherwise return false.
*/

function telephoneCheck(str) {

  //use regex
  //start writing patterns to match each of the different cases
  //everything else fails

  let phoneRegex1 = /^\d{3}-\d{3}-\d{4}$/;
  let phoneRegex2 = /^\(\d{3}\)\d{3}-\d{4}$/;
  let phoneRegex3 = /^1\(\d{3}\)\d{3}-\d{4}$/;
  let phoneRegex4 = /^1?\s?\d{3}-\d{3}-\d{4}$/
  let phoneRegex5 = /^1?\s?\d{3}\s\d{3}\s\d{4}$/
  let phoneRegex6 = /^1\s?\(\d{3}\)\s\d{3}-\d{4}$/
  let phoneRegex7 = /^\d{10}$/
 

  return (phoneRegex1.test(str)||
          phoneRegex2.test(str)||
          phoneRegex3.test(str)||
          phoneRegex4.test(str)||
          phoneRegex5.test(str)||
          phoneRegex6.test(str)||
          phoneRegex7.test(str));
}

console.log(telephoneCheck("(555)555-5555"));
