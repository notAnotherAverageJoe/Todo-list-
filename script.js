// wanted to make sure that this line wouldn't run until the html document fully loaded.
document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("newTodoForm");
    let todoList = document.getElementById("todoList");
  
    //this allows me to load existing todos from localStorage
    let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    //this allows me to pull any todos that were saved in localstorage
    //and if there is nothing it opens a empty array
    for (let todo of savedTodos) {
      if (todo.text) {
        addTodoToDOM(todo);
        
      }
    }
  
    todoForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let newTodoText = document.getElementById("task").value;
      if (newTodoText.trim() !== "") {
        let newTodo = { text: newTodoText, completed: false };
        addTodoToDOM(newTodo);
        saveTodoToLocalStorage(newTodo);
      }
  
      todoForm.reset();
      
    });
  
    todoList.addEventListener("click", function(e) {
      const target = e.target;
      if (target.tagName.toLowerCase() === "li") {
        toggleTodoCompletion(target);
      } else if (target.tagName.toLowerCase() === "button") {
        let todoItem = target.closest("li");
        if (todoItem) {
          removeTodoFromDOM(todoItem);
          removeTodoFromLocalStorage(todoItem.querySelector("span").textContent.trim());
        }
      }
      
    });
})
function addTodoToDOM(todo) {
    let removeButton = document.createElement("button");
    removeButton.innerText = "X";

    let newTodo = document.createElement("li");
    let todoText = document.createElement("span");
    todoText.innerText = todo.text;

    newTodo.appendChild(todoText);
    newTodo.appendChild(removeButton);

    // Add "click to mark as done" functionality
    newTodo.addEventListener("click", function() {
        toggleTodoCompletion(newTodo);
    });

    // Insert the new todo after the last child of the list
    todoList.insertBefore(newTodo, null);
}
  function saveTodoToLocalStorage(todo) {
    let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  }

  function removeTodoFromDOM(todoItem) {
    todoItem.remove();
  }

  function removeTodoFromLocalStorage(todoText) {
    let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    let updatedTodos = savedTodos.filter(todo => todo.text !== todoText);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function toggleTodoCompletion(todoItem) {
    let todoText = todoItem.querySelector("span");

    // this will toggle the line-through effect
    todoItem.style.textDecoration = (todoItem.style.textDecoration === "line-through") ? "" : "line-through";

    // this will allow me to toggle the completed status in localStorage
    let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    for (let todo of savedTodos) {
      if (todo.text === todoText.innerText) {
        todo.completed = !todo.completed;
        break;
      }
    }
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  }

