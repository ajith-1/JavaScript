
/* 1.Javascript is a high-level programming language primarily used to create intractive and dynamic web content.
2.it allows developers to build responsive user interface, manipulate web pages in real time handle events, and communicate with servers.*/


// JavaScript Topics

// 1. Variables & Values (variables are named storage for data values. they allow you to store and manipulate data with your program.)

// types of variables --- let, const and var

// Declare and initialize a variable
let x = 10;
console.log(x); // result -- 10

// Declare a variable
let y;
console.log(y); // result -- undefined 

// Initialize a variable
y = 20;
console.log(y); // result -- 20

// Naming conversation 
let userName = 'John'; // Correct camelCase convertion
let user_name = 'Max'; // Underscore is not recommended but still valid

// Incorrect variable names
// let 5date=5; Invalid variable names connot start with a number
// let John&Jane='Friends'; Invalid variable names connot contain with a special character 

// Reserved keywords
// let new = 'date';
// let function = 'date';

// Symbols in variable names
// let #function = 'date';
// let @function = 'date';
let $function = 'date';

// Constants

let sun = 'Sun raise in the East';
console.log(sun); // result -- "Sun raise in the East" 

sun = 'Sun raise in the West';
console.log(sun); // result -- "Sun raise in the West" // Reassigned value changed in let keyword. 

// const must decleare and initialize 

const PI = 3.1415;
console.log(PI); // result -- 3.1415

// PI='test';
// console.log(PI); // result -- test // Reassigned value cannot be changed in const keyword. 

// var (var is a scope level variable)

var job = 'Developer';
console.log(job); // result -- Developer

job = 'Project Manager';
console.log(job); // result -- Project Manager 

var a = 1;
console.log(a);
var a = 5; // Redeclaration is allowed 
console.log(a);


let b = 10;
// let b=20; // Redeclaration is not allowed 
b = 20; // Reassignment is allowed
console.log(b);

const c = 1;
console.log(c);
// c = 3; // Reassignment is allowed

/* Scope of variable will on functions & loops
var : Function scoped.
let : Block scoped.
const : Block scoped.
*/

// ---------------------DATA TYPES-----------------------

// Datatypes (Data types are rhe different kinds of information thst ypu can store in variables.Each type of information has a specific purpose and behavior.)
/* 1. Permitive Data Types
        Number, String, Boolean, Undefined, Null, Symbol, Big Int.
   2. Non-Permitive Data Types
        Object, Array, Function, Data.
*/

// Javascript is Dynamic Typing
// Primitive and Object Type

//Primitive Data Types
//1.Number - Represents both integer and floating-point numbers.
let age = 25;
console.log(age); // result -- 25
console.log(typeof age); // result -- number 

age = '25';
console.log(age); // result -- 25
console.log(typeof age); // result -- string


let price = 15.45;
console.log(price); // result -- 15.45
console.log(typeof price); // result -- number


//2.String - Represents a sequence of characters.
let greet = 'Hello world';
console.log(greet); // result -- Hello world
console.log(typeof greet); // result -- string 

//3.Boolean - Represents a logical entity and can have two values: true or false.
let isActive = true;
console.log(isActive); // result -- true
isActive = false;
console.log(isActive); // result -- false

//4.Undefined - A variable that has been declared but not assigned a value.
let uninitialized;
console.log(uninitialized); // result -- undefined

//5.Null - Represents the intentional absence of any object value.
let box = null;
console.log(box); // result -- null

//6.Symbol - Represents a unique and immutable value, often used as object property keys.
let unique = Symbol('key');
console.log(unique); // result -- Symbol('key')

//7.BigInt - Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number type).
let largeNumber = BigInt(979696716432788754);
let largerNumber = 979696716432788754n;
console.log(largeNumber);  // result -- 979696716432788754n
console.log(largerNumber); // result -- 979696716432788754n


//Non-Primitive Data Types
//1.Object
/*Represents a collection of properties, each consisting of a key (usually a string) 
and a value (which can be any data type, including another object).*/

let person = {
    name:'John',
    age:25,
    isEmployed:true,
};

console.log(person); // result -- full object
console.log(person.name); // result -- John
console.log(person.age); // result -- 25
console.log(person.isEmployed); // result -- true

