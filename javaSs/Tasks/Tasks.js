
// // // var Average = 80

// // // if (Average = 90) {

// // //     console.log("Excellent!");


// // // } else if (Average = 80 ) {
// // //     console.log("Good Job!");
// // //     } 

// // //     else if (Average = 70) {
// // //         console.log("Needs Improvement.");
// // //     }

// // //     else if (Average = 60) {
// // //         console.log("Passing, but Could Do Better.");
// // //     }

// // //     else {
// // //         console.log("Failed");
// // //     }


// // // let num = 7;
// // // for (let i = 1; i <= 10; i++) {
// // //   console.log(`num x i = ${num * i}`);
// // // }


// // // let sum = 0;
// // // for (let i = 1; i <= 50; i += 2) {
// // //   sum += i;
// // // }
// // // console.log("Sum of odd numbers from 1 to 50 is:", sum);




// // // for (let i = 5; i <= 100; i += 5) {
// // //     console.log(i);
// // //   }



// // // 09/04/2025: TASK 

// // // let student = {
// // //   name: "John",
// // //   age: 20,
// // //   class : "A",
// // //   roollNumber:42632
// // // }
// // // console.log(student);
// // // for (let key in student) {
// // // } 

// // // // Month Display (Using Switch) takes a month number (1-12) 

// // // let  monthNumcer = parseInt(prompt("Enter a month number (1-12):"));
// // // switch (monthNumcer) {
// // //   case 1:console.log("january");
// // //   break;
// // //   case 2:console.log("february");
// // //   break;
// // //   case 3:console.log("march");
// // //   break;
// // //   case 4:console.log("april");
// // //   break;
// // //   case 5:console.log("may");
// // //   break;
// // //   case 6:console.log("june");
// // //   break;
// // //   case 7:console.log("july");
// // //   break;
// // //   case 8:console.log("august");
// // //   break;
// // //   case 9:console.log("september");
// // //   break;
// // //   case 10:console.log("october");
// // //   break;
// // //   case 11:console.log("november");
// // //   break;
// // //   case 12:console.log("december");
// // //   break;

// // //   default: console.log("Invalid month number");
// // // }



// // // // Create an array that contains the marks of 5 students in an exam Use a for...of loop and calculate the average marks. 

// // // let marks = [98, 88, 78, 97, 89]
// // // let total = 0;
// // // // for of 
// // // for (let mark of marks){
// // //   total += mark;
// // // }
// // // let Average = total / marks.length;
// // // console.log("student marks:", marks);
// // // console.log("Average marks:", Average.toFixed(2));





// // // // 1. Print all numbers from 1 to 50 using a for loop

// // // var number = 1;
// // // for (var i = 1; i <= 50; i++) {
// // //   console.log(number++);

// // //   }
// // // 2. Print all even numbers from 1 to 100 using a while loop
// // // var even = 1;
// // // var count = 0;
// // // while (even <= 100) {
// // //   console.log(even);
// // //   even += 1;
// // //   count++
// // //   }

// //   // 3. Print all numbers from 10 to 1 using a do...while loop
// // //   var number = 10;
// // //   do {
// // //     console.log(number);
// // //     number--; 
// // //   } 
// // //   while (number >= 1);

// // //   // 4. Loop through an array and print each element (use for...of)
// // // let fruits = ["apple", "banana", "mango", "orange"]
// // // for (let x of fruits) {
// // //   console.log(x);
// // //   }


// // //   // 5. Loop through an object and print keys and values (use for...in)
// // // let car = { brand: "Toyota", model: "Camry", year: 2020 };
// // // for (let key in car) {
// // //   console.log(key, car[key]);
// // // }

// // // 6. Calculate the sum of all numbers from 1 to 20 using a for loop
// // var total = 0;
// // for (var i = 1; i <= 20; i++) {
// //   total += i;
// // }
// // console.log("Sum from 1 to 20 is:", total);


// // // 7. Print the multiplication table of 6 using a for loop
// // var table = 6;
// // for (var i = 1; i <= 10; i++) {
// //   console.log(table * i);
// // }

// // // 8. Loop through a string and print each character (use for loop)
// // let word = "looping";
// // for (let i = 0; i < word.length; i++) {
// //   console.log(word[i]);
// //   }

// //   // 15. Loop 10 times and print "Loop #n" where n is the loop number
// // var count = 0;
// // for (var i = 0; i < 10; i++) {
// //   console.log("Loop #" + (i + 1));
// //   count++
// //   }

