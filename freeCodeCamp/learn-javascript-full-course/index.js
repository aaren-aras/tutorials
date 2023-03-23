/* "Learn JavaScript - Full Course for Beginners" [freeCodeCamp] {3h30m} (https://bit.ly/3I7EBjk) */

/* Data Types: 
  undefined (not given a value yet), 
  null (given the value "nothing"), 
  boolean (true/false), 
  string: 
  symbol: unique immutable primitive type
  number:
  object */

// Variables store and manipulate values in computer's memory in dynamic fashion; storage space/label for your data
// can use throughout whole program
var myName = "Aaren";
// Can set to other data types later
myName = 8;

// only within scope of where it's used (e.g., within a function)
let ourName = "freeCodeCamp";
// can never change
const pi = 3.14;

/* Declaration, Initialization, and Assignment */
// https://stackoverflow.com/questions/2614072/java-define-terms-initialization-declaration-and-assignment
// declaring variable
let a;
// declaring + assigning (initializing) variable
let b = 2;
console.log(a);

// assigning later
a = 7;
// assigning contents of `a` to `b`
b = a;
console.log(a);

// Use camelCase for variable names!
let sum = 10 + 10;
let diff = 10 - 10;
let product = 10 * 10;
let quotient = 10 / 10;
// very useful for checking even (__ % 2 = 0) and odd (__ % 2 != 0)
let remainder = 10 % 10;
console.log(sum, diff, product, quotient, remainder);

/* Incrementing and Decrementing */
let myVar = 68;
console.log(myVar++);
console.log(myVar--);

// Decimals
let prod = 2.0 * 2.5;
console.log(prod);

/* Augmented Math Operations */
let aug = 5;
// Output: 10 5 25 5
console.log((aug += 5), (aug -= 5), (aug *= 5), (aug /= 5));

/* String Variables: " ", ' ', ` ` */
// "Beth" and "Harmon" are examples of string literals
let firstName = "Beth";
let lastName = "Harmon";

// Backslahes (\) are escape chars that change meaning of subsequent symbol
let myStr1 = 'I am a " double quoted" string inside "double quotes"';
let myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr1, myStr2);

/* Escape Sequences
  Single quote: \'
  Double quote: \"
  Backslash: \\
  New line: \n
  Carriage return: \r (resets cursor's position to beginning of text line)
  Tab: \t
  Backspace: \b
  Form feed: \f (page separator)
*/

console.log("FirstLine\n\t\\SecondLine\nThirdLine");
console.log("Hello \rWorld"); // Output: World

/* String Concatenation: +, += */
let concatStr = "I come first, and " + "you come second.";
concatStr += "Regardless, we both win!";
