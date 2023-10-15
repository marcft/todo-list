//Corregir bug de estilo quan nian molts todos
//Afegir estil als dialogs

import { format } from 'date-fns';

import { addButton } from './constants.js';

import { ProjectsList, Project, DefaultProject } from './modules/logic/project.js';
import { TodoItem } from './modules/logic/todo.js';

import * as projectsDOM from './modules/dom/project.js';
import * as todoDOM from './modules/dom/todo.js';
import * as dialogDOM from './modules/dom/dialog.js';

const myProjectsList = new ProjectsList(
        new DefaultProject('Inbox'), new DefaultProject('Today'), new DefaultProject('Week'),
        new Project('First Project'));

initializeState();

function initializeState() {
    //Display default projects
    const inboxProjectButton =
        projectsDOM.displayDefaultProject(myProjectsList.inboxProject, 'assets/inbox_icon.svg');
    const dayProjectButton =
        projectsDOM.displayDefaultProject(myProjectsList.dayProject, 'assets/today_calendar_icon.svg');
    const weekProjectButton =
        projectsDOM.displayDefaultProject(myProjectsList.weekProject, 'assets/week_calendar_icon.svg');

    //Initialize active project
    const initialActiveProject = document.getElementById(myProjectsList.activeProject.id);
    projectsDOM.setActiveClassTo(initialActiveProject);
    const todosList = todoDOM.renderProjectTodos(myProjectsList.activeProject);
    todosList.forEach(todo => setTodoElementListeners(todo));
    myProjectsList.isDefaultProjectId(initialActiveProject.id)
                ? todoDOM.hideAddTodoButton() : todoDOM.showAddTodoButton();

    //Set listeners to default projects, just the ActiveProjectListener
    const defaultProjects = [inboxProjectButton, dayProjectButton, weekProjectButton];
    defaultProjects.forEach( project => setActiveProjectListener(project) );

    //Display personal projects and set listeners
    const personalProjects = myProjectsList.personalProjectsList;
    personalProjects.forEach( project => { setPersonalProject(project); } );
}

//Default projects are setted in the initializeState function, and they have a different functionality
function setPersonalProject(project) {
    const projectButton = projectsDOM.displayPersonalProject(project);
    setActiveProjectListener(projectButton);
    setDeleteProjectListener(projectButton);
}

function setActiveProjectListener(projectButton) {
    projectButton.addEventListener('click', () => {
        const isDefaultProject = myProjectsList.isDefaultProjectId(projectButton.id);

        myProjectsList.activeProject = myProjectsList.getProjectById(projectButton.id);
        projectsDOM.setActiveClassTo(projectButton);

        const todosList = todoDOM.renderProjectTodos(myProjectsList.activeProject);
        todosList.forEach(todo => setTodoElementListeners(todo));

        isDefaultProject ? todoDOM.hideAddTodoButton() : todoDOM.showAddTodoButton();
    });
}

function setDeleteProjectListener(projectButton) {
    const deleteIcon = projectButton.querySelector('.delete-project');
    deleteIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        myProjectsList.removePersonalProjectById(projectButton.id);
        projectsDOM.removePersonalProject(projectButton);
        if(myProjectsList.activeProject.id === projectButton.id) {
            myProjectsList.activeProject = myProjectsList.inboxProject;
            projectsDOM.setActiveClassTo(document.getElementById(myProjectsList.activeProject.id));
            todoDOM.renderProjectTodos(myProjectsList.activeProject);
        }
    });
}

addButton.project.addEventListener('click', () => {
    projectsDOM.hideAddProjectButton();
    const form = projectsDOM.displayProjectForm();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectName = form.querySelector('input').value;
        const newProject = new Project(projectName);
        myProjectsList.addPersonalProject(newProject);
        setPersonalProject(newProject);
        form.remove();
        projectsDOM.showAddProjectButton();
    });

    form.addEventListener('reset', () => {
        form.remove();
        projectsDOM.showAddProjectButton();
    });
});

addButton.todo.addEventListener('click', () => {
    const newTodoDialog = dialogDOM.renderNewTodoFormDialog();
    setCloseDialogListener(newTodoDialog);
    setCreateTodoDialogListener(newTodoDialog);
});

function setCloseDialogListener(dialog) {
    dialog.addEventListener('click', (e) => {
        if(e.target === dialog) dialog.remove();
    });

    const cancelButton = document.getElementById('cancel-todo-form');
    cancelButton.addEventListener('click', () => {
        dialog.remove();
    });
}

function setCreateTodoDialogListener(dialog) {
    const form = dialog.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoTitle = form.querySelector('input[name="todo-title"]').value;
        const todoUrgency = form.querySelector('select[name="todo-urgency"]').value;
        const todoDescription = form.querySelector('textarea[name="todo-description"]').value;
        const todoDate = form.querySelector('input[name="todo-date"]').value;
        const formattedDate = format(new Date(todoDate), 'do MMM');

        const newTodo = new TodoItem(todoTitle, todoUrgency, todoDescription, formattedDate);
        myProjectsList.activeProject.add(newTodo);
        const todoElement = todoDOM.renderSingleTodo(newTodo);
        setTodoElementListeners(todoElement);
        dialog.remove();
    });
}

function setTodoElementListeners(todoElement) {
    const todoItem = myProjectsList.activeProject.getTodoById(todoElement.id);

    const todoCheckbox = todoElement.querySelector('.todo-checkbox');
    todoCheckbox.addEventListener('change', () => {;   
        todoItem.toggleIsDone();
        todoDOM.toggleTodoDone(todoElement);
    });

    const todoDetailsButton = todoElement.querySelector('.todo-details');
    todoDetailsButton.addEventListener('click', () => {
        dialogDOM.renderTodoDetailsDialog(todoItem);
    });

    const todoEditButton = todoElement.querySelector('.todo-edit');
    todoEditButton.addEventListener('click', () => {
        const editDialog = dialogDOM.renderTodoEditDialog(todoItem);
        setCloseDialogListener(editDialog);

        const form = editDialog.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const todoTitle = form.querySelector('input[name="todo-title"]').value;
            const todoUrgency = form.querySelector('select[name="todo-urgency"]').value;
            const todoDescription = form.querySelector('textarea[name="todo-description"]').value;
            const todoDate = form.querySelector('input[name="todo-date"]').value;
            const formattedDate = format(new Date(todoDate), 'do MMM');

            todoItem.setNewValues(todoTitle, todoUrgency, todoDescription, formattedDate);
            todoDOM.updateTodoValues(todoElement, todoItem);
            editDialog.remove();
        });
       
    });

    const todoDeleteButton = todoElement.querySelector('.todo-delete');
    todoDeleteButton.addEventListener('click', () => {
        myProjectsList.activeProject.removeTodoById(todoElement.id, myProjectsList.personalProjectsList);
        todoElement.remove();
    });
}