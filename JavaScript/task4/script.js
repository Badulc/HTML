`use strict`

let a = 100; 
while (a <= 199) { //
  a++;
  console.log(`a = ${a}`);
}

let b = 100;
while (b <= 200) {
  if (b % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  b++;
}
// for loops instead of while loops
for (let c = 100; c <= 200; c++) {
    console.log(`a = ${c}`);
  }

  for (let d = 100; d <= 200; d++) {
    if (d % 2 == 0) {
      console.log("-");
    } else {
      console.log("*");
    }
  }  


    let now = new Date(); 
    let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
    break;
  case 2:
    console.log(`It's tuesday`);
    break;
  case 3:
    console.log(`It's wednesday`);
    break;
  case 4:
    console.log(`It's thursday`);
    break;
  case 5:
    console.log(`It's friday`);
    break;
  default:
    console.log(`wrong date on your machine c:`);
    break;
}