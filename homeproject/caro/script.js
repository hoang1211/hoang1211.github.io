let temp = document.querySelector("#table");
let tbody = temp.firstElementChild;
let trs = Array.from(tbody.rows);
//count clicks

let clickCount = 0;
function countClick() {
  clickCount += 1;
  // console.log(clickCount);
}

// draw X O , turn play.
function drawXO(x, y) {
  if (clickCount % 2 == 0) {
    trs.forEach(function (tr) {
      let tds = Array.from(tr.cells);
      tds.forEach(function (td) {
        if (tr.rowIndex == x && td.cellIndex == y) {
          td.style.backgroundImage = "url('x.png')";
          td.style.backgroundSize = "100%";
          td.setAttribute("value", "x");
          // console.log(td.getAttribute("value"));
        }
      });
    });
  } else {
    trs.forEach(function (tr) {
      let tds = Array.from(tr.cells);
      tds.forEach(function (td) {
        if (tr.rowIndex == x && td.cellIndex == y) {
          td.style.backgroundImage = "url('o.png')";
          td.style.backgroundSize = "100%";
          td.setAttribute("value", "o");
          // console.log(td.getAttribute("value"));
        }
      });
    });
  }
}
// Take postion of click in table
let table = document.getElementById("table"),
  rIndex,
  cIndex;
//table rows
for (let i = 0; i < table.rows.length; i++) {
  //row cells
  for (let j = 0; j < table.rows[i].cells.length; j++) {
    table.rows[i].cells[j].onclick = function () {
      rIndex = this.parentElement.rowIndex;
      cIndex = this.cellIndex;
      drawXO(rIndex, cIndex);
      if (checkWin(rIndex, cIndex) == true) {
        alert(table.rows[rIndex].cells[cIndex].getAttribute("value") + " win");
        temp.replaceWith(temp.cloneNode(true));
      }
      // console.log(rIndex, cIndex);
    };
  }
}
// Check win
function checkWin(a, b) {
  //check chieu doc
  let check;
  let countD = 0;
  let countA = 0;
  for (let i = 1; i < 5; i++) {
    if (a + i < table.rows.length) {
      if (
        table.rows[a].cells[b].getAttribute("value") ==
        table.rows[a + i].cells[b].getAttribute("value")
      ) {
        countD++;
      }
    }
    if (a - i >= 0) {
      if (
        table.rows[a].cells[b].getAttribute("value") ==
        table.rows[a - i].cells[b].getAttribute("value")
      ) {
        countA++;
      }
    }
  }
  let countL = 0;
  let countR = 0;
  for (let j = 1; j < 5; j++) {
    if (b + j < table.rows[a].cells.length) {
      if (
        table.rows[a].cells[b].getAttribute("value") ==
        table.rows[a].cells[b + j].getAttribute("value")
      ) {
        countR++;
      }
    }
    if (b - j >= 0) {
      if (
        table.rows[a].cells[b].getAttribute("value") ==
        table.rows[a].cells[b - j].getAttribute("value")
      ) {
        countL++;
      }
    }
  }
  if (countA + countD == 4) {
    check = true;
  } else {
    check = false;
  }
  if (countL + countR == 4) {
    check = true;
  } else {
    check = false;
  }
  return check;
  //check chieu ngang
}
