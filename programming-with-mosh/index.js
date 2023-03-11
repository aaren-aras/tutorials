// SEPARATION OF CONCERNS PRINCIPLE (Separate HTML, CSS, and JS)
console.log('Nandri, vanakam!'); 

// Variables: Temporarily store data in computer's memory with a name and value
// before ES6, we use "var" to declare variable; ES6 forward, we use "let"
let name = 'Aaren'; // by default, defined as "undefined"; can also use double quotes (optional); case-sensitive btw btw (firstName is diff from FirstName)
let firstName = 'Aaren'; // conventionally, use camelCase!!!
console.log(name);
let something1 = 1, something2; // but best practice, keep variables on separate lines 
// Variable names can't be reserved keywords ("let", "if", "else", "true", "false"), should be meaningful, shouldn't start with number (1name)

const interestRate = 0.3; // can't change value, unlike "let"
console.log(interestRate);

// Primitive/Value Types 
let alias1 = 'CheesyPizzaJokes'; // String Literal ("fixed" value)
let age = 19; // Number Literal
let isApproved = true; // Boolean Literal
let penis; // or "=undefined"; Undefined (val doesn't exist in compiler); undefined is both a TYPE and VALUE
let vagina = "null"; // null (explicitly and intentionally clear value of variable for later)
// There's also symbols!

// JavaScript is a dynamic-typing language (variable type can change in runtime), not statically-typed (cannot change in runtime); use "typeof {variable name}" to check variable name
// Unlike other languages, JavaScript doesn't differentiate between floating point and integers, they're both "numbers"
console.log(alias1, age, isApproved, penis, vagina); 

// REFERENCE TYPES 
// Objects possess "properties" and "methods"; group related variables together to make code cleaner!

let person = { // "object literal" holds key-value pairs
    name: 'Beth Harmon',
    age: 22 
};
console.log(person);

// Dot Notation (preferable since more concise)
person.name = "Benny Watts";
console.log(person.name);

// Bracket Notation (sometimes you don't name of target property, maybe its selected during runtime, in which case, use this!)
let selection = 'name';
person[selection] = "D.L. Townes";
console.log(person.name);

// Arrays (technically also object in JS): Data struc used to represent a LIST of items
let selectedColours = ['red', 'blue']; // [] = array literal (represent empty array)
console.log(selectedColours); // refer to indices as you would in other languages 
selectedColours[2] = 'green'; // array size/length can change 
selectedColours[3] = 38;  // several types of variable are allowed!
selectedColours.length; // JS arrays come with a wide ARRAY (HahHAhahHA) of pre-defined/built-in methods

// Functions (reusable statements of code)
function greet(name, lastName) { // "name" is a PARAMETER to "greet" function (only useful within this function)
    console.log('Yeo ' + name + ' ' + lastName); // concatenate strings
} // Don't need a semi-colon at the end! 

greet('Appa'); // "Appa" is an ARGUMENT to greet function (value we're supplying); if you don't define "lastName", it's logged as "undefined"
greet('Kunjumani', 'Koosoomani'); 

function square (num) {
    return num * num;
}
console.log(square(78)); 




