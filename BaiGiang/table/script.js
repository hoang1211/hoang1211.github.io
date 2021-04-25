// Cho mảng các object chứa các thông tin về học viên
let students = [
  {
    name: "Bùi Thanh Hà",
    age: 35,
    gender: "M",
  },
  {
    name: "Nguyễn Trường Giang",
    age: 27,
    gender: "M",
  },
  {
    name: "Phạm Minh Tuấn",
    age: 26,
    gender: "M",
  },
  {
    name: "Cung Bùi Tuấn Anh",
    age: 28,
    gender: "M",
  },
  {
    name: "Trịnh Bá Hưng",
    age: 27,
    gender: "M",
  },
  {
    name: "Đỗ Phương Thảo",
    age: 22,
    gender: "F",
  },
  {
    name: "Đặng Vũ Lam Mai",
    age: 22,
    gender: "F",
  },
  {
    name: "Đỗ Thanh Lam",
    age: 24,
    gender: "F",
  },
  {
    name: "Nguyễn Phương Hà",
    age: 25,
    gender: "F",
  },
  {
    name: "Nguyễn Đỗ Tuệ Minh",
    age: 19,
    gender: "F",
  },
  {
    name: "Nguyễn Đỗ Anh Minh",
    age: 18,
    gender: "M",
  },
];

/**
 * Viết CT JavaScript tạo bảng danh sách học viên
 * Tạo các thành phần HTML sử dụng: document.createDocument()
 * Thêm bảng vào div#app
 */

const tbLength = students.length;
function creatTable() {
  //creat table
  let table = document.createElement("TABLE");
  table.setAttribute("id", "table");
  document.getElementById("app").appendChild(table);
  //creat th
  let trh = document.createElement("TR");
  trh.setAttribute("id", "tr0");
  trh.setAttribute("class", "tr");
  document.getElementById("table").appendChild(trh);
  for (let ith in students[0]) {
    const th = document.createElement("TH");
    let textTh = document.createTextNode(ith);
    th.appendChild(textTh);
    document.getElementById("tr0").appendChild(th);
  }
  // creat tbody
  for (let i = 1; i <= tbLength; i++) {
    let tr = document.createElement("TR");
    tr.setAttribute("id", "tr" + i);
    tr.setAttribute("class", "tr");
    document.getElementById("table").appendChild(tr);
    for (let j in students[i]) {
      const td = document.createElement("TD");
      let textTd = document.createTextNode(students[i][j]);
      td.appendChild(textTd);
      document.getElementById("tr" + i).appendChild(td);
    }
  }
}
creatTable();
/**
 * Thêm event cho các hàng, highlight hàng khi di chuột qua
 * Sử dụng event: mouseover, mouseout, mousein, ...
 */

// table.onmouseover = table.onmouseout = handler;
// function handler(event) {
//   if (event.type == "mouseover") {
//     event.target.style.background = "pink";
//     console.log(event.target.parrentNode);
//   }
//   if (event.type == "mouseout") {
//     event.target.style.background = "";
//     console.log(event.target);
//   }
// }

for (let i = 0; i < tbLength + 1; i++) {
  let x = document.getElementById("tr" + i);
  x.addEventListener("mouseover", mOver);
  x.addEventListener("mouseout", mOut);
  function mOver() {
    this.style.background = "pink";
  }
  function mOut() {
    this.style.background = "";
  }
}

let table2 = document.getElementById("table");
let rows = table2.rows;
// for (let i = 0; i < rows.length; i++) {
//   rows[i].onmouseover = function () {
//     this.style.backgroundColor = "pink";
//   };
//   rows[i].onmouseout = function () {
//     this.style.backgroundColor = null;
//   };
// }
/**
 * Thêm event click cho cột tuổi (thẻ <th>), sắp xếp bảng theo độ tuổi
 * Có thay đổi thứ tự (click 1 lần sx tăng dần, click 2 lần giảm,
 * và icon hiển thị trạng thái tăng/giảm)
 */
rows[0].cells[1].setAttribute("id", "th_Age");
let thClick = document.getElementById("th_Age");

thClick.setAttribute("onclick", "sortAge()");

