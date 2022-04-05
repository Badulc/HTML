`use strict`

// ITERATION

// loops

// FOR

// use a counter
// run until a condition is NO LONGER met
for(let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
}

// WHILE

// work with booleans
// run until a boolean is false
let condition = true;
let increment = 0;

while(condition) {
    console.log(`incement me`);
    increment++;

    if(increment == 3){
        condition = false;
    }
}

// DO-WHILE

// like a while loop
// always runs AT LEAST once

let a = false;

do {
    console.log(`we are running`);
} while(a);

// SWITCH CASES

// run until a BREAK or a RETURN

let num = 11;

switch(num) {
    case 0:
        console.log(`num = ${num}`);
        break;
    case 1:
        console.log(`num = ${num}`);
    case 2:
        console.log(`num = ${num}`);
    case 3:
        console.log(`num = ${num}`);
    case 4:
        console.log(`num = ${num}`);
        break;
    case 10:
        console.log(`num = ${num}`);
        break;
    default:
        console.log(`this is out of scope`);
}