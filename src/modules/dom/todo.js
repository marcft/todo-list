import { addButton } from '../../constants.js';
import './todo_style.css';

export function renderProjectTodos(project) {
    const main = document.querySelector('main');
    main.querySelectorAll('.todo-item').forEach(todo => todo.remove());

    project.todoList.forEach(todo => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-item');  
        todoContainer.classList.add(`todo-urgency-${todo.urgency}`);
        if(todo.isDone) todoContainer.classList.add('todo-done');

        todoContainer.innerHTML =
            `<input class="todo-checkbox" type="checkbox">
            <h3 class="todo-title">${todo.name}</h3>
            <button class="todo-details">Details</button>
            <p class="todo-date">${todo.dueDate}</p>
            <button class="todo-edit"><img src="assets/edit_icon.svg"></button>
            <button class="todo-delete"><img src="assets/trash_icon.svg"></button>`;
        
        main.insertBefore(todoContainer, addButton.todo);
    });
}