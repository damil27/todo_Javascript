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
// addItem("new item with funtion");
// addItem("last item");

// function updateItem(id, item) {
//   todos[id] = item;
//   console.log(todos);
// }

// updateItem(1, "item--1");
// updateItem(0, "firstItem");

// function deleteItem(start) {
//   todos.splice(start, 1);
//   console.log(todos);
// }
