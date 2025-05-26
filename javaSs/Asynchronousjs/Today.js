// Asynchronousjs
// callback 
// Promise 
// async and await 

// 1. Callback
// function getUserName(callback) {
//     setTimeout(() =>
//         callback("John Doe"), 2000);
//     }
//     getUserName(name =>
//         console.log(name));
//         // Output: John Doe

// console.log("one");
// window.setTimeout(()=>{
//     console.log('two');
    
// },3000)
// console.log('three');




// callback:-A function that can be passsed as an argument other functions, and can be called from within those functions.

function one(nextFunction) {
    var a = 10;
    window.setTimeout(() => {
        console.log("one function");
        nextFunction();
    }, 4000);
}

function two(nextFunction) {
    window.setTimeout(() => {
        console.log("two function");
        nextFunction();
    }, 5000);
}

function three(nextFunction) {
    window.setTimeout(() => {
        console.log("three function");
        nextFunction();
    }, 6000);
}

function four() {
    console.log("four function");
}

// Run the callbacks in sequence
one(() => {
    two(() => {
        three(() => {
            four();
        });
    });
});

// Output: one function, two function, three function, four function


// Promise :-
// A promise is a result of an operation that hasn't completed yet, but will complete at som
// time in the future.
// A promise is an object that is used to handle asynchronous operations in JavaScript.
// It is used to handle the situation when the result of an operation is not available yet, but
// will be available at some point in the future.
// A promise is created using the Promise constructor, which takes a function as an argument.
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise was rejected.");
  }
});

myPromise
  .then(function(result) {
    console.log(result); // This will print if promise is resolved
  })
  .catch(function(error) {
    console.log(error); // This will print if promise is rejected
  })
 .finally(function() {
    console.log("This runs no matter what.");
  });
   
