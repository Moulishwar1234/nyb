
// var Average = 80

// if (Average = 90) {

//     console.log("Excellent!");
    
    
// } else if (Average = 80 ) {
//     console.log("Good Job!");
//     } 

//     else if (Average = 70) {
//         console.log("Needs Improvement.");
//     }

//     else if (Average = 60) {
//         console.log("Passing, but Could Do Better.");
//     }

//     else {
//         console.log("Failed");
//     }

  
// let num = 7;
// for (let i = 1; i <= 10; i++) {
//   console.log(`num x i = ${num * i}`);
// }


// let sum = 0;
// for (let i = 1; i <= 50; i += 2) {
//   sum += i;
// }
// console.log("Sum of odd numbers from 1 to 50 is:", sum);




// for (let i = 5; i <= 100; i += 5) {
//     console.log(i);
//   }



// 09/04/2025: TASK 

let student = {
  name: "John",
  age: 20,
  class : "A",
  roollNumber:42632
}
console.log(student);
for (let key in student) {
} 

// Month Display (Using Switch) takes a month number (1-12) 

let  monthNumcer = parseInt(prompt("Enter a month number (1-12):"));
switch (monthNumcer) {
  case 1:console.log("january");
  break;
  case 2:console.log("february");
  break;
  case 3:console.log("march");
  break;
  case 4:console.log("april");
  break;
  case 5:console.log("may");
  break;
  case 6:console.log("june");
  break;
  case 7:console.log("july");
  break;
  case 8:console.log("august");
  break;
  case 9:console.log("september");
  break;
  case 10:console.log("october");
  break;
  case 11:console.log("november");
  break;
  case 12:console.log("december");
  break;
  
  default: console.log("Invalid month number");
}
  

  
// Create an array that contains the marks of 5 students in an exam Use a for...of loop and calculate the average marks. 

let marks = [98, 88, 78, 97, 89]
let total = 0;
// for of 
for (let mark of marks){
  total += mark;
}
let Average = total / marks.length;
console.log("student marks:", marks);
console.log("Average marks:", Average.toFixed(2));







  



    
    
