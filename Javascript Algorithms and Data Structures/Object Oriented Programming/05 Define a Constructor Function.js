/*
 * Define a Constructor Function
Constructors are functions that create new objects. They define properties and
behaviors that will belong to the new object. Think of them as a blueprint for
the creation of new objects.

Here is an example of a constructor:

function Bird() { this.name = "Albert"; this.color = "blue"; this.numLegs = 2; }
This constructor defines a Bird object with properties name, color, and numLegs
set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

Constructors are defined with a capitalized name to distinguish them from other
functions that are not constructors.  Constructors use the keyword this to set
properties of the object they will create. Inside the constructor, this refers
to the new object it will create.  Constructors define properties and behaviors
instead of returning a value as other functions might.  Create a constructor,
Dog, with properties name, color, and numLegs that are set to a string, a
string, and a number, respectively.

*/
//This article is helpful to shed more light on Javascript Constructor Functions
//https://www.programiz.com/javascript/constructor-function#:~:text=In%20JavaScript%2C%20a%20constructor%20function%20is%20used%20to%20create%20objects.&text=In%20the%20above%20example%2C%20function,letter%20of%20your%20constructor%20function.

function Dog()  {
  this.name = "Joe";
  this.color = 'red';
  this.numLegs = 3;
}