// function findmax(a, b){
//   if (a>b){
//     return a;
//   }else{
//     return b;
//   }
// }
// console.log(findmax(10, 20)); 

// // 2. Simple Calculator 

// // Task: 
// // 		Create a function calculator (a, b, operation) that: 

// // Performs +, -, *, / operations 

// // Returns "Division by zero" for divide-by-zero cases 

// // Returns "Invalid operation" for unknown operators 
// function calculator(a, b, operation) {
//   if (operation === '+') {
//     return a + b;
//   } else if (operation === '-') {
//     return a - b;
//   } else if (operation === '*') {
//     return a * b;
//   } else if (operation === '/') {
//     if (b === 0) {
//       return "Division by zero";
//     } else {
//       return a / b;
//     }
//   } else {
//     return "Invalid operation";
//   }
// }
// console.log(calculator(25, 27, '+'));
// console.log(calculator(50, 70, '-'));
// console.log(calculator(78, 40, '*'));
// console.log(calculator(50, 17, '/'));
// console.log(calculator(50, 0, '/')); // Division by zero
// console.log(calculator(50, 17, '%')); // Invalid operation


// // 3. Check Positive/Negative/Zero 

// // Task: 
// // 		Implement checkNumber (num) that returns: 

// // "Positive" if num > 0 

// // "Negative" if num < 0 

// // "Zero" if num = 0 

// // "Invalid" for non-numbers 
// function checkNumber(num) {
//   if (typeof num !== 'number') 
//     return "Invalid";
//   if (num > 0) 
//     return "Positive";
//   if (num < 0)
//      return "Negative";

//   return "Zero";
// }
// console.log(checkNumber(5));     
// console.log(checkNumber(-5));    
// console.log(checkNumber(0));     
// console.log(checkNumber("mouli"));  

// // 4. Find Array Sum 

// // Task: 
// // 		Write arraySum(arr) to: 

// // Calculate sum of all array elements 

// // Return 0 for empty arrays	 
// function arraySum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number')
//        return 0;
//     sum += arr[i];
//     }
//     return sum;
//     }
//     console.log(arraySum([1, 2, 3, 4, 5]));
//     console.log(arraySum([1, 2, 'a', 4, 5]));


// // 5. Find Average of Array (New) 

// // Task: 
// // 		Create arrayAverage(arr) that: 

// // Calculates average of numbers 

// // Returns 0 for empty arrays 

// // Rounds to 2 decimal places 
// function arrayAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') 
//       return 0;
//     sum += arr[i];
//     }
//     return Math.round((sum / arr.length) * 100) / 100;
//     }
//     console.log(arrayAverage([1, 2, 3, 4, 5]));
//     console.log(arrayAverage([1, 2, 'a', 4, 5]));


// JavaScript Recap Practice
// Create an object studentInfo with name, age, and an array of subjects.
// Add a function getDetails() to return a summary string with student details.
const studentInfo = {
  name: "Alice",
  age: 20,
  subjects: ["Math", "Science", "English"],
  getDetails: function () {
    return `Name: ${this.name}, Age: ${this.age}, Subjects: ${this.subjects.join(", ")}`;
  }
};

console.log(studentInfo.getDetails());



// Function Conversion
// Write a function to find the factorial of a number.
// Convert the same into:
// Function expression
// Arrow function
// IIFE

// Function expression


function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}
console.log(factorial(4));

// Function expression
const factorialExp = function (n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorialExp(n - 1);
}
console.log(factorialExp(42));
// Arrow function
const factorialArrow = (n) => {
  if (n == 0 || n == 1) return 1;
  else return n * factorialExp(n - 1);
}
console.log(factorialArrow(35));
// IIFE
const result = (function factorialIIFE(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorialArrow(n - 1);
})
(10);
console.log(result);



// Prime Number Checker
// Task:
// Write a function isPrime(num) that:

// Returns true if the number is prime
// Returns false if not prime
function isPrime(num) {
  if (num <= 1) return false; 
  if (num === 2) return true; 
  if (num % 2 === 0) return false; 

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}
console.log(isPrime(2));  
console.log(isPrime(11));  
console.log(isPrime(15));  
console.log(isPrime(1)); 

// Factorial Calculator

// Task:
// Implement factorial(n) that:

// Calculates factorial using a loop (not recursion)
// Returns 1 for input 0
// Returns -1 for negative inputs
function factorial(n) {
  if (n < 0) return -1;
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result; 
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-3));

   
















