📝 To-Do List Application 📝
This is a simple To-Do List application built using HTML, CSS, and JavaScript. It allows users to add, remove, and mark tasks as completed. The application also persists tasks in the browser's localStorage, ensuring that tasks are saved even after the page is refreshed.

Table of Contents✏️
Getting Started✏️
Features✏️
Usage✏️
Functions✏️
License✏️
Getting Started✏️
To use the To-Do List application, simply open the index.html file in a web browser.

bash
Copy code
$ open index.html
Features
Add new tasks to the list
Remove tasks from the list
Mark tasks as completed with a line-through effect
Persistence of tasks using browser's localStorage
Usage
Open the index.html file in a web browser.
Use the form to add new tasks to the list.
Click on a task to mark it as completed or remove it.
Tasks are saved in localStorage for persistence.
Functions
addTodoToDOM(todo)
Adds a new todo item to the DOM with a remove button and click event listener to toggle completion.

saveTodoToLocalStorage(todo)
Saves the provided todo to localStorage.

removeTodoFromDOM(todoItem)
Removes the specified todo item from the DOM.

removeTodoFromLocalStorage(todoText)
Removes the todo with the specified text from localStorage.

toggleTodoCompletion(todoItem)
Toggles the completion status of a todo item, updating the line-through effect and localStorage.
