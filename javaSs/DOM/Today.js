console.log(this);   //it will display the window
console.log(window);  //display the window
console.log(window.document);  //it display the 'url'
//just it display the url of the page
console.dir(window.document)
// it is display the total doucment well be display the console.dir 
// or 
console.dir(document)
//it is also display the total document
//log print (to see the out put in the console)
//(dir) to be see the special object properties and methods
//by usig document we can access the document object
console.dir(document)
document.childNodes[1].childNodes[2].childNodes[1].innerText="Hi mouli good moring"
console.dir(document.childNodes[1].childNodes[2].childNodes[1].innerText)
console.log(document.childNodes[1].childNodes[2]);
console.dir(document.childNodes[1].childNodes[2]);
var a = document.getElementById("head1");
a.style.color = "white";
a.style.backgroundColor = "green";
console.log(a);
var a = document.getElementById("head2");
a.style.color = "black";
a.style.backgroundColor = "white";
console.log(a);
var a = document.getElementById("head3");
a.style.color = "black";
a.style.backgroundColor = "white";
console.log(a);
var a = document.getElementById("head4");
a.style.color = "black";
a.style.backgroundColor = "white";
console.log(a);
var a = document.getElementById("head5");
a.style.color = "red";
a.style.backgroundColor = "white";
console.log(a);
var a = document.getElementById("head6");
a.style.color = "blue";
a.style.backgroundColor = "white";
console.log(a);
// getelementbyclssname :- multiple element
var b = document.getElementsByClassName('one')
b[2].innerText="happy"
console.log(b);

// getelementbyTagname :-mulitiple based on the given tag name
var c = document.getElementsByTagName('h1')
c[0].style.color="red"
console.log(c);
var c = document.getElementsByTagName('h2')
c[0].style.color="black"
console.log(c);
var c = document.getElementsByTagName('h1')
c[0].style.color="yellow"
console.log(c);
var c = document.getElementsByTagName('h1')
c[0].style.color="blue"
console.log(c);
var c = document.getElementsByTagName('h1')
c[0].style.color="red"
console.log(c);
var c = document.getElementsByTagName('h1')
c[0].style.color="black"
console.log(c);
// queryselector 
var d = document.querySelector('#head1')
d.style.color="red"
console.log(d);
var d = document.querySelector('#head2')
d.style.color="green"
console.log(d);
// by using class name tags name id 
// single elements based on the selector // first accurence of the selector
// query selection all 
var e = document.querySelectorAll('.head1');
console.log(e);
// multiple element based on the selector 

// domtraversing
// parentnode :- parent of the element
var f = document.getElementById('head1').parentNode
console.log(f);
// children:-
var g = document.getElementById('head1').children
console.log(g);
// firstelements:-
var h = document.getElementById('head1').firstElementChild
console.log(h);
// lastelement:-
var i = document.getElementById('head1').lastElementChild
console.log(i);

// sibling:-
// previous sibling
// nextsibling
var j = document.getElementById('head1').previousSibling
console.log(j);
// nextsibling












// 5 common DOM selectors in JavaScript.
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. querySelector()
// 5. querySelectorAll()
// 1. getElementById()
// it is used to select the element by id
// it is return the element



