// Functions are first class objects

// Declarations
// How is a declaration can be use because on this way

myFunc();

function myFunc() {
    console.log('Hi from my func');
}

// Functions Expressions
//expression(); <- By the hosting can be use on top and will return undefined

var expression =  function () {
    console.log('Hi form my expression');
};

expression();