
// // // // var Average = 80

// // // // if (Average = 90) {

// // // //     console.log("Excellent!");


// // // // } else if (Average = 80 ) {
// // // //     console.log("Good Job!");
// // // //     } 

// // // //     else if (Average = 70) {
// // // //         console.log("Needs Improvement.");
// // // //     }

// // // //     else if (Average = 60) {
// // // //         console.log("Passing, but Could Do Better.");
// // // //     }

// // // //     else {
// // // //         console.log("Failed");
// // // //     }


// // // // let num = 7;
// // // // for (let i = 1; i <= 10; i++) {
// // // //   console.log(`num x i = ${num * i}`);
// // // // }


// // // // let sum = 0;
// // // // for (let i = 1; i <= 50; i += 2) {
// // // //   sum += i;
// // // // }
// // // // console.log("Sum of odd numbers from 1 to 50 is:", sum);




// // // // for (let i = 5; i <= 100; i += 5) {
// // // //     console.log(i);
// // // //   }



// // // // 09/04/2025: TASK 

// // // // let student = {
// // // //   name: "John",
// // // //   age: 20,
// // // //   class : "A",
// // // //   roollNumber:42632
// // // // }
// // // // console.log(student);
// // // // for (let key in student) {
// // // // } 

// // // // // Month Display (Using Switch) takes a month number (1-12) 

// // // // let  monthNumcer = parseInt(prompt("Enter a month number (1-12):"));
// // // // switch (monthNumcer) {
// // // //   case 1:console.log("january");
// // // //   break;
// // // //   case 2:console.log("february");
// // // //   break;
// // // //   case 3:console.log("march");
// // // //   break;
// // // //   case 4:console.log("april");
// // // //   break;
// // // //   case 5:console.log("may");
// // // //   break;
// // // //   case 6:console.log("june");
// // // //   break;
// // // //   case 7:console.log("july");
// // // //   break;
// // // //   case 8:console.log("august");
// // // //   break;
// // // //   case 9:console.log("september");
// // // //   break;
// // // //   case 10:console.log("october");
// // // //   break;
// // // //   case 11:console.log("november");
// // // //   break;
// // // //   case 12:console.log("december");
// // // //   break;

// // // //   default: console.log("Invalid month number");
// // // // }



// // // // // Create an array that contains the marks of 5 students in an exam Use a for...of loop and calculate the average marks. 

// // // // let marks = [98, 88, 78, 97, 89]
// // // // let total = 0;
// // // // // for of 
// // // // for (let mark of marks){
// // // //   total += mark;
// // // // }
// // // // let Average = total / marks.length;
// // // // console.log("student marks:", marks);
// // // // console.log("Average marks:", Average.toFixed(2));





// // // // // 1. Print all numbers from 1 to 50 using a for loop

// // // // var number = 1;
// // // // for (var i = 1; i <= 50; i++) {
// // // //   console.log(number++);

// // // //   }
// // // // 2. Print all even numbers from 1 to 100 using a while loop
// // // // var even = 1;
// // // // var count = 0;
// // // // while (even <= 100) {
// // // //   console.log(even);
// // // //   even += 1;
// // // //   count++
// // // //   }

// // //   // 3. Print all numbers from 10 to 1 using a do...while loop
// // // //   var number = 10;
// // // //   do {
// // // //     console.log(number);
// // // //     number--; 
// // // //   } 
// // // //   while (number >= 1);

// // // //   // 4. Loop through an array and print each element (use for...of)
// // // // let fruits = ["apple", "banana", "mango", "orange"]
// // // // for (let x of fruits) {
// // // //   console.log(x);
// // // //   }


// // // //   // 5. Loop through an object and print keys and values (use for...in)
// // // // let car = { brand: "Toyota", model: "Camry", year: 2020 };
// // // // for (let key in car) {
// // // //   console.log(key, car[key]);
// // // // }

// // // // 6. Calculate the sum of all numbers from 1 to 20 using a for loop
// // // var total = 0;
// // // for (var i = 1; i <= 20; i++) {
// // //   total += i;
// // // }
// // // console.log("Sum from 1 to 20 is:", total);


