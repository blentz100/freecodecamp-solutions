/*
 * Match a Literal String with Different Possibilities
Using regexes like /coding/, you can look for the pattern coding in another
string.

This is powerful to search single strings, but it's limited to only one pattern.
You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you
wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding
more patterns with more OR operators separating them, like /yes|no|maybe/.

Complete the regex petRegex to match the pets dog, cat, bird, or fish.
*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result)
