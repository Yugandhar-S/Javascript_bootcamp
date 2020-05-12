const notes = [
  {
    title: "My Next Trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: "Excercise. Eating a bit better",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

/* console.log(notes.pop());
notes.push("My new note");

console.log(notes.shift());
notes.unshift("My First note"); */

//notes.splice(1, 1, "This is the second new item");
/* 
notes[2] = "This is the new note 3";

/* notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
}); */

/* console.log(notes.length);
console.log(notes);
 */

//counting

/* for (let count = 0; count <= 2; count++) {
  console.log(notes[count]);
}

//for(count=0;count<notes.length;count++)
for (let count = 2; count >= 0; count--) {
  console.log(`${count + 1}. ${notes[count]}`);
}
 */

/* const findNote = function (notes, noteTitle) {
  const index = notes.findIndex(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
  return notes[index];
}; */

/* const findNote = function (notes, noteTitle) {
  const index = notes.findIndex(function (note, index) {
    return note.title === noteTitle;
  });
  return notes[index];
}; */

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const note = findNote(notes, "office modification");
console.log(note);

/* 
const index = notes.findIndex(function (note, index) {
  return note.title === "Office modification";
});

console.log(index); */
