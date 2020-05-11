/*
Function - input(argument/s), code, output(return value)

*/

let greetUser = function () {
  console.log("Welcome user!!");
};

greetUser();
greetUser();
greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);

let otherValue = square(10);

console.log(value, otherValue);

//Challenge area

/*
convertFahrenheitToCelsius

call a couple of times (32->0)(68->20)

print the converted values
*/

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let temp1 = convertFahrenheitToCelsius(32);

let temp2 = convertFahrenheitToCelsius(68);

console.log(temp1, temp2);
