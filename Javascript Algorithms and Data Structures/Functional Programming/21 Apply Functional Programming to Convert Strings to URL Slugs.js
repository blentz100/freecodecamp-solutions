/*
 * Apply Functional Programming to Convert Strings to URL Slugs
The last several challenges covered a number of useful array and string methods
that follow functional programming principles. We've also learned about reduce,
which is a powerful method used to reduce problems to simpler forms. From
computing averages to sorting, any array operation can be achieved by applying
it. Recall that map and filter are special cases of reduce.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to part of
the URL for simple bookmarking purposes. For example, if you write a Medium post
titled Stop Using Reduce, it's likely the URL would have some form of the title
string in it (.../stop-using-reduce). You may have already noticed this on the
freeCodeCamp site.

Fill in the urlSlug function so it converts a string title and returns the
hyphenated version for the URL. You can use any of the methods covered in this
section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces
*/

// Only change code below this line
function urlSlug(title) {

  console.log("initial input is: " + title)
  
  // convert string to all lowercase
  let lowerCaseString = title.toLowerCase();
  console.log('lowerCaseString: ' + lowerCaseString)

  // convert string to array
  let myArr = lowerCaseString.split(" ");
  console.log("myArr is: " + myArr)

  //filter out any elements that are empty
  let myfilteredArr = myArr.filter(element => {
    if(element){
      return element
    }
  });
  console.log("myfilteredArr is: " + myfilteredArr)

   //remove leading and trailing on each element with map
  let myTrimmedString = myfilteredArr.map(word => word.trim());
  console.log("myTrimmedString: " + myTrimmedString)

  // then join the array back using -
  let myHyphenatedString = myTrimmedString.join("-");
  console.log("myHyphenatedString is: " + myHyphenatedString);

  // then remove the last - at the very end
  // it looks like with join we don't even need this step, nice!

  return myHyphenatedString;

}
// Only change code above this line
console.log(urlSlug(" Winter is  Coming"));
