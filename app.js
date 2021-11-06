const todos = [
  { todoText: "Item 1", completed: true },
  { todoText: "Item 2", completed: true },
  { todoText: "Item 3", completed: true },
];

// add new todo item
function addItem() {
  let newTodoInput = document.getElementById("new-todo");
  let item = newTodoInput.value;
  todos.push({ todoText: item, completed: false });
  newTodoInput.value = "";
  displaytodo();
}

function updateItem(id, item) {}
updateItem(0, "Item 1 edited");

function toggle(position) {
  if (todos[position].completed === false) {
    todos[position].completed = true;
  } else {
    todos[position].completed = false;
  }
  displaytodo();
}
function displaytodo() {
  for (let item = 0; item < todos.length; item++) {
    console.log(todos[item]);
  }
}

function toggleAll() {
  let completedTodo = 0;

  for (let item = 0; item < todos.length; item++) {
    if (todos[item].completed === true) {
      completedTodo++;
    }
  }
  if (completedTodo === todos.length) {
    for (let item = 0; item < todos.length; item++) {
      todos[item].completed = false;
    }
  } else {
    for (let item = 0; item < todos.length; item++) {
      todos[item].completed = true;
    }
  }

  displaytodo();

  // for (let item = 0; item < todos.length; item++) {
  //   if (todos[item].completed === true) {
  //     todos[item].completed = false;
  //     completedTodo++;
  //   } else {
  //     todos[item].completed = true;
  //   }
  // }
}
let toggleBtn = document.getElementById("toggleAll__Btn");

toggleBtn.addEventListener("click", toggleAll);
let addButton = document.getElementById("add__btn");

// function deleteItem(start) {
addButton.addEventListener("click", addItem);
//   todos.splice(start, 1);
//   console.log(todos);
// }
