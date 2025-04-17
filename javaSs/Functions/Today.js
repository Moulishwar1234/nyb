// // Function:-

// // it is a 2 types 
// // 1. function declaration
// // 2. function expression:-it s also a 3 types
// // a. function expression with named function
// // b. function expression with anonymous function
// // c. function expression with arrow function
// // function expression with named function:
// // sys:
// // function functionName() {
// //     return; // you can return a value here
// // }
// // function put() {
// //     return "Hello, World!";
// // }

// // console.log(put()); 

// // //function expression with anonymous function

// // // sys:
// // const greet = function() {
// //     return "Hi there!";
// // };

// // greet();

// // //  function expression with arrow function
// // // sys:
// // const person = () => {
// //     return "Hello from arrow function!";
// // };

// // person();



// // Parameter and arguments (or) place holder
// // sys:
// // function add(a, b) {
// //     return a + b;
// // }
// // console.log(add(5, 7));
// //  they are used to store the values of the function decleration
// //  they are used to pass the values to the function declaration

// // function add (a,b,c){
//     // console.log(a+b-c);
// //     console.log(a,b,c);



// // }
// // add(12,300,300)


// // // Defaltparameter
// // // sys:
// // function add(a,b=null,c=10){
// //     console.log(a+b+c);
// //     console.log(a,b,c);
// //     console.log(a*b*c);

// //     }
// //     add(12);
// //     //  default parameter is used to assign a default value to the parameter if no value is passed to

// //     // argumentsobjects---E.S-5
// //     // sys:
// //     function add(a,b,c){
// //         console.log(a+b+c);
// //         console.log(a,b,c);
// //         console.log(a*b*c);
// //         console.log(arguments);

// //         }
// //         add(12,300,300, 367645,7748,8484,84,);



// //         // rest parameter
// //         // sys:
// //         function add(a,b,c,...rest){
// //             console.log(a+b+c);
// //             console.log(a,b,c);
// //             console.log(rest);
// //         }
// //         add(12,300,300, 367645,7748,8484,84)


// //         let A = 10;
// // const B = "Hello";

// // console.log(A, B);

// // sum();

// // function sum() {

// // }



// // function sum(a, b) {
// //     console.log(a + b);
// //   }

// //   sum(1, 2);
// // 1. function expression
// // 2. function declaration
// // 3. arrow function
// // 4. function constructor
// // var let const

// // var a = 10;
// // var b = 20;

// // function sum() {
// //   // block
// //   console.log(a + b);
// // }

// // sum();



// function sum(a, b) {
//     console.log(a + b);
//   }

//   sum(10, 20);
//   const a = 10;
//   const b = 20;

// // 1. Hoisting:- In JavaScript, variable and function declarations are moved to the top of their scope before code execution. This is called hoisting
// // 2. Scope:- Scope is the region of the code where a variable is defined. Ther
// // 3. this keyword:- The this keyword refers to the current object in a function or method
// console.log(a); // undefined (not error!)
// var a = 10;
// // What happens: JS moves var a to the top, so it becomes:
// var a;
// console.log(a);
// a = 10;
// //  But with let or const, hoisting happens differently. Accessing them before declaration throws an error.
// console.log(b); //  ReferenceError
// let b = 20;

// // Closure:-
// // A closure is a function that has access to its outer function's scope, even when the outer


// // 1.RedeclarationDeclaring the same variable name again in the same scope.
// // var (Allowed)
// var x = 10;
// var x = 20;  //  Allowed with var
// console.log(x); // 20
// // let (Not Allowed)
// let x = 10;
// let x = 20;  //  Error
// console.log(x); // 10

// //  let y = 10;
// // let y = 20;  //  SyntaxError: Identifier 'y' has already been declared

// // const (Not Allowed)
// const x = 10;
// const x = 20;  //  Error
// console.log(x); // 10

// //  2. Reassignment:-
// // var (Allowed)
// var city = "Paris";
// city = "London"; // Reassignment allowed for var
// console.log(city); // London
// // let (Allowed)
// let name = "Alice";
// name = "Bob"; // Reassignment allowed for let
// console.log(name); // Bob
// // const (Not Allowed)
// const PI = 3.14;
// PI = 3.14159; //  Error: Assignment to constant variable
// console.log(PI); // 3.14
// // 3. Reinitialization:-
// // var (Allowed)
// var x = 10;
// x = 20;  // Allowed with var
// // let (Not Allowed)
// let x = 10;
// x = 20;  //  Error
// // const (Not Allowed)
// const x = 10;
// x = 20;  //  Error



// // Term	What it Means	var	let	const
// // Redeclaration	Declare same variable again	         Allowed	        Error	         Error
// // Reassignment	Assign a new value to the variable	     Allowed	    Allowed	         Error
// // Reinitialization	Reassign after initial assignment	 Allowed	Allowed	         Error

// IIFE: -
//     // IIFE
//     (function () {
//         console.log("Hello, World!");
//     })(); // Output: Hello, World!
    
// //  IIFE with arguments
// (function (name) {
//     console.log("Hello, " + name);
// })("John"); // Output: Hello, John
// //  IIFE with return statement
// (function () {
//     return "Hello, World!";
// })(); // Output: Hello, World!

// //  IIFE with function expression
// var func = function () {
//     console.log("Hello, World!");
// };
// func(); // Output: Hello, World!

// //  IIFE with function declaration
// function func() {
//     console.log("Hello, World!");
// }
// func(); // Output: Hello, World!


// function curring:-it is a process of converting a single function with multiple arguments into a function with multiple single argument functions.
function add(a) {
    return function (b) {
    return function (c) { 
    return function (d) {   
        return a + b + c + d;
        }
        }
    }
    }
   
    console.log(add(1)(2)(3)(4)); // Output: 15

    function sub(e) {
        return function (f) {
            return function (g) {
                return function (h) {
                    return e - f - g - h;
                    }
                    }
                    }
                    }
                    console.log(sub(10)(2)(3)(4)); // Output: -9

// recursive function:- calling it self
function factorial(n) {
    if (n == 0) {
        return 1;
        }
            return n * factorial(n - 1);
            }
            console.log(factorial(5)); // Output: 120
 
//  Higher order function:-
 // a function that takes another function as an argument or returns a function as a result
 function outerFunction() {
    function innerFunction() {
        console.log("Hello, World!");
        }
        return innerFunction;
        }
        var inner = outerFunction();
        inner(); // Output: Hello, World!
        //  function that takes another function as an argument
// first class function:-
// a function that can be passed around like any other object
function outerFunction() {
    function innerFunction() {
        console.log("Hello, World!");
        }
        return innerFunction;
    }
    var inner = outerFunction();
    inner();










    















