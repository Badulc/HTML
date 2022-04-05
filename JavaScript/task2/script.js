`use strict`

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

console.info(typeof(a));// undefined
console.info(typeof(b));// String
console.info(typeof(c));// int or number
console.info(typeof(d));// bool
console.info(typeof(e));// obj

let totMoney = 4000;
let paidAmount = 2348;
let leftToPay = totMoney - paidAmount;

console.log(`The total bill is £${totMoney} the remaining amount of money to be paid is £${leftToPay}`);