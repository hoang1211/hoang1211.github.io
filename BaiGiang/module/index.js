import validate from "./validate.js";

const login = document.getElementById("login");

login.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validate()) {
        console.log("Submit form");
    }
});
