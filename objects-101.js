let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);

//Challenge Area
/*
object of a peron which has 
name, age, location

generate a string : yugandhar is 24 and lives in Mumbai.
then increase the age by 1 and then print the message again
*/

let person = {
  name: "Yugandhar",
  age: 24,
  location: "Mumbai",
};

console.log(
  `${person.name} is ${person.age} and lives in ${person.location}..:D`
);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} lives in ${person.location}`);
