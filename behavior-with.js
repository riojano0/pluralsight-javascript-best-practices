'use strict';
var obj = {
    a: {
        b: {
            c: 'hello'
        }
    }
};

//console.log(obj.a.b.c);

var c = 'Enter to the scope';

// with(obj.a.b) { // <- With violates lexical scope, dont use.
//     console.log(c);
// }

(function(newVar) {
    console.log(newVar);
}(obj.a.b.c));