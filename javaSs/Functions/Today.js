// Function:-

// it is a 2 types 
// 1. function declaration
// 2. function expression:-it s also a 3 types
// a. function expression with named function
// b. function expression with anonymous function
// c. function expression with arrow function
// function expression with named function:
// sys:
// function functionName() {
//     return; // you can return a value here
// }
// function put() {
//     return "Hello, World!";
// }

// console.log(put()); 

// //function expression with anonymous function

// // sys:
// const greet = function() {
//     return "Hi there!";
// };

// greet();

// //  function expression with arrow function
// // sys:
// const person = () => {
//     return "Hello from arrow function!";
// };

// person();



// Parameter and arguments (or) place holder
// sys:
function add(a, b) {
    return a + b;
}
console.log(add(5, 7));
//  they are used to store the values of the function decleration
//  they are used to pass the values to the function declaration

function add (a,b,c){
    console.log(a+b-c);
    console.log(a,b,c);
    

    
}
add(12,300,300)


// Defaltparameter
// sys:
function add(a,b=null,c=10){
    console.log(a+b+c);
    console.log(a,b,c);
    console.log(a*b*c);
    
    }
    add(12);
    //  default parameter is used to assign a default value to the parameter if no value is passed to

    // argumentsobjects---E.S-5
    // sys:
    function add(a,b,c){
        console.log(a+b+c);
        console.log(a,b,c);
        console.log(a*b*c);
        console.log(arguments);
        
        }
        add(12,300,300, 367645,7748,8484,84,);
        


        // rest parameter
        // sys:
        function add(a,b,c,...rest){
            console.log(a+b+c);
            console.log(a,b,c);
            console.log(rest);
        }
        add(12,300,300, 367645,7748,8484,84)












