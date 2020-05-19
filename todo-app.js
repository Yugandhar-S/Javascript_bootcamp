const todos = [
  {
    text: "Order lunch",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: false,
  },
  {
    text: "Buy Groceries",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Buy Tickets",
    completed: false,
  },
];

const filters = {
  searchText: "",
};

const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos-section").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos-section").appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todos-section").appendChild(p);
  });
};

renderTodos(todos, filters);

//Listen for new todo creation
document.querySelector("#add-todo").addEventListener("click", (e) => {
  e.target.textContent = "Todo was added";
  console.log("A Todo was added");
});

//Listen for todo text change
document.querySelector("#add-todo-text").addEventListener("input", (e) => {
  console.log(e.target.value);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});
