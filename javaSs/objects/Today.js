// Object:-
// it is a collection of key-value pairs
// // It can hold multiple values of different types, and can be used to represent complex data structures.
// var emplees ={
//     empname : "mouli",
//     empID : "0338",
//     department: "HR",
//     location: "New York",
//     salary: 60000

// }
// console.log(emplees);
// // it is use to the find the single one use to the employee's ID
// console.log(Object["location"]);
// // or 
// console.log(emplees.empname);

// console.log(emplees["salary"]);

// Object is a 4 types 
// 1. Object literals
// 2. Constructor functions
// 3.factory function
// 4. Classical way 
// 1. Object literals":-
var employees = {
    empName: "mouli",
    empID: "0338",
    department: "HR",
    location: "New York",
    salary: 60000,
    contact: "mouli@example.com",
    dateOfBirth: "1990-01-01",
    emp: {
        name: "John Doe",
        age: 20,
        position: "Software Engineer",
        buy: function () {
            console.log("You can buy this product");
        }
    }
};
console.log(employees.emp.contact);

// 2.constructor function:-
// in thies process used to "this"
function personName(name,age,location){
    console.log(this);

    this.name = name
    this.age = age
    this.location
    console.log(name,age,location);
    
    
}
var ravi = new personName("malik",24,"ATP")
var ravi = new personName("jay",25,"hyb")
var ravi = new personName("shwar",26,"bgy")
var ravi = new personName("magic",27,"ATP")
var ravi = new personName("cares",28,"gtu")
var ravi = new personName("dom",29,"num")

// Factory function way
// It is a function which creates and returns objects

function createPerson(name, age,location) {
    return {
        name: name,
        age: age,
        location:location
    };
}

// Using the factory function
var person1 = createPerson("Kiran", 30 , "HYD");
var person2 = createPerson("Anjali", 32, "Bangalore");
console.log(person2);
console.log(person1);


// 4. Classical way:-
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
        console.log(name,age,location);
    }
}



var person = {
    name: "ravi",
    age: 22
};

console.log(person.name);  
person.name = "kiran";     
console.log(person);       
console.log(person.age);
// Updating a value in the object
person.name = "kiran";

// Adding a new item to the object
person.location = "Hyd";

// Deleting an item in the object
delete person.name;

console.log(person);


// Object loop:-

var person = {
    name: 'ravi',
    age: 22,
    city: "hyd",
    salary: 80990
};

for (let p in person) {
    console.log(person.p); 

}
var a = Object.keys(person); 
var b = Object.values(person);   
var c = Object.entries(person);
console.log(a);
console.log(b);
console.log(c);

// primitive

// Deep copy // Original memory location is different from copied memory location

var M = 20;     // Hx109020
var N = M;      // Hx102203

console.log(M, N); // Logs: 20 20

M = 30;
N = M;

console.log(M, N); // Logs: 30 30


//Refernece data types:-
// it is 3 types 
// 1. normal:- 2.deep copy 3.shallow copy
// 1.normal copy :-
// orignal memory location is same as coped memory location 
// if we update any thing in the orignal memeory location 
// the changes will be reflected in the copied variable as well.
var Emplees ={
    name: 'ravi',
     age: 22, 
     city: 'hyd', 
    salary: 80990,
    address: '123 Main St',
    job: { role: 'it'  , level: 'senior' 

     }
    
}
var copy = Emplees
console.log(Emplees);
Emplees.job.salary = 80000
console.log(copy);


// Deep copy using JSON methods
var Employees = {
    name: 'Ravi',
    age: 30,
    city: 'hyd',
    job: {
        role: 'Developer',
        salary: 55000
    },
    array: [1, 2, 3, 4, 5]
};

// Create deep copy
var copy = JSON.parse(JSON.stringify(Employees));

console.log(Employees);

// Modify original object
Employees.name = 'Mouli';
Employees.job.salary = 80000;
Employees.array[0] = 10;
Employees.array[1] = 20;
Employees.array[4] = 190;

console.log(copy);
console.log(Employees);



// shallow copy:-
// var shallowCopy = Object.assign({}, Employees); 

var Original = {
    age: 30,
    arr: [1, 2, 3],
    job: {
        role: 'Developer',
        salary: 55000
    }
};

var copy = Object.assign({}, Original); // shallow copy
//E.S - 6

var copy ={
    ...Original
}

Original.age = 31;
Original.arr[0] = 10;
copy.job.salary = 100000;
Original.name = "Mouli";
console.log(Original);




// math Object
var math = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
    ,
    modulus: function(a, b) {
        return a % b;
    }
    ,
    power: function(a, b) {
        return Math.pow(a, b);
    }
    , 
    square: function(a) {
        return a * a;
    }
    , 
    squareRoot: function(a) {
        return Math.sqrt(a);
    }
};
console.log(math . add(5,2));
console.log(math . subtract(5,2));
console.log(math . multiply(5,2));
console.log(math . divide(5,2));
console.log(math . modulus(5,2));
console.log(math . power(5,2));
console.log(math . square(5,2));
console.log(math . squareRoot(5,2));

