export class TodoItem {
    constructor(name, urgency, isDone = false, details = "",
    dueDate = new Date().toLocaleDateString()) {
        this._name = name;
        this._urgency = urgency;
        this._isDone = isDone;
        this._details = details;
        this._dueDate = dueDate;
    }

    get name() {
        return this._name;
    }

    get urgency() {
        return this._urgency;
    }

    get isDone() {
        return this._isDone;
    }

    get details() {
        return this._details;
    }

    get dueDate() { 
        return this._dueDate;
    }
}