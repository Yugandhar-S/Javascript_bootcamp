//DOM -  DOCUMENT OBJECT MODEL

//Query and Remove
/* const p = document.querySelector("p");
p.remove(); */

// Query all and remove

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

const filter = {
  searchText: "",
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filter);

document.querySelector("#create-note").addEventListener("click", (e) => {
  e.target.textContent = "The button was clicked";
  console.log("A note was added");
});

document.querySelector("#remove-note").addEventListener("click", (e) => {
  document.querySelectorAll(".note").forEach((note) => {
    note.remove();
  });
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filter.searchText = e.target.value;
  renderNotes(notes, filter);
});
