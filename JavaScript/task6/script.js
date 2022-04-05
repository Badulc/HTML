`use strict`

let darth = new Object();
// console.log(typeof(darth));

darth[`allegiance`] = `empire`;
darth[`weapon`] = `lightsaber`;
darth[`sith`] = `true`;

console.log(darth);

console.log(`Darth Vader's allegiance is to the `, darth.allegiance);

console.log(`Darth Vader's weapon is a `, darth.weapon);

console.log(`Darth Vader's allegiance is to the sith `, darth.sith);

console.log(`Darth Vader is a Jedi? ${darth.sith ? "false" : "true"}`);

let myArray = [`hello`,`everyone..`];


     console.log(myArray.length);

     console.log(myArray.push("today","is", "tuesday"));

     console.log(myArray.length);

     console.log(myArray.shift());

     for (let items of myArray) {
         console.log(items);
    }