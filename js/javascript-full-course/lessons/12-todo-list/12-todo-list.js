const todoList = [
  {
    name: 'complete this course',
    dueDate: '2023-04-09',
  },
  {
    name: 'go poop',
    dueDate: '2023-04-09',
  },
];
renderTodoList();

// Replace for loop with forEach
// Alternatively... `const renderTodoList = () => {...}`
function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    todoListHTML += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-btn js-delete-btn">Delete</button>
    `;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  // Handling event AFTER rendering on page
  /* `querySelectorAll()` (since multiple delete buttons) returns a `NodeList` (collection of HTML elements) object that behaves like a live, AUTO-UPDATED array */
  document
    .querySelectorAll('.js-delete-btn')
    // Retrieving HTML element and index of each "node" in `NodeList` object
    .forEach((deleteBtn, index) => {
      // **Closures**: `forEach()` always has access to `index` variable in its "inner" callback func (while it's in scope) even after it has finished running
      // console.log(index);
      deleteBtn.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-btn').addEventListener('click', () => {
  // Checks if input is empty
  if (document.querySelector('.js-name-input').value) addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = '';
  renderTodoList();
}
