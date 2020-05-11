/*
global scope (convertFahrenheitToCelsius, temp1, temp2)
    local scope(fahrenheit, celsius)
        local scope isFreezing

*/

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius <= 0) {
    let isFreezing = true;
    console.log("Its freezing outside");
  }

  return celsius;
};

let temp1 = convertFahrenheitToCelsius(32);
let temp2 = convertFahrenheitToCelsius(20);

console.log(temp1, temp2);
