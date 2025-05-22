// webstorage :--it will showe the application data in the browser
//     localStorage :--it will showe the application data in the browser 10mb
//     sessionStorage :--it will showe the application data in the browser 5mb
//     indexDB :--it will showe the application data in the browser
//     cookie :--it will showe the application data in the browser
//     webSQL :--it will showe the application data in the browser
// to store data used   SetItem ()  
// ot get data          getItem()  
// to remove data       removeItem()
// to clear all data    clear()
// to check data exist  or not  getItem()  ===  null
// to check data exist  or not  getItem()  ===  undefined
// to check data exist  or not  getItem()  ===  null  ||  getItem()

// to store data used   SetItem ()  
localStorage.setItem('name','MOULISHWAR GOWD.KALUGURI')

sessionStorage.setItem('name','MOULISHWAR GOWD.KALUGURI')
sessionStorage.setItem('compay','NYB')
localStorage.setItem('compay','NYB')
//  getItem()  
console.log(localStorage.getItem('name'));
console.log(sessionStorage.getItem('name'));
console.log(sessionStorage.getItem('compay'));
console.log(localStorage.getItem('compay'));
//  removeItem()
var r =localStorage.removeItem('name');
console.log(r);

var y = sessionStorage.removeItem('name');
console.log(y);
//  clear()
var t = localStorage.clear('compay');
console.log(t);
var j = sessionStorage.clear('compay');
console.log(j);

//  getItem()  ===  null
//  getItem()  ===  undefined
//  getItem()  ===  null  ||  getItem()

//  getItem()  ===  null
var m = localStorage.getItem('MOULISHWAR GOWD.KALUGURI') === null  
var n = sessionStorage.getItem('MOULISHWAR GOWD.KALUGURI') === null
console.log(m);
console.log(n);


//  getItem()  ===  undefined
let o = localStorage.getItem('compay') === undefined 
console.log(o);

let p = sessionStorage.getItem('compay') === undefined
console.log(p);

//  getItem()  ===  null  ||  getItem()
var h = localStorage.getItem('name') === null || localStorage.getItem('compay') === undefined 
console.log(h);



