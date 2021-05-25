let students = [
  {
    numberStu: 1,
    name: "Tú Anh",
    age: 21,
    email: "tuanh@techmaster.vn",
  },
  {
    numberStu: 2,
    name: "Chị Hạnh",
    age: 30,
    email: "hanh@techmaster.vn",
  },
  {
    numberStu: 3,
    name: "Quang",
    age: 24,
    email: "quang@techmaster.vn",
  },
  {
    numberStu: 4,
    name: "Cường",
    age: 25,
    email: "cuong@techmaster.vn",
  },
  {
    numberStu: 5,
    name: "Hoàng",
    age: 29,
    email: "hoang@techmaster.vn",
  },
  {
    numberStu: 6,
    name: "Ngọc",
    age: 27,
    email: "ngoc@techmaster.vn",
  },
  {
    numberStu: 7,
    name: "Huy",
    age: 19,
    email: "huy@techmaster.vn",
  },
];
// creat row
var createRow = (student) => {
  let tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.email}</td>
        <td><button type="button" class="btn btn-success" id="btn-edit" onclick="editFunc" data-bs-toggle="modal"  data-bs-target="#exampleModal"><i class="bi bi-pencil"></i></button></td>
        <td><button type="button" class="btn btn-warning" id="btn-delete" onclick="deleteFunc" data-bs-toggle="modal"  data-bs-target="#exampleModal"><i class="bi bi-trash"></i></button></td>
    `;
  return tr;
};
// Creat table
var creatTable = (student) => {
  let table = document.createElement("table");
  table.classList.add("table");
  table.classList.add("table-striped");
  table.innerHTML = `
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col" colspan="2">Action</th>
            </tr>
          </thead>
        <tbody>
        </tbody>
    `;
  students.forEach((student) => {
    table.tBodies[0].append(createRow(student));
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
