// --Loops:-loops are a 2 types 
// 1. conditional loop :-  are 4 types
// a. for loop :- used to iterate over a sequence (such as a list, tupl
// b. while loop :- used to execute a block of code as long as a condition is
// c. do-while loop :- used to execute a block of code as long as a
// d.infinity loop

// entry controller is a condistion checking if condition is true then function :- 0 for loop, while loop 
// do while loop :-is a first check the function and next condition checking :-1 


// for (initialization; condition; increment) {
//     // code block
//   }
  

// let i = 10
// for ( i = 0; i < 100; i++) {
//     console.log(i);
//   }


// to print a 10 even numbers 
// let i = 1
// for (i = 2; i <= 20; i += 2) {
//     console.log(i);
//   }

// for (let i = 1; i<= 10; i++){
//     console.log(i*2);
    
// }

// do while:-
// for(declaration; condition; updation)

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// Infinity
// Never-ending loop
// Condition always true

// let a = 2
// for (a; a > 1; a++){
//     console.log(a);
    
// }
  
// Unconditional Loops in JavaScript
// Non-Primitive Data Types
// array object 

var person = {
    name: "John",
    age: 30,
    occupation: "Software Engineer",
    address: 'ATP',
}
var detalis = ['mouli', 25, 'ATP'];
console.log(person);
console.log(person.address);
console.log(person.age);
console.log(person.name);
console.log(person.occupation);

for (var i = 0; i < detalis.length; i++){
    console.log(detalis[i]);
    
}
// console.log(detalis);
// console.log(detalis[0]);
// console.log(detalis[1]);


// for...in vs for...of in JavaScript

const man = {
    name: "Ravi",
    age: 30,
    city: "Hyd"
  };
  
  for (let key in man) {
    console.log(key);           // Outputs: name, age, city
    console.log(man[key]);   // Outputs: Ravi, 30, Hyd
  }

  const ATP = ["Ravi", 30, "Hyd"];

for (let value of ATP) {
  console.log(value); // Outputs: Ravi, 30, Hyd
}

// break    -> exits the loop entirely
// continue -> skips the current iteration

for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {             // if i is even
        if (i % 4 == 0) {         // and also divisible by 4
            continue;             // skip this iteration
        }
    }
    console.log(i);               
}

  






  
  

