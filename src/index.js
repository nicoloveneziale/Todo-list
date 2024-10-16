import "./styles.css";
import { entryDiv, nameInput, continueBtn } from "./entry.js";

const body = document.querySelector("body");

continueBtn.addEventListener("click", () => {
    const username = nameInput.value;
    body.removeChild(entryDiv);
})

body.append(entryDiv);