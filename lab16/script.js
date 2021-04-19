// let img = document.createElement("img");
// img.src = "http://hanoimoi.com.vn/Uploads/tuandiep/2018/4/8/1(1).jpg";
// let div = document.createElement("div");
// div.classList.add("container");
// div.textContent = "A B C";
// document.body.insertAdjacentText("afterbegin", "Hoang Nguyen Ba ");
// document.getElementById("p").insertAdjacentElement("afterend", div);
// document.getElementById("p").classList.add("classP");
// document.getElementById("p").classList.toggle("classP");
// document.getElementById("p").style.backgroundColor = "green";
// let p = document.getElementById("p");
// p.style.fontSize = "10px";
// // p.style.cssText = "background-color = blue; font-size = 30px";
// let styled = getComputedStyle(p);
// console.log(styled.backgroundColor);
// let form = document.forms.tranferTemp;
// let from = form.elements.from;
// let to = form.elements.to;
// let temp = form.elements.temp;

let form = document.getElementById("formTemp");
let from = form.elements.from;
let to = form.elements.to;
let temp = form.elements.temp;
let result = form.elements.result;
let btn = form.elements.btnConvert;

function toCel(from, value) {
  if (from == "dok") {
    return value - 273.15;
  } else if (from == "doF") {
    return (value - 32) / 1.8;
  } else {
    return value;
  }
}

function celTo(from, value) {
  if (from == "dok") {
    return value + 273.15;
  } else if (from == "dof") {
    return value * 1.8 + 32;
  } else {
    return value;
  }
}
function convertTemp(event) {
  event.stopPropagation(); // chi xu ly event trong button
  event.preventDefault();
  let c = toCel(from.value, Number(temp.value));
  result.value = celTo(to.value, c);
}
// btn.onclick = convertTemp;
// btn.onclick();
function showTemp() {
  let c = toCel(from.value, Number(temp.value));
  result.value = celTo(to.value, c);
  console.log(result.value);
}
btn.addEventListener("click", convertTemp);
btn.addEventListener("click", showTemp);
form.addEventListener("click", function () {
  console.log("hello world");
});