// // // // 7. Print the multiplication table of 6 using a for loop
// // // var table = 6;
// // // for (var i = 1; i <= 10; i++) {
// // //   console.log(table * i);
// // // }

// // // // 8. Loop through a string and print each character (use for loop)
// // // let word = "looping";
// // // for (let i = 0; i < word.length; i++) {
// // //   console.log(word[i]);
// // //   }

// // //   // 15. Loop 10 times and print "Loop #n" where n is the loop number
// // // var count = 0;
// // // for (var i = 0; i < 10; i++) {
// // //   console.log("Loop #" + (i + 1));
// // //   count++
// // //   }

// // function findmax(a, b){
// //   if (a>b){
// //     return a;
// //   }else{
// //     return b;
// //   }
// // }
// // console.log(findmax(10, 20)); 

// // // 2. Simple Calculator 

// // // Task: 
// // // 		Create a function calculator (a, b, operation) that: 

// // // Performs +, -, *, / operations 

// // // Returns "Division by zero" for divide-by-zero cases 

// // // Returns "Invalid operation" for unknown operators 
// // function calculator(a, b, operation) {
// //   if (operation === '+') {
// //     return a + b;
// //   } else if (operation === '-') {
// //     return a - b;
// //   } else if (operation === '*') {
// //     return a * b;
// //   } else if (operation === '/') {
// //     if (b === 0) {
// //       return "Division by zero";
// //     } else {
// //       return a / b;
// //     }
// //   } else {
// //     return "Invalid operation";
// //   }
// // }
// // console.log(calculator(25, 27, '+'));
// // console.log(calculator(50, 70, '-'));
// // console.log(calculator(78, 40, '*'));
// // console.log(calculator(50, 17, '/'));
// // console.log(calculator(50, 0, '/')); // Division by zero
// // console.log(calculator(50, 17, '%')); // Invalid operation


// // // 3. Check Positive/Negative/Zero 

// // // Task: 
// // // 		Implement checkNumber (num) that returns: 

// // // "Positive" if num > 0 

// // // "Negative" if num < 0 

// // // "Zero" if num = 0 

// // // "Invalid" for non-numbers 
// // function checkNumber(num) {
// //   if (typeof num !== 'number') 
// //     return "Invalid";
// //   if (num > 0) 
// //     return "Positive";
// //   if (num < 0)
// //      return "Negative";

// //   return "Zero";
// // }
// // console.log(checkNumber(5));     
// // console.log(checkNumber(-5));    
// // console.log(checkNumber(0));     
// // console.log(checkNumber("mouli"));  

// // // 4. Find Array Sum 

// // // Task: 
// // // 		Write arraySum(arr) to: 

// // // Calculate sum of all array elements 

// // // Return 0 for empty arrays	 
// // function arraySum(arr) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (typeof arr[i] !== 'number')
// //        return 0;
// //     sum += arr[i];
// //     }
// //     return sum;
// //     }
// //     console.log(arraySum([1, 2, 3, 4, 5]));
// //     console.log(arraySum([1, 2, 'a', 4, 5]));


// // // 5. Find Average of Array (New) 

// // // Task: 
// // // 		Create arrayAverage(arr) that: 

// // // Calculates average of numbers 

// // // Returns 0 for empty arrays 

// // // Rounds to 2 decimal places 
// // function arrayAverage(arr) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (typeof arr[i] !== 'number') 
// //       return 0;
// //     sum += arr[i];
// //     }
// //     return Math.round((sum / arr.length) * 100) / 100;
// //     }
// //     console.log(arrayAverage([1, 2, 3, 4, 5]));
// //     console.log(arrayAverage([1, 2, 'a', 4, 5]));


// // JavaScript Recap Practice
// // Create an object studentInfo with name, age, and an array of subjects.
// // Add a function getDetails() to return a summary string with student details.
// const studentInfo = {
//   name: "Alice",
//   age: 20,
//   subjects: ["Math", "Science", "English"],
//   getDetails: function () {
//     return `Name: ${this.name}, Age: ${this.age}, Subjects: ${this.subjects.join(", ")}`;
//   }
// };

