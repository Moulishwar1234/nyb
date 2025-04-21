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




        

