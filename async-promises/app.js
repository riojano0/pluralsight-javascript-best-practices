// function asyncMethod(message, cb) {
//     setTimeout(function() {
//         console.log(message);
//         cb();
//     }, 500);
// }

// asyncMethod('open Db Connection', function() {
//     asyncMethod('find User', function() {
//         asyncMethod('validate User', function() {
//             asyncMethod('do stuff', function() {});
//         });
//     });
// });


function asyncMethodWithPromise(message) {
    return new Promise(function(fulfill, reject) {
        setTimeout(function() {
            console.log(message);
            fulfill();
        }, 500);
    });
    
}

// Intermediate Step
// function findUser() {
//     asyncMethodWithPromise('find User')
//     .then(validateUser);
// }

// function validateUser() {
//     asyncMethodWithPromise('validate User')
//     .then(doStuff);
// }

// function doStuff() { 
//     asyncMethodWithPromise('do stuff')
//     .then(function() {});
// }

// asyncMethodWithPromise('open Db Connection')
//     .then(findUser);


// How we are returnin a promise, we can do this
function findUser() {
    return asyncMethodWithPromise('find User')
}

function validateUser() {
   return  asyncMethodWithPromise('validate User')
}

function doStuff() { 
   return asyncMethodWithPromise('do stuff')
}

asyncMethodWithPromise('open Db Connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function() {});
