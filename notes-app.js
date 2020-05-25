let notes = getSavedNotes();

const filters = {
  searchText: "",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  const id = uuidv4();

  notes.push({
    id: id,
    title: "",
    body: "",
  });
  saveNotes(notes);
  location.assign(`edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

const noteId = location.hash.substring(1);
window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// const now = moment();
// console.log(now)
// console.log(now.format(`MMMM Do, YYYY`));
// now.subtract(1, "Week").add(20, "Days");
// console.log(now.format(`MMMM Do, YYYY`));
// console.log(now.fromNow())
// const nowTimeStamp=now.valueOf()
// console.log(moment(nowTimeStamp).toString())

const Birthday = moment();
Birthday.year(1995).month("October").date(27);
console.log(Birthday.format(`MMM D, YYYY`));
console.log(Birthday.fromNow());
