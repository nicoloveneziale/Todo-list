import "./styles.css";
import { entryDiv, nameInput, continueBtn, pfpImg } from "./entry.js";
import { mainDiv, pfp, username } from "./main.js";

const body = document.querySelector("body");

continueBtn.addEventListener("click", () => {
    const usernameValue = nameInput.value;
    body.removeChild(entryDiv);
    body.appendChild(mainDiv);
    pfp.src = pfpImg;
    username.innerHTML = usernameValue;
})

body.append(entryDiv);