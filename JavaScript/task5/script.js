`use strict`

let age =19;

if (age >= 18 && age <=65 ) {
    console.log(`correct age`);
} else if (age<18) {
    console.log(`underage`)
} else if (age>65){
    console.log(`too old`);
}

let age2 = 100;
let result = age2 >= 50 ? "50 or over" : "Under 50";
console.log(result);