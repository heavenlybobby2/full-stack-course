const todos = ["walk max"];

let input = prompt("What would you link to do?").toLowerCase();

const addNewTodo = () => {
  todos.push(prompt("What will you like to add?"));
}

const removeTodo = () => {
  const toBeRemoved = prompt("What will you like to remove?");
  const i = todos.indexOf(toBeRemoved);
  if (i !== -1) {
    console.log("Item removed" + todos[i]);
    todos.splice(i, 1);
  } else {
    console.log("Sorry Item is not in your list")
  }
}



while (input !== "quit") {
  if (input === "show") {
    console.log(todos);
  } else if (input === "new") {
    addNewTodo();
  } else if (input === "remove") {
    removeTodo()
  }

  input = prompt("Ok, what would you like to do now?").toLowerCase();
}

console.log("All done");