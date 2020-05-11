//=== eual to operator
//!== not equal to
//< less than operator
//> greater than operator
//<= less than equal to
//>= greater than eqal to

let name = "Yugandhar";
let f_name = name === "Yugandhar";
console.log(f_name);

let temp = 180;
//let isFreezing = temp <= 32;

if (temp <= 32) {
  console.log("It is freezing outside..!!!");
}

if (temp >= 110) {
  console.log("It is way to hot outside :(");
}
//Challenge area

/*create an age varaible set it to my age
calculate is child of they are 7 or under
calculate is senior if they are 65 or older
print is child value
print is senior value*/
/*
let age = 24;
let isChild = age <= 7;
let isSenior = age >= 65;

console.log(isChild);
console.log(isSenior);
*/

let age = 69;

if (age <= 7) {
  console.log("You are getting childrens discount");
}

if (age >= 65) {
  console.log("You are getting Senior discount");
}
