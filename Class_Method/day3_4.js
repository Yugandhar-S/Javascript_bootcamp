//Using arrow function, print factorial of a number
document.getElementById("number-fact").addEventListener("change", (e) => {
  let number = e.target.value;
  let fact = 1;
  console.log(number);
  for (let i = 2; i <= number; i++) fact = fact * i;
  document.getElementById("number-fact").value = fact;
});

// document.getElementById("info-push").innerHTML = `You have 0 balance`;

/*Create class Account having property name, balance. Write method deposit whose job is to increase balance with the amount deposited by user. Create two object sand call deposit method. Write method display which will display name and balance */

class Account {
  constructor(name = null, balance = 0) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }

  summary() {
    return ` Customer. ${this.name} has $${this.balance} in his account`;
  }
}

/*Create class Account having instance member name , balance . It has method deposit whose job is to increase balance. Create a child class current account inheriting from Account class. It has method withdraw whose job is to  reduce the balance. Create two objects of current account and call deposit and withdraw method. Child class has show method whose job is to display name and new balance.*/

class currentAccount extends Account {
  withdraw(amount) {
    this.balance = this.balance - amount;
  }
}

let cust1 = new Account("Sam", 100);
console.log(cust1.summary());
let cust2 = new currentAccount("Bob", 5000);
cust2.withdraw(200);
console.log(cust2.summary());

document.getElementById("info-push").innerHTML = cust1.summary();
let accountSummary = document.createElement("h3");
accountSummary.textContent = cust2.summary();
document.getElementById("info-push").appendChild(accountSummary);

//•	Create class math having two static methods, cube and square, whose job is to return the square and cube of a number
class mathSub {
  static square(n) {
    return n * n;
  }
}

class mathCube extends mathSub {
  static cube(n) {
    return n * n * n;
  }
}

console.log(mathCube.square(2));
console.log(mathCube.cube(3));
