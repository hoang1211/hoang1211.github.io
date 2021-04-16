// let h1 = document.body.firstElementChild.nextElementSibling;
// console.log(h1);
// let p = document.getElementById("pBody");
// console.log(p);
// setInterval(function () {
//   let date = new Date().toTimeString();
//   let time = date.slice(0, 8);
//   let div = document.getElementById("time");
//   div.textContent = time;
// }, 1000);

let temp = document.getElementById("table");
let tBody = temp.firstElementChild;
let trs = Array.from(tBody.rows);

trs.forEach(function (tr) {
  let tds = Array.from(tr.cells);
  tds.forEach(function (td) {
    if (tr.rowIndex == td.cellIndex) {
      td.style.backgroundColor = "red";
    }
  });
});
