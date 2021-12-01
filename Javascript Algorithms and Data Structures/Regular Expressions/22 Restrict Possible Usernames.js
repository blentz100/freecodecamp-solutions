/*
 * Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.

*/

// the solution below works for all cases except A1 

let username = "Z97";
let userCheck = /^[a-z][a-z]+[0-9]*$|^[a-z]{2,}$|^[a-z][0-9][0-9]$/gi; // Change this line
let result = userCheck.test(username);
let match = username.match(userCheck)
console.log('myresults:')
console.log(result)
console.log(match)


//this took a few days to solve, probably not the most efficient solution but it works, had to break it up into 3 different groups

//this solves all except alternating letters and characters in the middle
//let userCheck = /[A-Z]+[a-z0-9]{2}[0-9]*$|^[a-z]{2}$/i; // Change this line

//this fails the J and A1 tests
//let userCheck = /^[a-z]{1,}[0-9]*$|^[a-z]{2,}$/gi; // Change this line
