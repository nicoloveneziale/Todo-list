import avatar1 from "./images/img_avatar.png";
import avatar2 from "./images/img_avatar2.png";
import avatar3 from "./images/avatar2.png";
import avatar4 from "./images/avatar5.png";
import avatar5 from "./images/avatar6.png";

const avatarList = [avatar1,avatar2,avatar3,avatar4,avatar5];

function createProfileBtn(src) {
    let pfpBtn = document.createElement("btn");
    let pfp = document.createElement("img");
    pfp.src = src;
    pfp.alt = "pfp_img";
    pfpBtn.appendChild(pfp);
    pfpBtn.addEventListener("click", (e) => {
        pfpImg = e.src;
        console.log(pfpImg);
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
    pfpDiv.appendChild(createProfileBtn(avatarList[i]));
}

entryDiv.append(entryHeading, pfpDiv);

export default entryDiv;
