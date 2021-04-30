let btn = document.getElementById("btn");
let menu = document.getElementById("menu-id");
btn.addEventListener("click", show);
function show() {
  menu.classList.toggle("show");
}
