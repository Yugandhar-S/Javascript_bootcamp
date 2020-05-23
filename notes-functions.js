//Read existing notes from LocalStorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes");
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else return [];
};

//Save the notes to LocalStorage
const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//Generate a DOm structure for a note

const generateNoteDOM = function (note) {
  const noteEl = document.createElement("p");

  if (note.title > 0) {
    noteEl.textContent = note.title;
  } else {
    noteEl.textContent = `Unnamed note`;
  }

  return noteEl;
};

//Render Application Notes

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};
