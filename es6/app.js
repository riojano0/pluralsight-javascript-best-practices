
//Let create on the own scope avoid not wanted behavior

for(let i = 0; i<10; i++) {
    console.log(i);
}

console.log('I see i...' + i);

//babel app.js -o es6.js