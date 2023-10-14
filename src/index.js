import { URGENCY_TYPE, addButton } from './constants.js';

import { ProjectsList, Project } from './modules/logic/project.js';
import { TodoItem } from './modules/logic/todo.js';

import * as projectsDOM from './modules/dom/project.js';
import * as todoDOM from './modules/dom/todo.js';

const myProjectsList = new ProjectsList(
        new Project('Inbox'), new Project('Today'), new Project('Week'), new Project('First Project'));

initializeState(myProjectsList);

function initializeState(projectList) {
    //Display default projects
    const inboxProjectButton =
        projectsDOM.displayDefaultProject(projectList.inboxProject, 'assets/inbox_icon.svg');
    const dayProjectButton =
        projectsDOM.displayDefaultProject(projectList.dayProject, 'assets/today_calendar_icon.svg');
    const weekProjectButton =
        projectsDOM.displayDefaultProject(projectList.weekProject, 'assets/week_calendar_icon.svg');

    //Initialize active project
    const initialActiveProject = document.getElementById(projectList.activeProject.id);
    projectsDOM.setActiveClassTo(initialActiveProject);
    const todosList = todoDOM.renderProjectTodos(myProjectsList.activeProject);
    todosList.forEach(todo => setTodoElementListeners(todo));

    //Set listeners to default projects, just the ActiveProjectListener
    const defaultProjects = [inboxProjectButton, dayProjectButton, weekProjectButton];
    defaultProjects.forEach( project => setActiveProjectListener(project) );

    //Display personal projects and set listeners
    const personalProjects = projectList.personalProjectsList;
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
        myProjectsList.activeProject = myProjectsList.getProjectById(projectButton.id);
        projectsDOM.setActiveClassTo(projectButton);
        const todosList = todoDOM.renderProjectTodos(myProjectsList.activeProject);
        todosList.forEach(todo => setTodoElementListeners(todo));
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

let testCounter = 0;
addButton.todo.addEventListener('click', () => {
    const newTodo = new TodoItem(`New Todo${testCounter++}`, URGENCY_TYPE.LOW);
    myProjectsList.activeProject.add(newTodo);
    const todoElement = todoDOM.renderSingleTodo(newTodo);
    setTodoElementListeners(todoElement);
});

function setTodoElementListeners(todoElement) {
    const todoCheckbox = todoElement.querySelector('.todo-checkbox');
    todoCheckbox.addEventListener('change', () => {
        const todoItem = myProjectsList.activeProject.getTodoById(todoElement.id);   
        todoItem.toggleIsDone();
        todoDOM.toggleTodoDone(todoElement);
    });

    const todoDetailsButton = todoElement.querySelector('.todo-details');
    todoDetailsButton.addEventListener('click', () => {
        todoDOM.renderTodoDetails(myProjectsList.activeProject.getTodoById(todoElement.id));
    });

    const todoEditButton = todoElement.querySelector('.todo-edit');
    todoEditButton.addEventListener('click', () => {
        console.log('Edit button pressed');
    });

    const todoDeleteButton = todoElement.querySelector('.todo-delete');
    todoDeleteButton.addEventListener('click', () => {
        myProjectsList.activeProject.removeTodoById(todoElement.id);
        todoElement.remove();
    });
}