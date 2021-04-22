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
  const table = document.createElement("TABLE");
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
    document.getElementById("tr" + i).style.background = "pink";
  }
  function mOut() {
    document.getElementById("tr" + i).style.background = "";
  }
}

/**
 * Thêm event click cho cột tuổi (thẻ <th>), sắp xếp bảng theo độ tuổi
 * Có thay đổi thứ tự (click 1 lần sx tăng dần, click 2 lần giảm,
 * và icon hiển thị trạng thái tăng/giảm)
 */

/**
 * Thêm form, ô input và nút tìm kiếm
 * Cho phép nhập tên học viên, tìm kiếm và highlight học viên có tên trùng khớp (sử dụng thẻ <mark>)
 */

/**
 * Thêm form, các ô input tên, tuổi, giới tính, và nút thêm
 * Cho phép nhập thông tin học viên, tạo mới phần tử và thêm vào bảng
 */
