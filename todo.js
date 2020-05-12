/*This will be a challenge project which will be build alongside as I learn about arrays in notes.js

As i move accross the topics, there will be parallel development, i.e what i learnt in notes.js will be implemented as a challenge in this project*/

/*Create an array with five todos
then print a message like - You have X todos, where x is the actual length of the array

Print the first and second to last items -> Todo : Walk the dog

Challenge 2 :  to delete the 3rd item
Add a new item onto the end
Remove the first item from the list 

To deal with manipulation of elements 
in the end of array we use Push & Pop operation, 
to deal with start elements we use Shift and Unshift.
to deal with elements which are in the middle of the array we use Splice


Challenge 3 :
Using forEach api in the array to print the data like
Todo: 1.The first item 
        2.The Second item
        3.The third item, and so on

Challenge 4 :
Using for loop in the array to print the data like
Todo: 1.The first item 
        2.The Second item
        3.The third item, and so on

/*
1. convert array to an array of objects -> text, completed
2. to create a function to remove todo by text value

deleteTodo(todos,'text string)
console.log(todos)
*/

/* const todo = [
  "Bring Groceries",
  "Complete the English Assignment",
  "Start Javascript project",
  "Push all the projects",
  "Watch Sherlock Season 5",
]; */

const todo = [
  {
    text: "Order lunch",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: false,
  },
  {
    text: "Buy Groceries",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "To Excercise",
    completed: true,
  },
];

console.log(todo);

let deleteTodo = function (array, text) {
  let deletedTask = array.splice(
    array.findIndex(function (task) {
      return task.text.toLowerCase() === text.toLowerCase();
    }),
    1
  );
};

deleteTodo(todo, "cLean Kitchen");

console.log(todo);

/* for (let count = 0; count < todo.length; count++) {
  console.log(`${count + 1}:- ${todo[count]}`);
}

using the forEach with array is preferrable so commenting this for loop block*/
