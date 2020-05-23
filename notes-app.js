const notes = getSavedNotes();

const filter = {
  searchText: "",
};

renderNotes(notes, filter);

document.querySelector("#create-note").addEventListener("click", (e) => {
  notes.push({
    id: uuidv4(),
    title: "",
    body: "",
  });

  saveNotes(notes);
  renderNotes(notes, filter);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filter.searchText = e.target.value;
  renderNotes(notes, filter);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  console.log(e.target.value);
});
