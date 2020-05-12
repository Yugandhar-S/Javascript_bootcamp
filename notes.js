const notes = ["Note 1", "Note 2", "Note 3"];

/* console.log(notes.pop());
notes.push("My new note");

console.log(notes.shift());
notes.unshift("My First note"); */

//notes.splice(1, 1, "This is the second new item");

notes[2] = "This is the new note 3";

/* notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
}); */

console.log(notes.length);
console.log(notes);

//counting

/* for (let count = 0; count <= 2; count++) {
  console.log(notes[count]);
}

//for(count=0;count<notes.length;count++)
for (let count = 2; count >= 0; count--) {
  console.log(`${count + 1}. ${notes[count]}`);
}
 */
