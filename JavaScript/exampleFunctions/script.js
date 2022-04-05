`use strict`

// FUNCTIONS
/*
    a block of code that does a thing!
    the are envoked (or run) when 'called'
    DRY principles (don't repeat yourself)
    they can take arguments
    globally scoped
*/

function hello(message) {
    console.log(message);
}

// hello(false);

// RETURNS

// when a function reaches a return it stops

let bye = false;

function goodbye() {
    console.log(`goodbye`);
    return bye = true;
    console.log(`you can't see me`);
}

// console.log(bye);

// goodbye();

// console.log(bye);

// VARIABLE RETURNS

function sum(a , b) {
    return a + b;
}

// console.log(sum(11,11));


// ARROW FUNCTIONS

function log(data) {
    console.log(data);
}

log = (data) => {
    console.log(data);
}

log = (data) => {console.log(data)}

log = data => console.log(data);