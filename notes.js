const notes = [
  {
    title: "my Next Trip",
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

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else return 0;
  });
};

sortNotes(notes);
console.log(notes);
/* const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const note = findNote(notes, "office modification");
console.log(note);

let filteredNotes = notes.filter(function (notes, index) {
  const isTitleMatch = notes.title.toLocaleLowerCase().includes("off");
  const isBodyMatch = notes.body.toLocaleLowerCase().includes("ne");
  return isTitleMatch || isBodyMatch;
});

const findNotes = function (notes, query) {
  return notes.filter(function (notes, index) {
    const isTitleMatch = notes.title
      .toLocaleLowerCase()
      .includes(query.toLowerCase());
    const isBodyMatch = notes.body
      .toLocaleLowerCase()
      .includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, "eating")); */
