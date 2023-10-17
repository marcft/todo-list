import { v4 as uuidv4 } from 'uuid';
import { format, parse, addDays, startOfWeek } from 'date-fns';
import { TodoItem } from './todo.js';

export class Project {
    constructor(name, ...initialTodos) {
        this._name = name;
        this._todoList = [...initialTodos];
        this._id = `proj${uuidv4()}`;
    }

    get name() {
        return this._name;
    }

    get todoList() {
        return this._todoList;
    }

    get id() {
        return this._id;
    }

    getTodoById(id) {
        return this._todoList.find(todo => todo.id === id);
    }

    add(item) {
        this._todoList.push(item);
        this.sortTodoListByDate();
    }

    sortTodoListByDate() {
        this._todoList.sort((a, b) => {
            const dateA = parse(a.dueDate, 'do MMM', new Date());
            const dateB = parse(b.dueDate, 'do MMM', new Date());
            return dateA - dateB;
        });
    }

    removeTodoById(id) {
        const index = this._todoList.findIndex(todo => todo.id === id);
        this._todoList.splice(index, 1);
    }
}

export class DefaultProject extends Project {
    constructor(name) {
        super(name);
    }

    setTodoList(todoList) {
        this._todoList = todoList;
        this.sortTodoListByDate();
    }

    add(item) {
        throw new Error('Cannot add todo items to default projects');
    }

    removeTodoById(id, personalProjectsList) {
        super.removeTodoById(id);
        personalProjectsList.forEach(project => {
            if(project.todoList.find(todo => todo.id === id)) project.removeTodoById(id);
        });
    }
}

//Afegir propietat active a la classe projecte
export class ProjectsList {
    constructor(inboxProject, dayProject, weekProject, ...initialProjects) {
        this._inboxProject = inboxProject;
        this._dayProject = dayProject;
        this._weekProject = weekProject;
        this._personalProjectsList = [...initialProjects];
        this._activeProject = inboxProject;
    }

    get personalProjectsList() {
        return this._personalProjectsList;
    }

    get inboxProject() {
        const allTodos = 
        this._personalProjectsList.reduce((inbox, project) => {
            return inbox.concat(project.todoList);
        }, []);
        this._inboxProject.setTodoList(allTodos);

        return this._inboxProject;
    }

    get dayProject() {
        const today = format(new Date(), 'do MMM');
        const todayTodos =
        this._personalProjectsList.reduce((todayList, project) => {
            return todayList.concat(project.todoList.filter(item => item.dueDate === today));
        }, [])
        this._dayProject.setTodoList(todayTodos);

        return this._dayProject;
    }

    get weekProject() {
        const today = new Date();
        const startOfWeekDate = startOfWeek(today, { weekStartsOn: 1 });
        const daysOfWeek = [];

        // Get the formatted date for each day of the week
        for (let i = 0; i < 7; i++) {
            const day = addDays(startOfWeekDate, i);
            const formattedDay = format(day, 'do MMM');
            daysOfWeek.push(formattedDay);
        }

        const weekTodos = 
        this._personalProjectsList.reduce((weekList, project) => {
            return weekList.concat(project.todoList.filter(item => daysOfWeek.includes(item.dueDate)));
        }, []);
        this._weekProject.setTodoList(weekTodos);

        return this._weekProject;
    }

    get activeProject() {
        return this._activeProject;
    }

    set activeProject(project) {
        //This is to update the todos of the default projects
        if(project.id === this._inboxProject.id) this._activeProject = this.inboxProject;
        else if(project.id === this._dayProject.id) this._activeProject = this.dayProject;
        else if(project.id === this._weekProject.id) this._activeProject = this.weekProject;
        else this._activeProject = project;
    }

    isDefaultProjectId(id) {
        return id === this._inboxProject.id || id === this._dayProject.id || id === this._weekProject.id;
    }

    getProjectById(id) {
        const allProjectsList =
            [this._inboxProject, this._dayProject, this._weekProject, ...this._personalProjectsList];
        return allProjectsList.find(project => project.id === id);
    }

    addPersonalProject(project) {
        this._personalProjectsList.push(project);
    }

    removePersonalProjectById(id) {
        if(id === this._inboxProject.id || id === this._dayProject.id || id === this._weekProject.id) {
            throw new Error('Cannot remove default projects');
        }
        const index = this._personalProjectsList.findIndex(project => project.id === id);
        this._personalProjectsList.splice(index, 1);
    }

    static fromJSON(json) {
        const inboxProject = new DefaultProject('Inbox');
        const dayProject = new DefaultProject('Today');
        const weekProject = new DefaultProject('This week');
        const personalProjectsList = json._personalProjectsList.map(project => {
            const todoList = project._todoList.map(todo => {
                return new TodoItem(todo._name, todo._urgency, todo._description, todo._dueDate, todo._isDone);
            });
            return new Project(project._name, ...todoList);
        });
        return new ProjectsList(inboxProject, dayProject, weekProject, ...personalProjectsList);
    }
}