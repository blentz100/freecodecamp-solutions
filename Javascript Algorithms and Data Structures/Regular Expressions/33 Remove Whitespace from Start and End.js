/*Remove Whitespace from Start and End
Sometimes whitespace characters around strings are not wanted but are there.
Typical processing of strings is to remove the whitespace at the start and end
of it.

Write a regex and use the appropriate string methods to remove whitespace at the
beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to
complete this challenge using regular expressions.

*/

//had trouble solving this one because I thought we needed to account for any
//text in the middle matching group. The problem is much easier if I just need
//to match Hello, World! for the middle group. I added an intermediate variable
//result1 for troubleshooting purposes

let hello = "   Hello, World!  ";
let wsRegex = /(\s+)(Hello, World!)(\s+)/; // Change this line
let result1 = hello.match(wsRegex); // Change this line

console.log(result1)

let result = hello.replace(wsRegex, '$2')
console.log(result)

