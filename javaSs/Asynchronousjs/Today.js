// Asynchronousjs
// callback 
// Promise 
// async and await 

// 1. Callback
// function getUserName(callback) {
//     setTimeout(() =>
//         callback("John Doe"), 2000);
//     }
//     getUserName(name =>
//         console.log(name));
//         // Output: John Doe

// console.log("one");
// window.setTimeout(()=>{
//     console.log('two');
    
// },3000)
// console.log('three');




// callback:-A function that can be passsed as an argument other functions, and can be called from within those functions.

function one(nextFunction) {
    var a = 10;
    window.setTimeout(() => {
        console.log("one function");
        nextFunction();
    }, 4000);
}

function two(nextFunction) {
    window.setTimeout(() => {
        console.log("two function");
        nextFunction();
    }, 5000);
}

function three(nextFunction) {
    window.setTimeout(() => {
        console.log("three function");
        nextFunction();
    }, 6000);
}

function four() {
    console.log("four function");
}

// Run the callbacks in sequence
one(() => {
    two(() => {
        three(() => {
            four();
        });
    });
});

// Output: one function, two function, three function, four function


// Promise :-
// A promise is a result of an operation that hasn't completed yet, but will complete at som
// time in the future.
// A promise is an object that is used to handle asynchronous operations in JavaScript.
// It is used to handle the situation when the result of an operation is not available yet, but
// will be available at some point in the future.
// A promise is created using the Promise constructor, which takes a function as an argument.
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise was rejected.");
  }
});

myPromise
  .then(function(result) {
    console.log(result); // This will print if promise is resolved
  })
  .catch(function(error) {
    console.log(error); // This will print if promise is rejected
  })
 .finally(function() {
    console.log("This runs no matter what.");
  });
   


  // fetch():-
  // The fetch API provides an easy, logical way to fetch resources asynchronously across the network.
  var apidata = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response =>
    {
      if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data =>
          {
            console.log(data);
            })
            .catch(error =>
              {
                console.error('There has been a problem with your fetch operation:', error);
                });


// frontend ----> (API) Request ----> Backend 
// Backend ----> (API) Response ----> frontend

// API Methods
// 1.GET --> Retrieve data from server
// 2.POST --> Send data to server
// 3.PUT --> Update data on server
// 4.PATCH --> Update data on server
// 5.DELETE --> Delete data from server


// GET :-
// 1. GET is used to retrieve data from server

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  //  2.POST:-
  //  POST is used to send data to server
  var user = {
    name : 'mouli',
    city : 'banglore',
    job : 'software engineer'
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body : JSON.stringify(user),
    headers : {
      'Content-Type' : 'application/json',
      }
      })
       .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  // 3.PUT:- 
  //  PUT is used to update data on server
  var user = {
    id : 8,
    userid : 1,
    title : 'mouli',
    body : 'software engineer'
    }
    fetch('https://jsonplaceholder.typicode.com/posts/8', {
      method: 'PUT',
      body : JSON.stringify(user),
      headers : {}
      })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  // Patch:-
  //  Patch is used to update data on server
  var user = {
    id : 8,
    userid : 1,
    title : 'mouli',
    body : 'software engineer'
    }
    fetch('https://jsonplaceholder.typicode.com/posts/8', {
      method: 'PATCH',
      body : JSON.stringify(user),
      headers : {}
      })
    .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  // 4.DELETE:-
  //  Delete is used to delete data from server
  fetch('https://jsonplaceholder.typicode.com/posts/8', {
    method: 'DELETE',
    })
     .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
    




// Promise.all():-
//  Promise.all() is used to execute multiple promises at the same time
//  It returns a promise that resolves when all of the promises in the array have resolved, or
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4)
])
.then(values => {
  console.log(values); // Output: [1, 2, 3, 4]
})
.catch(error => {
  console.error('Error fetching data:', error);
});

//  Promise.allSettled():
//  Promise.allSettled() is used to execute multiple promises at the same time
//  It returns a promise that resolves when all of the promises in the array have either resolved or








// Promise.resolve:- 
//  Promise.resolve() is used to create a promise that is already resolved
//  It returns a promise that is resolved with the given value

var a = Promise.resolve('Hello');

a.then((value) => {
  console.log(value);  // Output: Hello
})
.catch((value) => {
  console.log(value);
});
//  Promise.reject():
//  Promise.reject() is used to create a promise that is rejected
//  It returns a promise that is rejected with the given reason
// // Creating a rejected promise
var b = Promise.reject('Oops, an error occurred!');

// Handling the rejected promise
b.then((value) => {
  console.log('Resolved value:', value);
})
.catch((error) => {
  console.error('Rejected reason:', error); // Output: Rejected reason: Oops, an error occurred!
});
//  Promise.race():
//  Promise.race() is used to execute multiple promises at the same time
//  It returns a promise that resolves or rejects as soon as one of the promises in the array
//  resolves or rejects
Promise.race([
  new Promise((resolve, reject) =>
    window.setTimeout(() => resolve('First promise resolved'), 2000)
  ),
  new Promise((resolve, reject) =>
    window.setTimeout(() => reject('First promise rejected'), 1000)
  )
])
.then(data => console.log(data))
.catch(error => console.error(error));

// Promise.any():-
//  Promise.any() is used to execute multiple promises at the same time
//  It returns a promise that resolves as soon as one of the promises in the array resolves
//  If all promises are rejected, it rejects with AggregateError
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => resolve('First promise resolved'), 2000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject('First promise rejected'), 1000)
  )
])
.then(data => console.log(data))
.catch(error => console.error(error));







  

      

  


      





