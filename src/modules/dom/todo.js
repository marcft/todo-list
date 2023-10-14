import { addButton } from '../../constants.js';
import './todo_style.css';

const main = document.querySelector('main');

export function renderProjectTodos(project) {
    main.querySelectorAll('.todo-item').forEach(todo => todo.remove());

    project.todoList.forEach(todo => { renderSingleTodo(todo); });

    return main.querySelectorAll('.todo-item');
}

export function renderSingleTodo(todo) {
    const todoContainer = document.createElement('div');
    todoContainer.setAttribute('id', todo.id);
    todoContainer.classList.add('todo-item');  
    todoContainer.classList.add(`todo-urgency-${todo.urgency}`);
    if(todo.isDone) todoContainer.classList.add('todo-done');

    const todoCheckbox = document.createElement('input');
    todoCheckbox.classList.add('todo-checkbox');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.checked = todo.isDone;

    const todoTitle = document.createElement('h3');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.name;

    const todoDetailsButton = document.createElement('button');
    todoDetailsButton.classList.add('todo-details');
    todoDetailsButton.textContent = 'Details';

    const todoDate = document.createElement('p');   
    todoDate.classList.add('todo-date');
    todoDate.textContent = todo.dueDate;

    const todoEditButton = document.createElement('button');
    todoEditButton.classList.add('todo-edit');
    const todoEditIcon = document.createElement('img');
    todoEditIcon.setAttribute('src', 'assets/edit_icon.svg');
    todoEditButton.appendChild(todoEditIcon);

    const todoDeleteButton = document.createElement('button');
    todoDeleteButton.classList.add('todo-delete');
    const todoDeleteIcon = document.createElement('img');
    todoDeleteIcon.setAttribute('src', 'assets/trash_icon.svg');
    todoDeleteButton.appendChild(todoDeleteIcon);

    todoContainer.append(
        todoCheckbox, todoTitle, todoDetailsButton, todoDate, todoEditButton, todoDeleteButton);
        
    main.insertBefore(todoContainer, addButton.todo);

    return todoContainer;
}

export function renderTodoDetails(todo) {
    const todoDetails = document.createElement('div');
    todoDetails.classList.add('todo-details-container');
    todoDetails.innerHTML =
        `<h3 class="todo-details-title">${todo.name}</h3>
        <p class="todo-details-urgency">Urgency: ${todo.urgency}</p>
        <p class="todo-details-date">Due date: ${todo.dueDate}</p>
        <p class="todo-details-description">${todo.details}</p>`;
    //Esto no
    main.insertBefore(todoDetails, addButton.todo);
}

export function toggleTodoDone(todoItem) {
    const todoElement = document.getElementById(todoItem.id);
    todoElement.classList.toggle('todo-done');
}