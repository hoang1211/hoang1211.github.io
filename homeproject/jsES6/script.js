let students = [
  {
    name: "Tú Anh",
    age: 21,
    email: "tuanh@techmaster.vn",
  },
  {
    name: "Chị Hạnh",
    age: 30,
    email: "hanh@techmaster.vn",
  },
  {
    name: "Quang",
    age: 24,
    email: "quang@techmaster.vn",
  },
  {
    name: "Cường",
    age: 25,
    email: "cuong@techmaster.vn",
  },
  {
    name: "Hoàng",
    age: 29,
    email: "hoang@techmaster.vn",
  },
  {
    name: "Ngọc",
    age: 27,
    email: "ngoc@techmaster.vn",
  },
  {
    name: "Huy",
    age: 19,
    email: "huy@techmaster.vn",
  },
];
// creat row
var createRow = (student, stt) => {
  let tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${stt + 1}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.email}</td>
        <td><button type="button" class="btn btn-success" id="btn-edit" onclick="editFunc(${stt})" data-bs-toggle="modal"  data-bs-target="#exampleModal"><i class="bi bi-pencil"></i></button></td>
        <td><button type="button" class="btn btn-warning" id="btn-delete" onclick="deleteFunc(${stt})" ><i class="bi bi-trash"></i></button></td>
    `;
  return tr;
};
// Creat table
var creatTable = (student) => {
  let table = document.createElement("table");
  table.classList.add("table");
  table.classList.add("table-striped");
  table.setAttribute("id", "table_id");
  table.innerHTML = `
        <thead>
            <tr>
              <th scope="col" >#</th>
              <th scope="col" onclick ="sortBy(this)" data-sortby="name" class="cursorTr">Name</th>
              <th scope="col" onclick ="sortBy(this)" data-sortby="age" class="cursorTr">Age</th>
              <th scope="col" onclick ="sortBy(this)" data-sortby="email" class="cursorTr">Email</th>
              <th scope="col" colspan="2">Action</th>
            </tr>
          </thead>
        <tbody id="dataListTag">
        </tbody>
    `;
  students.forEach((student, i) => {
    table.tBodies[0].append(createRow(student, i));
    i++;
  });
  return table;
};
let app = document.getElementById("app");
var render = () => {
  app.innerHTML = "";
  let table = creatTable(students);
  app.append(table);
};
render();
// edit
currentIndex = -1;
var editFunc = (index) => {
  currentIndex = index;
  let studentEdit = students[index];
  document.getElementById("nameStudent").value = studentEdit.name;
  document.getElementById("ageStudent").value = studentEdit.age;
  document.getElementById("emailStudent").value = studentEdit.email;
};
// save changes
var saveChanges = () => {
  let thaydoi = currentIndex;
  students[thaydoi].name = document.getElementById("nameStudent").value;
  students[thaydoi].age = document.getElementById("ageStudent").value;
  students[thaydoi].email = document.getElementById("emailStudent").value;
  currentIndex = -1;
  render();
};
// delete
let deleteFunc = (index) => {
  students.splice(index, 1);
  render();
};
// add students
let addInfo = () => {
  let newStu = {
    name: document.getElementById("addNameStudent").value,
    age: document.getElementById("addAgeStudent").value,
    email: document.getElementById("addEmailStudent").value,
  };
  students.push(newStu);
  document.getElementById("addNameStudent").value = "";
  document.getElementById("addAgeStudent").value = "";
  document.getElementById("addEmailStudent").value = "";
  render();
};
//Sort
let temp = null;
let sortBy = (el) => {
  let prop = el.dataset.sortby;
  if (!temp || temp != prop) {
    temp = prop;
    students.sort((a, b) => {
      if (prop == "name" || prop == "email") {
        let aString = a[prop].toUpperCase();
        let bString = b[prop].toUpperCase();
        if (aString < bString) {
          return -1;
        } else {
          return 1;
        }
      } else {
        return a[prop] - b[prop];
      }
    });
  } else {
    students.reverse();
  }
  render();
};
