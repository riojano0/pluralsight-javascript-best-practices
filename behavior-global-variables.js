// Global Variables

var toPrint = 'print me';

function print(out) {
    stringToPrint = out;
    console.log(stringToPrint);
    console.log(toPrint);
}

// console.log(stringToPrint); <- Exploded
print('hello');
console.log(stringToPrint); // <- Work but is not the behaviour we want
// This can be fixed by strict mode