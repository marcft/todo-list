import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

export class TodoItem {
    static index = 0;

    constructor(name, urgency, description = "",
    dueDate = format(new Date(), 'do MMM'), isDone = false) {
        this._name = name;
        this._urgency = urgency;
        this._description = description;
        this._dueDate = dueDate;
        this._isDone = isDone;
        this._id = `todo${uuidv4()}`;
    }

    get name() {
        return this._name;
    }

    get urgency() {
        return this._urgency;
    }

    get description() {
        return this._description;
    }

    get dueDate() { 
        return this._dueDate;
    }

    get isDone() {
        return this._isDone;
    }

    get id() {
        return this._id;
    }

    toggleIsDone() {
        this._isDone = !this._isDone;
    }

    setNewValues(name, urgency, description, dueDate) {
        this._name = name;
        this._urgency = urgency;
        this._description = description;
        this._dueDate = dueDate;
    }
}