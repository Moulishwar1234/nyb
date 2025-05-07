// Arres 
// what is array 
// it is a rederece data tyoe where we can store multiple values in a single memory location 
// we can store homogeneous and heterogenious date 
// how to difine a array [] 
// we cant difine the number in the stating the subtile of it show the error 
var _arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "Mouli", "sai", true, false, null, undefined, {}, [{}]];
console.log(_arr1);

// inarays related data 
// by using index vlue we can access the individulal emelements in the arry 
// 0 start n-1 (length of arry)(Node.of items in the arry) 
// we need hello 
console.log(_arr1[10]);





// how to find arry items 
// indexof():- 
// it return the index of that partiakar element 
console.log(_arr1.indexOf(5));
// lastindex() 
console.log(_arr1.lastIndexOf(9));

// indcludes() 
console.log(_arr1.includes(6));
console.log(_arr1.includes(60));

// reference data types 
// 1. find 
// 2.findindex() 
var Arry = [{ name: "Mouli" }, { Age: 24 }, { City: "ATP" }];


const found = Arry.find(obj => obj.name === "Mouli");
console.log(found);

const index = Arry.findIndex(obj => obj.name === "Mouli");
console.log(index); 

// how to loops arrys
// for of 
// for in 
// for each -->it is given both index values and values 
var a = [1,2,3,4,5,6,7,8]
console.log(a);
var a = [1, 2, 3, 4, 5, 6, 7, 8];

a.forEach((v, i) => {
    console.log(v, i);
});


// Array methods 
// 1. map 
// 2.filter 
// 3.reduce 
// 4.every 
// 5.some 
// 6.find 


// normailiy
var arr = [1,2,3,4,5,]
var arr1 =[]
for (i of arr){
    arr1.push(i*i)
}
console.log(arr1);

// map:- it charges each and every elemant is the arry retuns a new arry
var m = arr.map(k => i*i)
console.log(m);


// filter ():- it filter the arry based on the certaion codition 

// Nor :-
var a = [2,3,4,5,6,7,8,9,10,12,14,16,18,20]
for (i of a){
    if(i>5){
        console.log(i);
        
    }
}

// function 
var m = a.filter(function(v){
    return v>5
})
console.log(m);

// filter:- 
var n = a.filter(v=> v>5)
console.log(m);

// even number 
var  evennumber = a.filter(m => m%2 == 0) 
console.log(evennumber);

// reduce ():- it is reduces the complete arry into single value

// nor:-
var m = [1,2,3,4,5,6,7,8,9,0,2,323,4,5,55,566,7,,7,88,]
var sum = 0 
for (i of m){
    sum +i
}
console.log(m);

// reducet 
var j = [1,8,2,4,6,8,10]
var k = j.reduce ((a,b) => (a+b),0)
console.log(k);

// every ():-it check the condition if all the emements in the arry statifies the condition it retuns true if not false
var w = [1,2,3,4,5,6,7,8,9]
console.log(w.every(i => i % 2 == 0));

// Some ():-it check the condition if any the elements in the arryu satisfies the condition it returns true if not returns flase
console.log(a.some(i =>i%2 == 0));


// set ():-only unic values
var s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(4);
s.add(5);
s.add(1); 
s.delete(1);
console.log(s);
console.log(s);
console.log(s.size);
console.log(s.has(1));
s.clear()
console.log(s);

// remove duplicates from an array 
var arr = [1,2,3,4,5,6,7,8,9,1,12,33,4,5,6,6,7,7,8,8,877,7,76,6,5,5,5,5,5,54,4,4,4,4]
console.log(arr);
var Aset =new Set(arr)
console.log(Aset);
// converted to array 
var Aset = [new Set(arr)];
console.log(Aset);
// spred operrator 
var Aset =[...new Set(arr)];
console.log(Aset);
// filter 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 12, 33, 4, 5, 6, 6, 7, 7, 8, 8, 877, 7, 76, 6, 5, 5, 5, 5, 5, 54, 4, 4, 4, 4];

var uniqueArr = arr.filter((a,b) => arr.indexOf(a) === b);

console.log(uniqueArr);


// normally 

let arrs = [1, 2, 3, 2, 1, 4, 5, 3];
let newarr = [];

