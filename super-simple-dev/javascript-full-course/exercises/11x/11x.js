let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
renderTodoList();

// "render" = display on the screen
function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject; // Destructuring

    // Generating HTML code for each todo as string
    todoListHTML += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-btn" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate }); // Shorthand for { name: name, dueDate: dueDate }

  // Resets input field after adding a todo
  inputElement.value = '';
  renderTodoList();
}
