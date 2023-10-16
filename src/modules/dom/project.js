import { addButton } from '../../constants.js';

import './project_style.css';

const defaultProjectsUl = document.querySelector('ul.default-list');
const personalProjectsUl = document.querySelector('ul.personal-list');

export function hideAddProjectButton() {
    addButton.project.classList.add('hidden');
}

export function showAddProjectButton() {
    addButton.project.classList.remove('hidden');
}

export function displayProjectForm() {
    const form = document.createElement('form');
    form.innerHTML = 
        `<input type="text" name="project-name" placeholder="Project Name" maxlength="10" required>
        <button type="submit">Confirm</button>
        <button type="reset">Cancel</button>`;

    personalProjectsUl.appendChild(form);
    return form;
}

export function displayPersonalProject(project) {
    const li = document.createElement('li');
    li.innerHTML =
    `<button id="${project.id}" class="project-btn">
        <img src="assets/bookmark_icon.svg">
        <span class="li-title">${project.name}</span>
        <img class="delete-project" src="assets/trash_icon.svg">
    </button>`;

    personalProjectsUl.insertBefore(li, addButton.project.parentElement);
    return li.querySelector('button');
}

export function displayDefaultProject(project, iconPath) {
    const li = document.createElement('li');
    li.innerHTML = 
    `<button id="${project.id}" class="project-btn">
        <img src="${iconPath}">
        <span class="li-title">${project.name}</span>
    </button>`;
    defaultProjectsUl.appendChild(li);
    return li.querySelector('button');
}

export function removePersonalProject(project) {
    personalProjectsUl.removeChild(project.parentElement);
}

export function setActiveClassTo(project) {
    const allProjects = document.querySelectorAll('.sidebar button');
    allProjects.forEach(project => project.classList.remove('active'));
    project.classList.add('active');
}

export function emptyPersonalProjectsUl() {
    personalProjectsUl.querySelectorAll('li .project-btn').forEach(li => li.remove());
}