let emptyObject = {};
console.log(emptyObject); // result -- Object( )

//2.Array
//A special type of object used for storing ordered collections of values.
let numbers = [2,4,3,6,8,5];
console.log(numbers); // result -- Array(6) [2,4,3,6,8,5]

let mixedData = [2,'two',true,null];
console.log(numbers); // result -- Array(4) [2,'two',true,null]

//3.Function
//A special type of object that is callable and can perform an action.
function greeting(){
    console.log('Hello guys');
}

greeting();  // calling function // result -- Hello guys

//4.Date - A built-in object for handling dates and times.

let now = new Date();
console.log(now); // result -- current date

// ------------------------------------------------------------------------------------------

//Operators
/*
1.Arithmetic Operators
2.Assignment Operators
3.Comparison Operators
4.Logical Operators
5.String Operators
*/

//1.Arithmetic Operators - Arithmetic operators are used to perform basic mathematical operations
//1.1)Addition (+)
let sum = 5+2;
console.log(sum);

//1.2)Subtraction (-)
let sub = 5-2;
console.log(sub);

//1.3)Multiplication (*)
let multi = 5*2;
console.log(multi);

//1.4)Division (/)
let div = 10/2;
console.log(div);

//1.5)Modulus (%)
let reminder = 5%2;
console.log(reminder);

//1.6)Exponentiation (**)
let power = 2**3;
console.log(power);

//1.7)Increment (++)
let counter = 5;
counter++;
console.log('increment : ' , counter);

//1.8)Decrement (--)
counter--;
console.log("decrement : " , counter);

//2.Assignment Operators - Assignment operators are used to assign values to variables.
//2.1)Assignment (=)
let z = 10;
console.log('Assignment : ' , z);

//2.2)Addition Assignment (+=)
z+=2;
console.log('Addition Assignment : ' , z);

//2.3)Subtraction Assignment (-=):
z-=2;
console.log('Subtraction Assignment : ' , z);

//2.4)Multiplication Assignment (*=):
z*=2;
console.log('Multiplication Assignment : ' , z);

//2.5)Division Assignment (/=):
z/=2;
console.log('Division Assignment : ' , z);

//2.6)Modulus Assignment (%=):
z%=3;
console.log('Modulus Assignment : ' , z);

//2.7)Exponentiation Assignment (**=)
let expo = 2;
expo **=3;
console.log('Exponentiation Assignment : ' , expo)
//3.Comparison Operators - Comparison operators are used to compare two values.
console.error('comparison operators');
//3.1)Equal (==)
console.log ('Equal 5==5 : ' , 8==8);    //result true
console.log ("Equal '5'==5 : " , '5'==5);  //result true
//3.2)Strict Equal (===)
console.log ('Equal 5===5 : ' , 5===5);    //result true
console.log ('Equal "5"===5 : ' , '5'===5);  //result false

//3.4)Not Equal (!=)
console.log ('Not Equal 5!=3 : ' , 5!=3);    //result true
console.log ('Not Equal 5!=5 : ' , 5!=5);  //result false
console.log ("Not Equal '5'!=5 : " , '5'!=5);  //result false


//3.5)Strict Not Equal (!==)
console.log ('Not Equal 5!==3 : ' , 5!==3);    //result true
console.log ('Not Equal 5!==5 : ' , 5!==5);  //result false
console.log ("Not Equal '5'!==5 : " , '5'!==5);  //result true

//3.6)Greater Than (>)
console.log ('Greater than 5>3 : ' , 5>3);    //result true
console.log ('Greater than 5>8 : ' , 5>8);    //result false

//3.7)Less Than (<)
console.log ('Less than 5<3 : ' , 5<3);    //result false
console.log ('Less than 5<8 : ' , 5<8);    //result true

//3.8)Greater Than or Equal (>=)
console.log ('Greater than or Equal 5>=3 : ' , 5>=3);    //result true
console.log ('Greater than or Equal 5>=5 : ' , 5>=5);    //result true

//3.9)Less Than or Equal (<=)
console.log ('Less than or Equal 5<=3 : ' , 5<3);    //result false
console.log ('Less than or Equal 5<=8 : ' , 5<8);    //result true

