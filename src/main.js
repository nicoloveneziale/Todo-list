import Project from "./project";

const projectList = [];

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

projectDiv.append(projectsh1)

function createProjectBtn(project) {
    let btn = document.createElement("button");
    btn.classList.add("project-btn")
    btn.innerHTML = project.name;
    btn.id = project.name;
    btn.addEventListener("click", (e) => {
        toDosContainer.innerHTML = "";
        const projectTitle = document.createElement("h1");
        projectTitle.innerHTML = e.target.innerHTML;
        toDosContainer.appendChild(projectTitle);
        for(let project in projectList){
            if(project.name == e.target.id){
                const thisProject = project;
            }
        }
        for(let toDo in project.toDos){
            createToDoContainer(toDo);
        }
    })
    projectDiv.appendChild(btn);
}

function initProject(name){
    let project = new Project(name);
    projectList.push(project);
    return project;
}

const defaultProject = initProject("default");
createProjectBtn(defaultProject);

const newProject = initProject("New");
createProjectBtn(newProject);

function createDialogToDo(){
    var dialog = document.createElement("dialog");

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

    dialog.append(titleLabel,title,descriptionLabel,description, dateLabel, date);
    document.querySelector("body").append(dialog);
    return dialog;
}

function createDialogProject(){
    var dialog = document.createElement("dialog");

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
        var project = initProject(title.value);
        createProjectBtn(project);
        dialog.close();
    })

    dialog.append(titleLabel,title, create);
    document.querySelector("body").append(dialog);
    dialog.showModal();
}


const addProjectButton = document.createElement("button");
addProjectButton.id = "add-project";
addProjectButton.innerHTML = "add";
addProjectButton.addEventListener("click", createDialogProject);

projectDiv.appendChild(addProjectButton);

const toDosContainer = document.createElement("div");
toDosContainer.id = "td-container";

mainDiv.append(header, projectDiv, toDosContainer)

export {
    mainDiv,
    pfp,
    username
}