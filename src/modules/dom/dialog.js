import { parse, format } from 'date-fns';
import './dialog_style.css';

const main = document.querySelector('main');

export function renderTodoDetailsDialog(todo) {
    const todoDetailsDialog = document.createElement('dialog');
    todoDetailsDialog.classList.add('details-dialog');

    const div = document.createElement('div');
    div.classList.add('details-content');

    div.innerHTML =
        `<h3>${todo.name}</h3>
        <p>Urgency: ${todo.urgency}</p>
        <p>Due date: ${todo.dueDate}</p>
        <p>${todo.description}</p>`;
    
    todoDetailsDialog.appendChild(div);

    //Delete dialog when clicking outside of it
    todoDetailsDialog.addEventListener('click', (e) => {
        if(e.target === todoDetailsDialog) todoDetailsDialog.remove();
    });

    main.appendChild(todoDetailsDialog);
    todoDetailsDialog.showModal();
}

export function renderNewTodoFormDialog() {
    const todoFormDialog = document.createElement('dialog');
    todoFormDialog.classList.add('todo-form-dialog');

    const form = document.createElement('form');

    form.innerHTML = 
        `<h2>Todo Form</h2>
        <p>
            <label for="todo-title">Title</label>
            <input type="text" id="todo-title" name="todo-title" maxlength="30" required>
        </p>
        <p>
            <label for="todo-date">Due Date</label>
            <input type="date" id="todo-date" name="todo-date" required>
        </p>
        <p>
            <label for="todo-urgency">Urgency</label>
            <select id="todo-urgency" name="todo-urgency" required>
                <option value="low" selected>Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </p>
        <p>
            <label for="todo-description">Description</label>
            <textarea id="todo-description" name="todo-description" maxlength="200" rows="4"></textarea>
        </p>
        <p>
            <button type="submit">Confirm</button>
            <button id="cancel-todo-form" type="button">Cancel</button>
        </p>`;

    todoFormDialog.appendChild(form);

    main.appendChild(todoFormDialog);
    todoFormDialog.showModal();

    return todoFormDialog;
}

export function renderTodoEditDialog(todo){
    const todoFormDialog = renderNewTodoFormDialog();

    const parsedDate = parse(todo.dueDate, 'do MMM', new Date());
    const deformattedDate = format(parsedDate, 'yyyy-MM-dd');

    todoFormDialog.querySelector('form').reset();
    todoFormDialog.querySelector('input[name="todo-title"]').value = todo.name;
    todoFormDialog.querySelector('input[name="todo-date"]').value = deformattedDate;
    todoFormDialog.querySelector('select[name="todo-urgency"]').value = todo.urgency;
    todoFormDialog.querySelector('textarea[name="todo-description"]').value = todo.description;
    todoFormDialog.showModal();

    return todoFormDialog;
}