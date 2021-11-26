/*
 * Match Beginning String Patterns
Prior challenges showed that regular expressions can be used to look for a
number of matches. They are also used to search for patterns in specific
positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set
to create a negated character set in the form [^thingsThatWillNotBeMatched].
Outside of a character set, the caret is used to search for patterns at the
beginning of strings.

let firstString = "Ricky is first and can be found."; let firstRegex = /^Ricky/;
firstRegex.test(firstString); let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); The first test call would return true, while the
second would return false.

Use the caret character in a regex to find Cal only in the beginning of the
string rickyAndCal.
*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//verify the output is true
console.log(result)

//run another test to see how match works
let result2 = rickyAndCal.match(calRegex);
console.log(result2)
