//Create an array having 10 numbers , write a function whose  job is to return max number from the array

let numbers = [10, 9, 8, 7, 6, 15, 4, 3, 2, 1];

let maximum = function (anArray) {
  let sortedArray = anArray.sort((n1, n2) => {
    if (n1 < n2) {
      return -1;
    }
    if (n1 > n2) {
      return 1;
    }
    return 0;
  });
  return sortedArray[sortedArray.length - 1];
};

let descendingNum = function (anArray) {
  return anArray.sort((a, b) => b - a);
};

let asa = descendingNum(numbers);
console.log(asa);

console.log(maximum(numbers));

// Write your name on page but keep it hidden. On button click it should unhide your name

document.getElementById("show").addEventListener("click", () => {
  document.querySelector("#before-click").hidden = true;
  document.querySelector("#after-click").hidden = false;
});

//Write your name on page but keep it hidden. On button click it should unhide your name
document.getElementById("display-name").addEventListener("click", () => {
  let name = document.createElement("p");
  name.textContent = `My name is Yugandhar Salvi`;
  document.querySelector("body").appendChild(name);
});

document.getElementById("display-name-div").addEventListener("click", () => {
  document.querySelector("#name-hidden-div").hidden = false;
});

//On button click, display current date time in browser.
document.getElementById("show-date").addEventListener("click", () => {
  let dt = new Date();
  document.getElementById("date-time").innerHTML = dt.toLocaleString();
});

//Create two text boxes and a button , on button click it should copy data from one text box to another
document.getElementById("copy").addEventListener("click", () => {
  let box1 = document.getElementById("box1");
  console.log(box1.value);
  document.getElementById("box2").value = box1.value;
});

//Create an array having 10 numbers and display it in ascending order
let unordered = [11, 20, 73, 44, 5, 16, 97, 108, 69, 10];
document.getElementById("array").innerHTML = unordered;
function ascending() {
  unordered.sort((a, b) => a - b);
  document.getElementById("array").innerHTML = unordered;
}

// Create an array having 5 names and display it in descending order
let descOrdered = [11, 202, 313, 964, 555];
document.getElementById("array-01").innerHTML = descOrdered;
function descending() {
  descOrdered.sort((a, b) => b - a);
  document.getElementById("array-01").innerHTML = descOrdered;
}

//Declare a string   having an email Id and check if @ is there in the string or not
document.getElementById("email-check").addEventListener("change", (e) => {
  if (e.target.value.includes("@")) {
    document.getElementById(
      "email-message"
    ).innerHTML = `It's a valid email id`;
  } else {
    document.getElementById("email-message").innerHTML = `Not a valid email id`;
  }
});

//Declare a string having a 10 digit mobile number. Wwrite a function whose
document.getElementById("cellnumber").addEventListener("change", (e) => {
  if (e.target.value.length == 10) {
    document.getElementById("is-valid-phone").innerHTML = "Valid Phone Number";
  } else
    document.getElementById("is-valid-phone").innerHTML =
      "Not a Valid Phone Number";
});

//Write a function whose  job is to return a random number
function createRandom() {
  let min = 10;
  let max = 1050;
  document.getElementById("random-number").innerHTML = Math.floor(
    Math.random() * (max - min) + min
  );
}
