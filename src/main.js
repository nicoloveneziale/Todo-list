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

const addProjectButton = document.createElement("button");
addProjectButton.id = "add-project";
addProjectButton.innerHTML = "add";
addProjectButton.addEventListener("click", () =>{
    
})

const toDosContainer = document.createElement("div");
toDosContainer.id = "td-container";

mainDiv.append(header, projectDiv, toDosContainer)

export {
    mainDiv,
    pfp,
    username
}