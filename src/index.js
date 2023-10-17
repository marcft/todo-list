import { addDays, format } from 'date-fns';

import { addButton, URGENCY_TYPE } from './constants.js';

import { getProjectsListFromStorage, saveProjectsListToStorage, storageAvailable } from './modules/logic/storage.js';
import { ProjectsList, Project, DefaultProject } from './modules/logic/project.js';
import { TodoItem } from './modules/logic/todo.js';

import * as projectsDOM from './modules/dom/project.js';
import * as todoDOM from './modules/dom/todo.js';
import * as dialogDOM from './modules/dom/dialog.js';

/// -------------- INITIALIZATION --------------

let myProjectsList;

if(storageAvailable('localStorage')) {
    if(localStorage.getItem('myProjectsList')) {
        const parsedProjectsList = getProjectsListFromStorage();
        myProjectsList = ProjectsList.fromJSON(parsedProjectsList);
    }
    else { myProjectsList = defaultMyProjectsList(); }
}
else { myProjectsList = defaultMyProjectsList(); }
initializeState();

function defaultMyProjectsList() {
    const addDaysToToday = (days) => format(addDays(new Date(), days), 'do MMM');

    const defaultList = new ProjectsList(
        new DefaultProject('Inbox'), new DefaultProject('Today'), new DefaultProject('Week'));
    
    const today = format(new Date(), 'do MMM');
    const initialProject = new Project('Init Project',
        new TodoItem('Feed myself', URGENCY_TYPE.HIGH, 'I must eat to gain energy', today, true),
        new TodoItem('Workout', URGENCY_TYPE.MEDIUM , 'I must gain strength to restore the Roman Empire', today),
        new TodoItem('Clean the house', URGENCY_TYPE.LOW, 'The house is too dirty', addDaysToToday(1), true),
        new TodoItem('Restablish the Roman Empire', URGENCY_TYPE.MEDIUM, 'Veni, Vidi, Vici', addDaysToToday(2)),
        new TodoItem('Crown me Caesar', URGENCY_TYPE.HIGH, 'Following the path of Augustus', addDaysToToday(3)),
        new TodoItem('Learn how to code', URGENCY_TYPE.MEDIUM, 'It\'s funny', addDaysToToday(11), true),
        new TodoItem('Take a nap', URGENCY_TYPE.LOW, 'I\'m tired', addDaysToToday(17)));

    defaultList.addPersonalProject(initialProject);
    return defaultList;
}

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

/// -------------- PROJECTS --------------

//Default projects are setted in the initializeState function, and they have a different functionality
function setPersonalProject(project) {
    const projectButton = projectsDOM.displayPersonalProject(project);
    setActiveProjectListener(projectButton);
    setDeleteProjectListener(projectButton);
}

//Sets the project to active and renders his todos
function setActiveProjectListener(projectButton) {
    projectButton.addEventListener('click', () => {
        myProjectsList.activeProject = myProjectsList.getProjectById(projectButton.id);
        projectsDOM.setActiveClassTo(projectButton);
        
        const todosList = todoDOM.renderProjectTodos(myProjectsList.activeProject);
        todosList.forEach(todo => setTodoElementListeners(todo));
        
        const isDefaultProject = myProjectsList.isDefaultProjectId(projectButton.id);
        isDefaultProject ? todoDOM.hideAddTodoButton() : todoDOM.showAddTodoButton();
    });
}

//Delete the project and his todos
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
        saveProjectsListToStorage(myProjectsList);
    });
}

/// -------------- DIALOGS --------------

//Every dialog must close when clicking outside or the cancel button
function setCloseDialogListener(dialog) {
    dialog.addEventListener('click', (e) => {
        if(e.target === dialog) dialog.remove();
    });

    const cancelButton = document.getElementById('cancel-todo-form');
    cancelButton.addEventListener('click', () => {
        dialog.remove();
    });
}

//Sets the specific listener for the CreateTodo dialog
function setCreateTodoDialogListeners(dialog) {
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
        saveProjectsListToStorage(myProjectsList);
        dialog.remove();
    });
}

/// -------------- TODOS --------------

//Every todoElement has this listeners
function setTodoElementListeners(todoElement) {
    const todoItem = myProjectsList.activeProject.getTodoById(todoElement.id);

    const todoCheckbox = todoElement.querySelector('.todo-checkbox');
    todoCheckbox.addEventListener('change', () => {;   
        todoItem.toggleIsDone();
        todoDOM.toggleTodoDone(todoElement);
        saveProjectsListToStorage(myProjectsList);
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
            saveProjectsListToStorage(myProjectsList);
            editDialog.remove();
        });
       
    });

    const todoDeleteButton = todoElement.querySelector('.todo-delete');
    todoDeleteButton.addEventListener('click', () => {
        myProjectsList.activeProject.removeTodoById(todoElement.id, myProjectsList.personalProjectsList);
        saveProjectsListToStorage(myProjectsList);
        todoElement.remove();
    });
}

/// -------------- ADDBUTTON LISTENERS --------------

//Add project listener
addButton.project.addEventListener('click', () => {
    projectsDOM.hideAddProjectButton();
    const form = projectsDOM.displayProjectForm();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectName = form.querySelector('input').value;
        const newProject = new Project(projectName);
        myProjectsList.addPersonalProject(newProject);
        setPersonalProject(newProject);
        projectsDOM.showAddProjectButton();
        saveProjectsListToStorage(myProjectsList);
        form.remove();
    });

    form.addEventListener('reset', () => {
        form.remove();
        projectsDOM.showAddProjectButton();
    });
});

//Add todo listener
addButton.todo.addEventListener('click', () => {
    const newTodoDialog = dialogDOM.renderNewTodoFormDialog();
    setCloseDialogListener(newTodoDialog);
    setCreateTodoDialogListeners(newTodoDialog);
});