// errors 
// System errors 
// if (true {
//     console.log("Missing parenthesis");
// });

if (true) {
    console.log("Missing parenthesis");
}

//  2. ReferenceError
// console.log(name); // name is not defined

// 3. TypeError:-
// Occurs when: A value is not the expected type or an operation is invalid for the given type.
//     var num = 42;
// num.toUpperCase(); // TypeError: num.toUpperCase is not a function


// 4.RangeError:-Occurs when: A number is outside the allowable range of values.

// let arr = new Array(-5); // RangeError: Invalid array length

// 5. EvalError (rarely used today)
// Occurs when: There's an error in the eval() function (which evaluates a string as code). It’s largely historical..


// 6. URIError
// Occurs when: encodeURI() or decodeURI() is used with an invalid URI.
// decodeURI('%'); // URIError: URI malformed


// 7. InternalError (non-standard, in some engines like Firefox)
// Occurs when: The JavaScript engine itself runs into an internal issue like too much recursion.
// function recurse() {
//     recurse();
// }
// recurse(); // InternalError: too much recursion (in some environments)


// // 8.Error Handling
// // Wrap risky code in try...catch:
// try {
//     riskyCode();
// } catch (error) {
//     console.error(error.name + ": " + error.message);
// }


// 9. option chaining ?:-

var obj = {
    a: 1,
    b: {
        c: 2
        }
        };
        console.log(obj.b.c); // 2
        console.log(obj.b.d); // undefined
        console.log(obj.b.d.e); // undefined
        console.log(obj.b.d.f); // undefined
        console.log(obj.b.d.g); // undefined
        // option chaining is a way to access nested objects in a more readable way. It is a
        // shorthand for accessing nested objects. It is a way to avoid writing long chains of
        // dot notation. It is a way to avoid writing long chains of dot notation. It is
        // a way to avoid writing long chains of dot notation. It is a way to avoid writing
        // long chains of dot notation. It is a way to avoid writing long chains of dot notation
        // It is a way to avoid writing long chains of dot notation. It is a way to








