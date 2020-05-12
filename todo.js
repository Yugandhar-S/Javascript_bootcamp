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

*/

const todo = [
  "Bring Groceries",
  "Complete the English Assignment",
  "Start Javascript project",
  "Push all the projects",
  "Watch Sherlock Season 5",
];

console.log(`You have ${todo.length} todo's...!!!`);

todo.splice(2, 1);
todo.push("Buy Coffee");
todo.shift();

//console.log(todo);
//console.log(`Todo : ${todo[0]}, ${todo[todo.length - 2]}`);

console.log(`You have ${todo.length} todo's...!!!`);
todo.forEach(function (item, index) {
  console.log(`${index + 1}:- ${item}`);
});

/* for (let count = 0; count < todo.length; count++) {
  console.log(`${count + 1}:- ${todo[count]}`);
}

using the forEach with array is preferrable so commenting this for loop block*/
