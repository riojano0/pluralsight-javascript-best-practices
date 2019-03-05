'use strict';

var x = 120,
    y = 012; // <- Javacsript think is a Octal (10)

var correctOctal = parseInt(12, 8);

console.log(x+y);