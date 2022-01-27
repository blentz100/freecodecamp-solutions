/*
 * Refactor Global Variables Out of Functions
So far, we have seen two distinct principles for functional programming:

Don't alter a variable or object - create new variables and objects and return
them if need be from a function. Hint: using something like const newArr =
arrVar, where arrVar is an array will simply create a reference to the existing
variable and not a copy. So changing a value in newArr would change the value in
arrVar.

Declare function parameters - any computation inside a function depends only on
the arguments passed to the function, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles
when working with arrays or more complex objects.

Rewrite the code so the global array bookList is not changed inside either
function. The add function should add the given bookName to the end of the array
passed to it and return a new array (list). The remove function should remove
the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be
added before the bookName parameter.
*/

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

//This article helped me figure out how to make a copy of the array with making a reference to it
//I was stuck on that for a while
// https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
// the key was using the spread operator

// Change code below this line
function add(incomingBookList, bookName) {
  const myBookList = [...incomingBookList];
  console.log("++++++ top of add function ");
  console.log("myBookList is: " + myBookList);
  console.log("bookName is: " + bookName);
  console.log("bookList is: " + bookList);
  myBookList.push(bookName);
  console.log("++++++ after pushing the book ")
  console.log("myBookList is: " + myBookList);  
  console.log("bookName is: " + bookName);
  console.log("bookList is: " + bookList);

  console.log("++++++ bottom of add function ")
  return myBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(myBookList, bookName) {
  const book_index = myBookList.indexOf(bookName);
  if (book_index >= 0) {

    myBookList.splice(book_index, 1);
    return myBookList;

    // Change code above this line
    }
}
const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


