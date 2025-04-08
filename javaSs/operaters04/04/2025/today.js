// operators:- are used in combination with variables to do a functaionality

// Arithmetic operators , Assignment , Comparison , Logical , conditional

// Comparison operators:- it is used to compare two values and returns a boolean value

//equality == ,in equality != 
// Relational=  > , < , >= , <= 

// let x = 10, y = 5;
// console.log(x + y);
// console.log(x % y);


// Equality Operators
// var A = 10;
// var B = '10';

// console.log(A == B);    // value comparison
// console.log(A === B);   // value and type comparison

// // InEquality
// console.log(A !== B);
// console.log(A != B);



// // A == B	true	Values are equal after coercion
// // A === B	false	Different types: number vs. string
// // A !== B	true	Different types
// // A != B	false	Values are equal after coercion


// var C = 20;

// console.log(A != C);      // A = 10, C = 20 → true
// console.log(A != B);      // A = 10, B = '10' → false (after type coercion)

// console.log(A !== B);     // A = 10, B = '10' → true (strict inequality)


// var Obj1 = { A: "20" };
// var Obj2 = { A: "20" };

// console.log(Obj1 == Obj2);
// console.log(Obj1 === Obj2);


// console.log(Obj1 != Obj2);
// console.log(Obj1 !== Obj2);


// // ternary operator ?:


// // syntax ? Truecase falsecase

// console.log(
//     false ? console.log("truecase") : console.log("FalseCase"));  


//     var a = 10;
// var b = 10;

// console.log(a == b ? console.log("truecase") : console.log("FalseCase"));



// // Logical operators

// // & || !


// var A = 10

// var B = 20

// console.log(a !=b && a==b);

// console.log(a !=b || a==b);

// console.log(1 ? console.log("truecase") : console.log("FalseCase"));
// console.log(0? console.log("truecase") : console.log("FalseCase"));

// switch: it is used too exact value
// switch() {
//     case 1:
//         stam:
//     case 2:
//         stam:
//     default
//         stam:

// }
let day = 5;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName);