//4.Logical Operators - Logical operators are used to combine multiple conditions.

//4.1)Logical AND (&&)

//4.2)Logical OR (||)

//4.3)Logical NOT (!)

//Example

// String Operators

//String concatenation

//String with Different Quotes:

//Concatenation with Object Properties:

//Template literal

//Order Prcedence

// New Examples with - and /

// Additional Combined Example

// -------------------------------------------------------------

// Decision Making: if, if...else, else if
console.log('Decision Making');

// Example 1: if statement

// Example 2: if...else statement

// Example 3: else if statement

// Example 4: Nested if statements
// Variables

// Decision logic

// Switch Statement

//Ternary Operator

// ---------------------------------------------------

//Type Conversion (Manually)
/*Type conversion (also known as type casting) is when you explicitly convert a
value from one type to another. JavaScript provides several functions for this purpose.*/

// Type Conversion
console.log('Type Conversion');

// String to Number

// Number to String

// Boolean to String

// String to Boolean

// Parsing integers and floats

//Type Coercion
/*Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. */

// Type Coercion (Automatically)
console.log('Type Coercion');

// String and Number

// Boolean and Number

// Coercion occurs in equality checks (==), but not in strict equality checks (===).
// Equality checks

// -------------------------------------------

// Truthy and Falsy Values
console.log('Truthy and Falsy Values');

// Falsy Values:

// Truthy Values:

// -----------------strict mode--------------------------

// -----------------------------------------------------

// Functions
// Functions are pieces of code that we can reuse again and again in our code

// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */

// Calling the function

// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values
that will be passed to the function.The passing value is called an argument.*/

// Default Parameter

// Function with Return Type

///////////////////////////////////////////////////////////////////////

// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/

// With Argument

// Function Expression with Return Type

///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.

// With Argument

// Arrow Function with Return Type

// Shorter Way

//Function Calling Other Function

//Anonymous Functions: Later on Course on Arrays

/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */

// ------------------------------------------------------

// Loops
/*
In programming, loops are used to execute a block of code repeatedly until
a specific condition is met or for a specified number of times.
They provide a way to perform repetitive tasks efficiently without writing
the same code multiple times.
*/

/*
Types of Loops
1. For Loop
2. While Loop
3. Do While Loop
 */

// For Loop Example

//Looping Backwards

//Nested Loop

// While Loop Example

// Do While Loop Example

// ------------------------------------------------------

/*
An array is a data structure that can hold multiple values at once.
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/

// Using square brackets

// Accessing Array Elements:

// Change Value in Array

/*
Using for loop to print array with hard-coded condition
it will create issue if condition is like i < 5
*/

/*
To avoid hard-coded condition switch to array methods
*/
// We can use array length

// More Array Methods

/*
Add element to array
Adds one or more elements to the end of an array
and returns the new length of the array.
*/

/*
Remove element from array
Removes the last element from an array and returns that element.
*/

/*
Adds one or more elements to the beginning of an array and returns the new length of the array.
*/

/*
Removes the first element from an array and returns that element.
*/

// Anonymous Functions

// Combining Arrays

// Finding an Element Index, If not found it will return -1

// Array with mixed data types

// Array of Employee Objects

//Fliters

// Map

// --------------------------------------------------------------------

// Adding a new property

// Modifying an existing property

// Object with method

// Destructuring assignment

//Nested Complex Objects

// Accessing properties of the nested objects

// Destructure owner object

// Output details about the restaurant

// Output the menu items using destructuring within forEach

// -------------------------------------------------------------------

/*
Document Object Model (DOM) manipulation
The following the way to Selecting & Modifying Element in DOM
1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll
*/

// -----------------------------EVENT HANDLING PART 1-------------------------------------
// -----------------------------EVENT HANDLING PART 2-------------------------------------
// -----------------------------EVENT HANDLING PART 3-------------------------------------
// -----------------------------EVENT HANDLING PART 4------------------------------------

// -----------------------------CLASS & OBJECTS-----------------------------------------

// -----------------------------------------------------------

/*
Arrow Functions
Variable Declarations
Template Literals
Object Destructuring
Default Parameters
Spread Operator
*/

// -------------------------------------------------------


