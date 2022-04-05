`use strict`

// OBJECTS, ARRAYS and JSON

// OBJECTS
// collection of data in ANY order
// made up of key : value pairs

let animal = new Object();
// console.log(typeof(animal));

animal[`name`] = `Clifford`;
animal[`type`] = `dog`;
animal[`size`] = `big`;

// console.log(animal);
// console.log(animal.type);

animal.colour = `red`;
// console.log(animal);


// LITERAL NOTATION
let vehicle = {
    type : `bike`,
    seats : 1,
    wheels : 2
}

// console.log(vehicle);
// console.log(vehicle.seats);

// Data can be stored in an ARRAY
let garage = [
    vehicle,
    {type:`car`,seats:5,wheels:4}
]

// console.log(garage);

// lets do some looping through an array

let x = [`a`,`b`,`c`,`d`,`e`];

for(let i = 0; i<x.length; i++){
    // console.log(x[i]);
}

// ENHANCED for loops
// work with arrays of items
// will always loop through EVERY item
for (let item of x) {
    // console.log(item);
}

// Specific Methods to act on ARRAYS

// reverse
// console.log(x.reverse());
// the join method
// console.log(x.join(`, the next letter is `));



// JSON

// JavaScript Object Notation
// Literal notation for JS objects

let newJSON = {
    name : `cameron`,
    age : 29
}

// to convert JSON to different datatypes 
// we have to use OVERLOADED methods

// JSON to string
let str = JSON.stringify(newJSON);

console.log(newJSON);
console.log(str);

let person = JSON.parse(`{"name":"ellie","age":43}`);
console.log(person);