/*This will be a challenge project which will be build alongside as I learn about arrays in notes.js

As i move accross the topics, there will be parallel development, i.e what i learnt in notes.js will be implemented as a challenge in this project*/

/*Create an array with five todos
then print a message like - You have X todos, where x is the actual length of the array

Print the first and second to last items -> Todo : Walk the dog
*/

const todo = [
  "Bring Groceries",
  "Complete the English Assignment",
  "Start Javascript project",
  "Push all the projects",
  "Watch Sherlock Season 5",
];

console.log(`You have ${todo.length} todo's...!!!`);

console.log(`Todo : ${todo[0]}, ${todo[todo.length - 2]}`);
