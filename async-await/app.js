
'use strict';
function asyncMethodWithPromise(message, num) {
    return new Promise(function(fulfill, reject) {
        setTimeout(function() {
            console.log(message + ' ' + num);
            fulfill(num + 1);
        }, 500);
    });
    
}

function findUser() {
    return asyncMethodWithPromise('find User');
}

function validateUser() {
   return  asyncMethodWithPromise('validate User');
}

function doStuff() { 
   return asyncMethodWithPromise('do stuff');
}

async function main() {
   var one = await asyncMethodWithPromise('open Db Connection', 0);
   var two = await asyncMethodWithPromise('find User', one);
   var three = await asyncMethodWithPromise('validate User', two);
   var four = await asyncMethodWithPromise('do stuff', three);
}

main();