for (let i of arrs) {
    if (!newarr.includes(i)) {
        newarr.push(i);
    }
}

console.log(newarr);

// flattining of array 
var ar = [1,2,23,4,45,6,7,8,9,"mouli","sai","dog",[[[[[[]]]]]]]
console.log(ar);
console.log(ar.flat(1));
console.log(ar.flat(3));

// for...of and Array.isArray(): 

var arr = [1, [2, 3], "hello", [4, 5], 6];

for (let item of arr) {
  if (Array.isArray(item)) {
    console.log("Array found:", item);
  } else {
    console.log("Not an array:", item);
  }
}


//from():-
// it is a convetst is into arry 
var s = "hello";
console.log(s);
var k = Array.from(s);
console.log(k);

//at:-it retuens athe index of the array
var j = [1, 2, 3, 4, 5, 6]
console.log(m.indexOf(5));
console.log(m.at(5));

//fill :- it is a used to fill the array with the given value
//it is a three types (valuetablefilled/starting/ending )
var arr = [1, 2, 3, 4, 5, 6]
console.log(arr);
m.fill(0,0,m.length-1);
console.log(arr);


//sorting of array:-arranging the iteam is the array in a partiation order (smal to big and big to small)
//it is a two types (asc and desc)
var arrss = [1, 5, 3, 7, 2, 9]

// console.log(m);
console.log(arrss);
console.log(arrss.sort((a, b) =>
    a - b   
));


//revera():-
//it is a used to reverse the array
var u = [1, 2, 3, 4, 5, 6]
console.log(u);
console.log(u.reverse());



//Reference data types:-
//it is a used to store the reference of the data type
var person = [
    {name:"mouli",age:20,addres:"ATP",job:"IT",empid:1},
    {name:"Rahul",age:29,addres:"Baqng",job:"IT",empid:2},
    {name:"sai",age:24,addres:"Hyd",job:"IT",empid:3},
    {name:"vamsi",age:22,addres:"Vis",job:"IT",empid:4},
    {name:"mallik",age:21,addres:"maj",job:"IT",empid:5},
    {name:"jay",age:26,addres:"kakn",job:"IT",empid:6},
    {name:"mnp",age:28,addres:"ATP",job:"IT",empid:7},
];
console.log(person);
person.sort();
console.log(person);
person.sort((a,b)=>a.age-b.age)
console.log(person);
person.sort((a,b)=>b.age-a.age)
console.log(person);
// not only age it well be change the name and age , address , job , empid 
// localecompare() :-it is a used to compare the string
// a=z it is a display 
person.sort((a,b)=>a.name.localeCompare-(b.name))
console.log(person);
person.sort((a,b)=>a.name.localeCompare(b.name))
console.log(person);

//map(),set(),weekmap,weekset
// map():- it is used to store data in the from of key value pairs
// in this kay will of any data types and value will of any data types
var map = new Map();    
map.set("name","mouli");
map.set("age",20);
map.set("addres","ATP");
map.set("job","IT");
map.set("empid",1);
console.log(map);
console.log(m.size);

// set:-
// it is used to store data in the form of key value pairs
// in this key will of any data types and value will of any data types
var set = new Set();
set.add("mouli");
set.add("rahul");
set.add("sai");
set.add("vamsi");
set.add("mallik");
set.add("jay");
set.add("mnp");
console.log(set);

// delete() :- it is used to delete the data from the set
// has() :- it is used to check the data is present in the set or not
set.delete("rahul");
console.log(set);
// has() :- it is used to check the data is present in the set or not
set.has("mallik");
console.log(set);
// clear:-
// it is used to delete all the data from the set
set.clear();
console.log(set);

// s.set({name:"ravi"},person)

// weekmap:-
// it is used to store data in the form of key value pairs
// in this key will of any data types and value will of any data types
let obj = { id: 1 };

let weakMap = new WeakMap();
weakMap.set(obj, "mouli");

console.log(weakMap.get(obj)); // Output: "User Data"

// weekset:-
// it is used to store data in the form of key value pairs
// in this key will of any data types and value will of any data types
let user = { name: "mouli" };

let weakSet = new WeakSet();
weakSet.add(user);

console.log(weakSet.has(user)); // true


















