function sortAge() {
  let haveSwap = true;
  let table1 = document.getElementById("table");
  let dir, swapCount, shouldSwap, rowSort, i;
  dir = "asc";
  swapCount = 0;
  let rowX, rowY;
  while (haveSwap) {
    haveSwap = false;
    rowSort = table1.rows;
    for (i = 1; i < rowSort.length - 2; i++) {
      shouldSwap = false;
      rowX = Number(rowSort[i].cells[1].innerHTML);
      rowY = Number(rowSort[i + 1].cells[1].innerHTML);
      if (dir == "asc") {
        if (rowX > rowY) {
          shouldSwap = true;
          break;
        }
      } else if (dir == "desc") {
        if (rowX < rowY) {
          shouldSwap = true;
          break;
        }
      }
    }
    if (shouldSwap == true) {
      rowSort[i].parentNode.insertBefore(rowSort[i + 1], rowSort[i]);
      haveSwap = true;
      swapCount++;
    } else {
      if (swapCount == 0 && dir == "asc") {
        dir = "desc";
        haveSwap = true;
      }
    }
  }
  if (dir == "asc") {
    thClick.innerHTML = 'age <i class="bi bi-sort-down-alt"></i>';
  } else if (dir == "desc") {
    thClick.innerHTML = 'age <i class="bi bi-sort-down"></i>';
  }
}

/**
 * Thêm form, ô input và nút tìm kiếm
 * Cho phép nhập tên học viên, tìm kiếm và highlight học viên có tên trùng khớp (sử dụng thẻ <mark>)
 */
function creatForm() {
  let forms = document.createElement("FORM");
  forms.setAttribute("action", "");
  forms.setAttribute("name", "search");
  forms.setAttribute("id", "formInputName");
  document.getElementById("formInput").appendChild(forms);
  // Form title
  let h2 = document.createElement("H2");
  h2.setAttribute("id", "titleForm");
  h2.appendChild(document.createTextNode("Tìm kiếm thông tin học viên"));
  document.getElementById("formInputName").appendChild(h2);
  //Label input name
  let labelName = document.createElement("LABEL");
  labelName.setAttribute("for", "fname");
  labelName.setAttribute("id", "lableFname");
  labelName.appendChild(document.createTextNode("Tên học viên "));
  document.getElementById("titleForm").after(labelName);
  //Input text
  let inputText = document.createElement("INPUT");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("name", "searchText");
  inputText.setAttribute("id", "inputText");
  document.getElementById("lableFname").after(inputText);
  //Submit button
  let btnSubmit = document.createElement("BUTTON");
  btnSubmit.setAttribute("type", "button");
  btnSubmit.setAttribute("value", "Search");
  btnSubmit.setAttribute("id", "btnSubmit");
  btnSubmit.appendChild(document.createTextNode("Search"));
  document.getElementById("formInputName").appendChild(btnSubmit);
}
creatForm();
//Search
function searchName() {
  let nameSearch = document.getElementById("inputText").value.toLowerCase();
  document.getElementById("app").innerHTML.reload;
  for (let i = 0; i < rows.length - 1; i++) {
    if (nameSearch != null) {
      if (rows[i].cells[0].innerHTML.toLowerCase().indexOf(nameSearch) > -1) {
        rows[i].style.background = "yellow";
      } else {
        rows[i].style.background = "";
      }
    }
  }
  console.log(nameSearch);
}
//Add event onclick
let btn = document.getElementById("btnSubmit");
btn.setAttribute("onclick", "searchName()");

/**
 * Thêm form, các ô input tên, tuổi, giới tính, và nút thêm
 * Cho phép nhập thông tin học viên, tạo mới phần tử và thêm vào bảng
 */

function creatFormAdd() {
  let insertRow =
    '<form ><label>Name: <input type="text" name="name" id="name"></label><br><label>Age: <input type="text" id="age"></label><br><label>Gender: <input type="radio" name="gender" id="woman" value="woman">Woman</label><input type="radio" name="gender" id="man" value="man">Man</label></form>';
  let formAddName = document.getElementById("formAddName");
  formAddName.insertAdjacentHTML("afterbegin", insertRow);
}

creatFormAdd();
