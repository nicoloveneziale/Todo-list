import Project from "./project";
import Todo from "./todo";

const projectList = [];
let currentProject = null;

const mainDiv = document.createElement("div");
mainDiv.id = "main";

const header = document.createElement("header");

const pfp = document.createElement("img");
pfp.alt = "pfp";

const username = document.createElement("p"); 

const headh1 = document.createElement("h1");
headh1.innerHTML = "ToDoify";

header.append(headh1, pfp, username);

const projectDiv = document.createElement("div");
projectDiv.id = "projects";

const projectsh1 = document.createElement("h1");
projectsh1.innerHTML = "Projects";

const projectBtnContainer = document.createElement("div");
projectBtnContainer.id = "project-btn-container";

projectDiv.append(projectsh1, projectBtnContainer)

function createProjectBtn(project) {
    let btn = document.createElement("button");
    btn.classList.add("project-btn")
    btn.innerHTML = project.name;
    btn.id = project.name;
    btn.addEventListener("click", (e) => {
        toDosContainer.innerHTML = "";
        const projectTitle = document.createElement("h1");
        projectTitle.innerHTML = e.target.innerHTML;
        toDosContainer.append(projectTitle, toDosContainerMain, addTodoBtn);
        for(let i = 0; i < projectList.length; i++){
            if(projectList[i].name == projectTitle.innerHTML){
                renderTodos(projectList[i]);
                currentProject = projectList[i];
                break;
            }
        }
    })
    projectBtnContainer.appendChild(btn);
}

const toDosContainer = document.createElement("div");
toDosContainer.id = "td-container";

const toDosContainerMain = document.createElement("div");
toDosContainerMain.id = "td-container-main";

function renderTodos(project){
    toDosContainerMain.innerHTML = "";
    let todos = project.getTodos();
    console.log(todos);
    if (todos.length == 0){
        return;
    }
    for(let i = 0; i < todos.length; i++){
        let todo = todos[i];
        let todoDiv = document.createElement("div");
        let todoTitle = document.createElement("h2");
        let todoDescription = document.createElement("p");
        let dueDate = document.createElement("p");
        let priority = document.createElement("p");
        todoTitle.innerHTML = todo.title;
        todoDescription.innerHTML = todo.description;
        dueDate.innerHTML = todo.dueDate;
        priority.innerHTML = todo.priority;
        todoDiv.append(todoTitle, todoDescription, dueDate, priority);
        toDosContainerMain.appendChild(todoDiv);
    }
}

function initProject(name){
    let project = new Project(name);
    projectList.push(project);
    createProjectBtn(project);
}

function initTodo(project,title,description,dueDate,priority){
    let todo = new Todo(title,description,dueDate,priority);
    project.addTodo(todo);
    renderTodos(project);
}

initProject("default");
initTodo(projectList[0],"To Do", "This is the default to do", "19/11/20023", "High");
currentProject = projectList[0];

function createDialogToDo(){
    var toDoDialog = document.createElement("dialog");

    var titleLabel = document.createElement("label");
    titleLabel.innerHTML = "title";
    titleLabel.for = "title";
    
    var title = document.createElement("input");
    title.placeholder = "new project";
    title.id = "title";

    var descriptionLabel = document.createElement("label");
    descriptionLabel.innerHTML = "description";
    descriptionLabel.for = "description";
    
    var description = document.createElement("input");
    description.placeholder = "description";
    description.id = "description";

    var dateLabel = document.createElement("label");
    dateLabel.innerHTML = "due date";
    dateLabel.for = "date";
    
    var date = document.createElement("input");
    date.type = "date";
    date.id = "date";

    var priorityLabel = document.createElement("label");
    priorityLabel.innerHTML = "priority";
    priorityLabel.for = "priority";

    var priority = document.createElement("select");
    priority.id = "priority-select";

    var high = document.createElement("option");
    high.innerHTML = "high";
    high.value = "high";

    var medium = document.createElement("option");
    medium.innerHTML = "medium";
    medium.value = "medium";

    var low = document.createElement("option");
    low.innerHTML = "low";
    low.value = "low";

    priority.append(high,medium,low);

    var create = document.createElement("button");
    create.id = "create-btn";
    create.innerHTML = "create"
    create.addEventListener("click", () => {
        initTodo(currentProject, title.value, description.value, date.value, priority.value);
        toDoDialog.close();
    })

    toDoDialog.append(titleLabel,title,descriptionLabel,description, dateLabel, date, priority, create);
    document.querySelector("body").append(toDoDialog);
    return toDoDialog;
}


function createDialogProject(){
    var projectDialog = document.createElement("dialog");

    var titleLabel = document.createElement("label");
    titleLabel.innerHTML = "title";
    titleLabel.for = "title";
    
    var title = document.createElement("input");
    title.placeholder = "new project";
    title.required = true;
    title.id = "title";

    var create = document.createElement("button");
    create.id = "create-btn";
    create.innerHTML = "create"
    create.addEventListener("click", () => {
        initProject(title.value);
        projectDialog.close();
    })

    projectDialog.append(titleLabel,title, create);
    document.querySelector("body").append(projectDialog);
    return projectDialog;
}

const toDoDialog = createDialogToDo();
const projectDialog = createDialogProject();


const addProjectButton = document.createElement("button");
addProjectButton.id = "add-project";
addProjectButton.innerHTML = "add";
addProjectButton.addEventListener("click", () =>{
    projectDialog.showModal();
});

projectDiv.appendChild(addProjectButton);

const addTodoBtn = document.createElement("button");
addTodoBtn.innerHTML = "Add";
addTodoBtn.id = "add-todo";
addTodoBtn.addEventListener("click", () => {
    toDoDialog.showModal();
});

mainDiv.append(header, projectDiv, toDosContainer)

export {
    mainDiv,
    pfp,
    username
}