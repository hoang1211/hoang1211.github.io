import "./style.css";
import store, { selectColors } from "./store";
import { newColor, toggleColor, showFavourite } from "./actionTypes";

const form = document.getElementById("add-color");
form.onsubmit = (e) => {
  e.preventDefault();

  const name = form.elements.name;
  const color = form.elements.color;

  const trimmedName = name.value.trim();

  if (trimmedName && color.value) {
    store.dispatch(newColor(trimmedName, color.value));
    name.value = "";
    color.value = "";
  }
};
const checkbox = document.getElementById("show-favourite");
checkbox.onchange = () => store.dispatch(showFavourite());

store.subscribe(renderColor);

const colorList = document.getElementById("color-list");
function renderColor() {
  colorList.innerHTML = "";
  const colors = selectColors();

  colors.forEach((c) => {
    const colorHtml = document.createElement("div");
    colorHtml.className = "color";
    colorHtml.style.background = c.color;
    colorHtml.textContent = c.name;
    const btn = document.createElement("button");
    btn.onclick = () => store.dispatch(toggleColor(c.id));
    btn.textContent = c.favourite ? "Liked" : "Like";
    colorHtml.append(btn);
    colorList.append(colorHtml);
  });
}
renderColor();
