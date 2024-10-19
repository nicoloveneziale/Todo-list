class Todo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    setDescription(description){
        this.description = description;
    }

    setTitle(title){
        this.title = title;
    }

    setPriority(priority){
        this.priority = priority;
    }
}

export default Todo;