// var arr =[1,2,3,4,5,6,7,8,9]
// console.log(math . min(arr))


// base exponent

console.log(3*2);

// we can use uper proces also but it is a lenth process the we can used to a math. funcytion

console.log(math.power(2, 3));   
console.log(math.square(4)); 
console.log(math.squareRoot(16));
console.log(math.modulus(10, 3));
console.log(math.add(10, 5));
console.log(math.subtract(10, 5));
console.log(math.multiply(10, 5));
console.log(math.divide(10, 5));
console.log(math.square(3));
console.log(math.squareRoot(25));
console.log(math.add(1, 1));  

// date 
var d = new Date().getFullYear
var d1 = new Date().
getMonth() + 1
var d2 = new Date().getDate();


console.log(d);

console.log(d1);


// template string
//embedding values and string  
var a = 5
var b = 10
console.log(a+b);
console.log(`sum of a and b is a+b`);
console.log(`sum of ${a} and ${b} is ${a+b}`);

let name = "John";
let msg = "Hello";
console.log(`Hello ${name}`);

//string 
//collection of charactor
//string can be consider as objects
//string methods 
//length of the string
//sys:- stringname.length
var c = "Hello"
console.log(c.length);
//remove white spaces 
//remove white space at the begining of the string
//syd:-stringname.trimstart()
let m = "   mouli   "
var n = "shwar   "
console.log(`mouli${n}`.trimEnd());

console.log(m.trim());
console.log(m);
console.log(m.trimStart());
console.log(m.trimEnd());
console.log(m.trimLeft());
//extraction a specific part of the string
let s = "JavaScript";

// Slice: from index to index (not including end)
console.log(s.slice(0, 4));
console.log(4,s.length);
 

// Substring: similar to slice
console.log(s.substring(4, 10));
console.log(s.substring(4,s.length));
console.log(s.length);



// Substr (deprecated): start, length
console.log(s.substr(4, 6));
console.log(s.substr(2,8));

//indexvalue
// string.indexOf(searchValue, startIndex)


let sentence = "JavaScript is awesome!";

console.log(sentence.indexOf("Script")); 
console.log(sentence.indexOf("awesome")); 
console.log(sentence.indexOf("java")); 
console.log(sentence.lastIndexOf("!"));

// charAt() – Get a Character at a Specific Index

// string.charAt(index)
let word = "JavaScript";

console.log(word.charAt(0)); 
console.log(word.charAt(4));  
console.log(word.charAt(7));

// charCodeAt() – Get ASCII Code of Character
var g = "gowd"
console.log(g.toLocaleUpperCase());
console.log(g.toLocaleLowerCase());

// Character Type | ASCII Code Range
// Uppercase A–Z | 65–90
// Lowercase a–z | 97–122


//replace 
var l = "Hello world"
console.log(l);
console.log(l.replace("world","java script"));
//adding a new string
//+
var a = "Hello"
var b = "World"
console.log(a+b);

//(or)

console.log(a.concat("man"));




//pad   ES10/ES-11
//padStart
var a = "     man of the person"
console.log(a.padStart("Hello"));




//split

var i = "Mouli,mama Malik"
console.log(i);
var n = i.split(", ,  ")
console.log(n);

//how to find existing string 
console.log(i.includes(" king"));
console.log(i.includes("mama"));


//repate

var d = "mouli"
console.log(d.repeat(20));
var e = "dbdhjbvd"
console.log(e);
for (i=1;i<10;i++){
    e+=d
}
console.log(e);

//this key word:-
// it refers the current odject 
var person = {
    name: "Ravi",
    age : 27,
    cty : "ATP",
    play: function() {
      console.log(this.name); // "this" refers to person
    }
  };
  
  person.play();  
  console.log(person);
  //useding the functions
  function show() {
    console.log(this);
  }
  
  show();

  var obj = {
    name: "Ravi",
    age : 40,
    location : "BGL",
    greet: () => {
      console.log(this.location);
    }
  };
  
  obj.greet();
  console.log(obj);

  const student = {
    name: "Mouli",
    age : 28,
    location : "ATP",

    greet: function() {
      console.log(this.name);
    }
  };
  student.greet(); 
  console.log(student);

  const persons = {
    name: "Ravi",
    greet: function(message) {
      console.log(this.name + " says " + message);
    }
  };
  
  const anotherPersons = {
    name: "Mouli",
    age: 56,
    cty: "ATP",
  };
  
  // Using call
  persons.greet.call(anotherPersons, "Hello"); 
  
  // Using apply
  persons.greet.apply(anotherPersons, ["mouli"]); 
  
  // Using bind
  const newGreet = persons.greet.bind(anotherPersons);
  newGreet("Hello"); 
  
  
  
  

  
  
  
  
  












































 








        

