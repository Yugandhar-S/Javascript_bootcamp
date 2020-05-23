//Fetch existing todos from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem("todos");

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else return [];
};

//Save todos to LocalStorage

const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//Render application todos based on filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector("#todos-section").innerHTML = "";

  document
    .querySelector("#todos-section")
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(function (todo) {
    document.querySelector("#todos-section").appendChild(generateTodoDOM(todo));
  });
};

//Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
  const p = document.createElement("p");
  p.textContent = todo.text;
  return p;
};

//Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
