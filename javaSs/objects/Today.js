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








        

