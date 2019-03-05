// == 
// If variable are two different types, it will convert them to the same type.
// 

function showEqualityWithDoubleEquals(x, y) {
    if(x == y) {
        console.log('Equals');
    } else {
        console.log('Not equals')
    }
}

var x = 1;
var y = '1';

showEqualityWithDoubleEquals(x, y);

x = 1;
y = true;

showEqualityWithDoubleEquals(x, y);

x = 0;
y = false;

showEqualityWithDoubleEquals(x, y);


// ===
// There will be no type conversion


function showEqualityWithThreeEquals(x, y) {
    if(x === y) {
        console.log('Equals');
    } else {
        console.log('Not equals')
    }
}

var x = 1;
var y = '1';

showEqualityWithThreeEquals(x, y);

x = 1;
y = true;

showEqualityWithThreeEquals(x, y);

x = 0;
y = false;

showEqualityWithThreeEquals(x, y);


// Safe way to check existence

if(typeof z !== 'undefined'){
    console.log('exist');
} else {
    console.log('not exists');
}

// Because use if(z) is the same that if(z == true)