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

// 5 common DOM selectors in JavaScript.
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. querySelector()
// 5. querySelectorAll()
// 1. getElementById()
// it is used to select the element by id
// it is return the element
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
// a.style.color = "blue";
// a.style.backgroundColor = "white";
// console.log(a);
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






// // new Element cretion :-get an element from dom id class tag query query all
// // 1. Get the parent element (div1)
// var parentDiv = document.getElementById("div1");

// // 2. Create a new element (e.g., a new <p> tag)
// var newElement = document.createElement("p");
// newElement.textContent = "This is a new paragraph inserted at the top of div1";

// // 3. Get the first child element inside div1
// var firstChild = parentDiv.firstElementChild;

// // 4. Insert the new element before the first existing child
// parentDiv.insertBefore(newElement, firstChild);
// // 5. Get the last child element inside div1
// var lastChild = parentDiv.lastElementChild;
// // 6. Insert the new element after the last existing child
// parentDiv.insertBefore(newElement, lastChild.nextSibling);
// // 7. Get the next sibling of the last child element
// var nextSibling = lastChild.nextElementSibling;

// replacechild:-it is replaces the existing element
// Get the parent div
// var div1 = document.getElementById("div1");

// // Create a new <h1> element
// var h1 = document.createElement("h1");
// h1.textContent = " Replaced with a new H1 element";
// console.log(h1);
// var container = document.getElementById('head1')
// container.appendChild('head1')

// Get the existing child to replace (e.g., the current h1 inside div1)
// var oldH1 = div1.querySelector("h1"); // Or: document.getElementById("head1")


// Replace old <h1> with new <h1>
// div1.replaceChild(h1, oldH1);
// // replaceChild:-replaces the existing element
// var first = document.getElementById("we can have a comessence");
// div1.replaceChild(h1,first)


// script.js
var but = document.getElementById('click');

function butclick() {
  alert('Button clicked');
}

but.addEventListener('click', butclick, true);



// 1. Capturing Phase (Use Capture = true)
// :-The event flows from the top of the DOM (window) down to the target element.

// Order:
// window → document → html → body → div → ... → target element





// 2. Bubbling Phase (Use Capture = false)
// The event bubbles from the target element back up to the top of the DOM.

// Order:
// target element → parent → body → html → document → window

var div = document.getElementById('outer');

div.addEventListener('click', function () {
  alert('div clicked');
}, true);

div.addEventListener('click',function (){
    alert('Div bubbling')
})

// div capturing > button > div bubbling

// div.addEventListener('mouseenter', function(){
//     alert('div mouse enter')
// })

div.addEventListener('mousedown', function(){
    alert('div mousedown')
})


var table = document.getElementById('table')
table.addEventListener('click',function(){
    alert('table clicked')
})

var heading = document.getElementById("heading");
var para = document.getElementById("para");
var textbox = document.getElementById("textbox");
var btn = document.getElementById("btn");
var box = document.getElementById("box");
var list = document.getElementById("list");
var image = document.getElementById("image");
var link = document.getElementById("link");
var table = document.getElementById("table");
var dropdown = document.getElementById("dropdown");
var form = document.getElementById("form");

// Example: Add click event to the button
btn.addEventListener("click", function () {
  alert("Button Clicked!");
});


// setTimeout:-executes after a cerataion time 
// seconf = 1000 milliseconds
// setTimeout(function,Delay,argument)
function Delay(){
  console.log(
    "setTimeout executed to using the working to the we can pf the mou;ia"
  );
  
}
setTimeout(Delay, 1000);
// it will execute nly once after the deyl time 

// setInterval:-it is a multipule time 
setInterval(Delay,2000)

// clearInterval:-it is will stop the moveing the multiple times code the we sstop only use clearinterval
let inte = setInterval(Delay,2000)
setTimeout(()=>{
  clearInterval(inte)

},4000)



// notmalevent
// throtteling:-After certer delay
// debouncing:-after a cerain delay ,reset the function












