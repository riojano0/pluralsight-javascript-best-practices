// JavaScript is trying to help, don't let it

// Use strict on the correct scope
function print(out) {
    'use strict';
    stringToPrint = out;
    console.log(stringToPrint);
}

randomVar = 25;
print('hello');
console.log(stringToPrint);