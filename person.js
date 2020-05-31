const person = function (firstname, age, lastname) {
  this.firstName = firstname;
  this.age = age;
  this.lastName = lastname;
};

const me = new person("Yugandhar", 25, "Salvi");
console.log(me);

person.prototype.isActive = true;

const you = new person("Sachin", 26, "Gowda");
console.log(you);
console.log(you.isActive);
console.log(person.prototype);
me.isActive = false;
console.log(me.isActive);
console.log(person.prototype);

const person2 = new person("Clancey", 51, "Turner");
console.log(person2);

//Challenge area
/*Hangman game*/
