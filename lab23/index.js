import checkValid from "./validate.js";
const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkValid() == true) {
    console.log("Succes");
    alert("Đã gửi tin tới công ty");
  } else {
    console.log("Fails");
  }
});
