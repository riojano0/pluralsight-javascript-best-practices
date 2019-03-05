// Hoisting
// Is Javascript default behavior of moving all declarations to the top of the current scope
// Variables are created when their containing Lexical Environment is instantiated and are initialized undefined

console.log(myVariable);
var myVariable = 10;

//

var myVariable2 = 10;

function func() {
    myVariable2 = 25;
}

console.log(myVariable2);

func()
console.log(myVariable2);