// console.log(studentInfo.getDetails());



// // Function Conversion
// // Write a function to find the factorial of a number.
// // Convert the same into:
// // Function expression
// // Arrow function
// // IIFE

// // Function expression


// function factorial(n) {
//   if (n == 0 || n == 1) return 1;
//   else return n * factorial(n - 1);
// }
// console.log(factorial(4));

// // Function expression
// const factorialExp = function (n) {
//   if (n == 0 || n == 1) return 1;
//   else return n * factorialExp(n - 1);
// }
// console.log(factorialExp(42));
// // Arrow function
// const factorialArrow = (n) => {
//   if (n == 0 || n == 1) return 1;
//   else return n * factorialExp(n - 1);
// }
// console.log(factorialArrow(35));
// // IIFE
// const result = (function factorialIIFE(n) {
//   if (n == 0 || n == 1) return 1;
//   else return n * factorialArrow(n - 1);
// })
// (10);
// console.log(result);



// // Prime Number Checker
// // Task:
// // Write a function isPrime(num) that:

// // Returns true if the number is prime
// // Returns false if not prime
// function isPrime(num) {
//   if (num <= 1) return false; 
//   if (num === 2) return true; 
//   if (num % 2 === 0) return false; 

//   for (let i = 3; i <= Math.sqrt(num); i += 2) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }
// console.log(isPrime(2));  
// console.log(isPrime(11));  
// console.log(isPrime(15));  
// console.log(isPrime(1)); 

// // Factorial Calculator

// // Task:
// // Implement factorial(n) that:

// // Calculates factorial using a loop (not recursion)
// // Returns 1 for input 0
// // Returns -1 for negative inputs
// function factorial(n) {
//   if (n < 0) return -1;
//   if (n === 0) return 1;
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result; 
// }
// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(-3));




// Write a function calculateGrade(marks) that:
// Takes marks out of 100 as input
// Returns "A" if marks ≥ 90
// Returns "B" if marks ≥ 70
// Returns "C" if marks ≥ 50
// Returns "Fail" otherwise
// Use nested ternary operators to determine the grade
function calculateGrade(marks) {
  return marks >= 90 ? "A" :
         marks >= 70 ? "B" :
         marks >= 50 ? "C" : "Fail";
}
console.log(calculateGrade(85));
console.log(calculateGrade(45));
console.log(calculateGrade(90));
console.log(calculateGrade(70));
console.log(calculateGrade(55));
console.log(calculateGrade(30));

// . Recursive Factorial Function
// Task:
// Write a function factorial(n) that returns the factorial of a number using recursion.
function factorial(n) {
  if (n === 1)
     return 1;  
  return n * factorial
  (n - 1);
  ;
  }
  console.log(factorial(5));
  console.log(factorial(4));
  console.log(factorial(3));
  console.log(factorial(2));
  console.log(factorial(1));
//   . Calculate Sum of Even Numbers Using Arrow Function
// Task:
// Write an arrow function sumEven(arr) that:
// Filters even numbers from the array
// Calculates and returns their sum
// Q4. Count Properties in an Object
// Task:
// Write a function countProperties(obj) that:
// Takes an object as input
// Uses a for-in loop to count and return the number of keys/properties

// Sum of Marks from an Object	
// Task:
// Write a function sumObjectValues(obj) that:
// Takes an object as input, where keys represent subjects and values represent marks (numbers)
// Uses a for...in loop to iterate through the object
// Returns the total marks by summing all subject values
function sumObjectValues(obj) {
  let total = 0;
  for (let key in obj) {
       total += obj[key];
  }
  return total;
}
const marks = { 
  math: 85, 
  science: 90,
   english: 78 
  };
console.log(sumObjectValues(marks));
 
