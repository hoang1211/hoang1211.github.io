import "./style.css";
import store from "./store";
import { INCREMENT, DECREMENT, ADD_TODO, REMOVE_TODO } from "./action";

const countEl = document.getElementById("countEl");
const incre = document.getElementById("incre");
const decre = document.getElementById("decre");
const form = document.getElementById("form");
const list = document.getElementById("list");

incre.onclick = () => store.dispatch({ type: INCREMENT });
decre.onclick = () => store.dispatch({ type: DECREMENT });

store.subscribe(renderTodo);
function renderTodo() {
  const { todos } = store.getState();
  list.innerHTML = "";

  for (let t of todos.todos) {
    const li = document.createElement("li");
    li.append(t.title);
    const btn = document.createElement("button");
    btn.onclick = () => {
      store.dispatch({
        type: REMOVE_TODO,
        payload: t.id,
      });
    };
    btn.textContent = "Delete #" + t.id;
    li.append(btn);
    list.append(li);
  }
}
renderTodo();
form.onsubmit = (e) => {
  e.preventDefault();

  const task = form.elements.task;

  store.dispatch({
    type: ADD_TODO,
    payload: task.value,
  });
};
