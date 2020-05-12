let name = " Yugandhar Salvi ";

//Length property
console.log(name.length);

//Convert to upper case
console.log(name.toUpperCase());

//convert ti lower case
console.log(name.toLowerCase());

//Include methode-Includes password
let password = "abc123Yug098";
console.log(password.includes("password"));

//Trim method- A new string representing the calling string  stripped of whitespaces from both ends

console.log(name.trim());

//Challenge Area
/* to create a function isValidPassword= it will take a single argument the string password to validate and it will return true if a passowrd is valid or false,

criteria- if length>8 and does not contain the wor password.*/

let passwordOne = "Yugandhar@password";
let passwordTwo = "Yugandhar123";
let passwordThree = "Pass@012";

/*
let isValidPassword = function (password) {
  if (password.length < 8 || password.includes("password")) {
    return false;
  } else return true;
};
*/

/*
let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes("password")) {
      return true;
    } else return false;
  };
  */

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword(passwordOne));
console.log(isValidPassword(passwordTwo));
console.log(isValidPassword(passwordThree));
