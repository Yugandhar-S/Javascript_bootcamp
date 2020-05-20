var numOne = document.getElementById("first-number");
var numTwo = document.getElementById("second-number");
var numThree = document.getElementById("third-number");
var addMax = document.querySelector("#maxNumber");

numOne.addEventListener("submit", max);
numTwo.addEventListener("submit", max);
numThree.addEventListener("submit", max);

function max() {
  alert(
    `The max number is ${Math.max(numOne.value, numTwo.value, numThree.value)}`
  );
}

document.querySelector("#display-Name").addEventListener("click", () => {
  addMax.innerHTML = "Yugandhar Salvi";
  console.log("Yugandhar Salvi");
  alert("Yugandhar Salvi");
});

for (let i = 1; i <= 5; i++) {
  const el = document.createElement(`h${i}`);
  el.textContent = "Yugandhar";
  document.querySelector("body").appendChild(el);
}
