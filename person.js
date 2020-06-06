class Person {
  constructor(firstname, lastname, age, likes = []) {
    this.firstName = firstname;
    this.age = age;
    this.lastName = lastname;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is of ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like},`;
    });

    return bio;
  }

  setName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    //Yugandhar is a Developer
    return `${this.firstName} ${this.lastName} is a ${this.position}.`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

/*            Challenge Area

  1. Create a class student
  2.Track students grade. 0-100
  3.Override bio to print a passing or failing message.
    70 or above " Yugandhar is Passing the class"
  4.Create "updateGrade" that takes the amount to add or remove from the grade
*/

class Student extends Person {
  constructor(firstName, lastName, age, likes, grade) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }

  updateGrade(newGrade) {
    this.grade += newGrade;
  }

  getBio() {
    const status = this.grade >= 70 ? "passing" : "failing";
    return `${this.firstName} is ${status} the class.`;

    // return this.grade > 70
    //   ? `${this.firstName} is Passing the class with ${this.grade}.`
    //   : `${this.firstName} is Failing the class with ${this.grade}.`;
  }
}

let Prashant = new Student("Prashant", "Dhawan", 22, ["c++", "Java"], 80);
console.log(Prashant.getBio());
Prashant.updateGrade(-35);
console.log(Prashant.getBio());
Prashant.updateGrade(25);
console.log(Prashant.getBio());
console.log(Prashant);
