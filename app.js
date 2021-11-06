const todos = [
  { todoText: "Item 1", completed: false },
  { todoText: "Item 2", completed: false },
  { todoText: "Item 3", completed: false },
];

function addItem(item) {
  todos.push([{ todoText: item, completed: false }]);
  console.log(todos);
}
addItem("new object item");

function updateItem(id, item) {
  todos[id].todoText = item;
  console.log(todos);
}
updateItem(0, "Item 1 edited");

function toggle(position) {
  if (todos[position].completed === false) {
    todos[position].completed = true;
  } else {
    todos[position].completed = false;
  }
  console.log(todos);
}

toggle(0);
// function deleteItem(start) {
//   todos.splice(start, 1);
//   console.log(todos);
// }