//   . Object Operations
// Task:
// Create an object employee with properties: name, id, and skills (an array).
// Add a new property designation dynamically.
// Clone the object and update the name in the new object.
// Write a function to loop through and print all key-value pairs in the object.
const employee = {
  name : "Mouli",
  id : 420,
  skills: ["JavaScript", "Python", "Java"]
};
employee.designation = "Software Developer"
console.log(employee);

const copy = {...employee};
copy . name = "sai"
console.log(copy);  
console.log(copy.name);
console.log(copy);

// . Count Properties in an Object
// Task:
// Write a function countProperties(obj) that:
// Takes an object as input
// Uses a for-in loop to count and return the number of keys/properties


// Q3. Calculate Sum of Even Numbers Using Arrow Function
// Task:
// Write an arrow function sumEven(arr) that:
// Filters even numbers from the array
// Calculates and returns their sum
const sumEven = arr => 
  arr.filter(num => num % 2 === 0)
     .reduce((sum, num) => sum + num, 0);
console.log(sumEven([1, 2, 3, 4, 5, 6]));
console.log(sumEven([10, 20, 30, 40, 50, 60]));

// 1.11111111
function getFirstChar(str) {
  if (str.length === 0) 
    return ''; 
  return str[0];
}

console.log(getFirstChar("hello")); 
console.log(getFirstChar("Mouli"));
console.log(getFirstChar(""));   

// 2. Add All Numbers in an Array 

// Task: 
// Write a function sumArray(arr) that returns the total sum of all numbers in the array. 
// Example: sumArray([1, 2, 3]) should return 6. 
function sumArray(arr) 
  {
    let sum = 0;
    for (let num of arr)
    {
      sum += num;
    }
    return sum;
  }

console.log(sumArray([1, 2, 3]));
console.log(sumArray([3,3]));
console.log(sumArray([1,1,1,1,1,1]));

// 3. Check if Array Contains a Value 

// Task: 
// Write a function containsValue(arr, value) that returns true if the value exists in the array. 
// 4. Find Length of an Array without using length Property 

// Task: 
// Write a function getArrayLength(arr) that manually counts and returns the number of elements in an array. 
function getArrayLength(arr) {
  var counts = 0;
  for (let _ of arr) {
    counts++;
  }
  return counts;
}

console.log(getArrayLength([1, 2, 3]));
console.log(getArrayLength([1, 2, 3, 5, 4, 6]));


function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin([2,3,4,5,6,7,]));


function repeatTheString (str, n){


let result = "";
for (let i=0;i<n; i++)
  {
  result += str;
}
return result;
}
console.log(repeatTheString("hi",3));
console.log(repeatTheString("njysggds",8));

function greet() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: 'MOULI' };
greet.call(person);

const arr = [1, [2, 3], [4, [5, 6, 1]]];

// Step 1: Flatten the array using flat() with a depth of 2 (since there are nested arrays within arrays)
const flattenedArr = arr.flat(2);

// Step 2: Remove duplicates by using a Set (Sets only store unique values)
const uniqueArr = [...new Set(flattenedArr)];

// Step 3: Use reduce to calculate the sum of the unique elements
const sum = uniqueArr.reduce((a, b) => a + b, 0);

console.log(sum); // Output: 21



// ⦁	Write a recursive function to compute the factorial of a given number.
function factorial(n) {
        if (n === 0 || n === 1) {
    return 1;
  }
     return n + factorial(n - 1);
}
console.log(factorial(5));


function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4));



// Step 1: Create the person object
let persons = {
  name: "John",
  age: 30,
  address: "123 Main St"
};

// Step 2: Add a new property 'email'
persons.email = "john@example.com";

// Step 3: Delete the 'address' property
delete person.address;

// Step 4: Update the age
persons.age = 35;

// Step 5: Iterate through the object and print keys and values
console.log(persons);


function body() {
  var name = "Mouli";
  
  function sayHello() {
    console.log("Hello, " + name);
  }

  return sayHello; // Returning the inner function (closure)
}

var good = body(); // body runs once, returns sayHello function
good();            // Output: Hello, Mouli


























  




   
















