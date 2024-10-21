import "./styles.css";
import { entryDiv, nameInput, continueBtn, pfpImg } from "./entry.js";
import { mainDiv, pfp, username } from "./main.js";

const body = document.querySelector("body");

continueBtn.addEventListener("click", () => {
    const usernameValue = nameInput.value;
    body.removeChild(entryDiv);
    body.appendChild(mainDiv);
    pfp.src = pfpImg;
    localStorage.setItem("pfpImg", pfpImg);
    username.innerHTML = usernameValue;
    localStorage.setItem("usernameValue", usernameValue);
})

if(localStorage.pfpImg && localStorage.usernameValue){
    body.appendChild(mainDiv);
    pfp.src = localStorage.pfpImg;
    username.innerHTML = localStorage.usernameValue;
} else {
    body.append(entryDiv);
}