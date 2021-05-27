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

let renderStudents = (students) =>
    students
        .map(
            ({ name, age, email }, i) => `
                <tr>
                    <th scope="row">${i + 1}</th>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${email}</td>
                    <td>
                        <button
                            class="btn btn-sm btn-outline-primary" data-bs-toggle="modal"
                            data-bs-target="#modal"
                            data-id="${i}"
                        >
                            <i class="bi bi-pencil"></i>
                        </button>

                        <button class="btn btn-sm btn-outline-primary" onclick="deleteStudent(${i})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        )
        .join("");

document.getElementById("tbody").innerHTML = renderStudents(students);

const modal = document.getElementById("modal");
const modalLabel = document.getElementById("modalLabel");

const form = document.forms.modal;
const sname = form.elements.name;
const age = form.elements.age;
const email = form.elements.email;

const btnSave = document.getElementById("save");
const btnClose = document.getElementById("close");

modal.addEventListener("show.bs.modal", (e) => {
    let btn = e.relatedTarget;
    let index = btn.dataset.id;

    if (index) {
        let student = students[index];

        modalLabel.textContent = `Sua thong tin hoc vien: ${student.name}`;
        sname.value = student.name;
        age.value = student.age;
        email.value = student.email;

        btnSave.onclick = () => editStudent(student);
    } else {
        modalLabel.textContent = "Them moi hoc vien";
        btnSave.onclick = () => addStudent();
    }
});

modal.addEventListener("hide.bs.modal", (e) => {
    sname.value = "";
    age.value = "";
    email.value = "";
    sname.classList.remove("is-invalid");
    age.classList.remove("is-invalid");
    email.classList.remove("is-invalid");
});

let deleteStudent = (index) => {
    let answer = confirm(`Co thuc su muon xoa hs: ${students[index].name}`);

    if (answer) {
        students.splice(index, 1);
        document.getElementById("tbody").innerHTML = renderStudents(students);
    }
};

let editStudent = (student) => {
    if (sname.value.trim().length == 0) {
        sname.classList.add("is-invalid");
        return;
    } else {
        sname.classList.remove("is-invalid");
    }

    student.name = sname.value.trim();
    student.age = age.value;
    student.email = email.value.trim();

    document.getElementById("tbody").innerHTML = renderStudents(students);
    btnClose.click();

    // return undefined
};

let addStudent = () => {
    if (sname.value.trim().length == 0) {
        sname.classList.add("is-invalid");
        return;
    } else {
        sname.classList.remove("is-invalid");
    }

    let student = {
        name: sname.value.trim(),
        age: age.value,
        email: email.value.trim(),
    };

    students.push(student);
    document.getElementById("tbody").innerHTML = renderStudents(students);
    btnClose.click();
};
