`use strict`

// CONDITIONALS

// Truthy and Falsey

/*
Falsey:
false
0
`` '' ""
undefined
null
NaN -> not a number
Truthy:
EVERYTHING ELSE
*/

// IF (ELSE IF and ELSE)

// check a condition, then run a code block if it is met

let a = 0;

if (a == 2) {
    console.log(`a is currently ${a}`);
} else if (a) {
    console.log(`a is truthy`);
} else {
    console.log(`a is falsey`)
}

// TERNARY IF
// shorthand version of an IF / ELSE statement

let x = 1;

if (x == 1) {
    console.log(`hello`);
} else {
    console.log(`goodbye`);
}

x == 1 ? console.log(`hello`) : console.log(`goodbye`);

// EQUALITY and TYPE

// type is mutable in JS
// so you can compare different data types!

1 == `1` ? console.log(true) : console.log(false);

// JS is mutating the type so that ONE is equal to ONE
// it is checking the VALUE not the TYPE


// if you want to ALSO evaluate the type
2 === `2` ? console.log(true) : console.log(false);

// the STRICTLY EQUAL OPERATOR '==='
// this checks type and value