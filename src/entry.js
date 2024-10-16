import avatar1 from "./images/img_avatar.png";
import avatar2 from "./images/img_avatar2.png";
import avatar3 from "./images/avatar2.png";
import avatar4 from "./images/avatar5.png";
import avatar5 from "./images/avatar6.png";

const avatarList = [avatar1,avatar2,avatar3,avatar4,avatar5];
let pfpImg = avatar1;

function createProfileBtn(src) {
    let pfpBtn = document.createElement("btn");
    let pfp = document.createElement("img");
    pfp.id = "pfp";
    pfp.src = src;
    pfp.alt = "pfp_img";
    pfpBtn.appendChild(pfp);
    pfpBtn.addEventListener("click", (e) => {
        pfpImg = e.target.src;     
        document.querySelector(".selected").classList.remove("selected");
        e.target.classList.add("selected");
    })
    return pfpBtn;
}

const entryDiv = document.createElement("div");
entryDiv.id = "entry-div";

const entryHeading = document.createElement("h1");
entryHeading.id = "entry-h1";
entryHeading.innerHTML = "ToDoify";

const pfpDiv = document.createElement("div");
pfpDiv.id = "pfp-div";

for (let i = 0; i < avatarList.length; i++){
    var selectorBtn = createProfileBtn(avatarList[i])
    pfpDiv.appendChild(selectorBtn);
    if(i == 0){
        selectorBtn.classList.add("selected");
    }
}

const nameContainer = document.createElement("div");
nameContainer.id = "name-div";

const nameLabel = document.createElement("label");
nameLabel.for = "name";
nameLabel.innerHTML = "username"


const nameInput = document.createElement("input");
nameInput.id = "name";
nameInput.placeholder = "your name";

nameContainer.append(nameLabel, nameInput);

const continueBtn = document.createElement("button");
continueBtn.id = "continue";
continueBtn.innerHTML = "continue";

entryDiv.append(entryHeading, pfpDiv, nameContainer,continueBtn);

export {
    entryDiv, 
    nameInput,
    continueBtn,
    pfpImg
}
