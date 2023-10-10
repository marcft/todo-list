export class Project {
    static position = 0;

    constructor(name, ...initialTodos) {
        this._name = name;
        this._todoList = [...initialTodos];
        this._id = `proj${Project.position++}-${this.name}`;
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

    getTodoByIndex(index) {
        return this._todoList[index];
    }

    add(item) {
        this._todoList.push(item);
    }

    remove(index) {
        this._todoList.splice(index, 1);
    }
}

//Afegir propietat active a la classe projecte
export class ProjectsList {
    constructor(inboxProject, dayProject, weekProject, ...initialProjects) {
        this._inboxProject = inboxProject;
        this._dayProject = dayProject;
        this._weekProject = weekProject;
        this._personalProjectsList = [...initialProjects];
        this.activeProject = inboxProject;
    }

    get allProjectsList() {
        return [this._inboxProject, this._dayProject, this._weekProject, ...this._personalProjectsList];
    }

    get inboxProject() {
        return this._inboxProject;
    }

    get dayProject() {
        return this._dayProject;
    }

    get weekProject() {
        return this._weekProject;
    }

    get personalProjectsList() {
        return this._personalProjectsList;
    }

    getProjectById(id) {
        return this.allProjectsList.find(project => project.id === id);
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
}



/* 
//Inbox is a special project that contains all the todo items
get inbox() {
    return this._projectList.reduce((inbox, project) => {
        return inbox.concat(project.todoList);
    }, []);
} 

// Today is a special project that contains all the todo items that are due today
get today() {
    const today = new Date().toLocaleDateString();
    return this._projectList.reduce((todayList, project) => {
        return todayList.concat(project.todoList.filter(item => item.dueDate === today));
    }, []);
}

// Week is a special project that contains all the todo items that are due in the next 7 days
get week() {
    const today = new Date();
    const week = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7).toLocaleDateString();
    return this._projectList.reduce((weekList, project) => {
        return weekList.concat(project.todoList.filter(item => item.dueDate <= week));
    }, []);
}
*/