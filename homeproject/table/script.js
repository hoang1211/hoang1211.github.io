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
function createRow(student) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
    `;
    tr.addEventListener("mouseover", function (ev) {
        this.classList.add("hover");
    });
    tr.addEventListener("mouseout", function (ev) {
        this.classList.remove("hover");
    });

    return tr;
}

function createTable(students) {
    let table = document.createElement("table");
    table.innerHTML = `
        <thead>
            <tr>
                <th onclick="sortBy(this)" data-sortby="name">Tên</th>
                <th onclick="sortBy(this)" data-sortby="age">Tuổi</th>
                <th onclick="sortBy(this)" data-sortby="gender">Giới tính</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    students.forEach(function (student) {
        table.tBodies[0].append(createRow(student));
    });

    return table;
}

let app = document.getElementById("app");

function render() {
    app.innerHTML = "";
    let table = createTable(students);
    app.append(table);
}

render();

/**
 * Thêm event cho các hàng, highlight hàng khi di chuột qua
 * Sử dụng event: mouseover, mouseout, mousein, ...
 */

/**
 * Thêm event click cho cột tuổi (thẻ <th>), sắp xếp bảng theo độ tuổi
 * Có thay đổi thứ tự (click 1 lần sx tăng dần, click 2 lần giảm,
 * và icon hiển thị trạng thái tăng/giảm)
 */

let current = null;

function sortBy(el) {
    let prop = el.dataset.sortby;

    if (!current || current != prop) {
        current = prop;

        students.sort(function (s1, s2) {
            if (prop == "name" || prop == "gender") {
                if (s1[prop] >= s2[prop]) {
                    return 1;
                } else {
                    return -1;
                }
            } else {
                return s1[prop] - s2[prop];
            }
        });
    } else {
        students.reverse();
    }

    render();
}

/**
 * Thêm form, ô input và nút tìm kiếm
 * Cho phép nhập tên học viên, tìm kiếm và highlight học viên có tên trùng khớp (sử dụng thẻ <mark>)
 */

let form = document.forms.search;
let text = form.elements.text;
let btn = form.elements.btn;

text.addEventListener("input", function (ev) {
    ev.preventDefault();

    let searchText = text.value.trim();
    let trs = Array.from(document.querySelector("table").tBodies[0].rows);
    trs.forEach(function (tr) {
        let name = tr.cells[0].textContent;
        if (name.includes(searchText)) {
            tr.cells[0].innerHTML = name.replace(
                searchText,
                "<mark>" + searchText + "</mark>"
            );
        } else {
            let name = tr.cells[0].textContent;
            tr.cells[0].innerHTML = name;
        }
    });
});

/**
 * Thêm form, các ô input tên, tuổi, giới tính, và nút thêm
 * Cho phép nhập thông tin học viên, tạo mới phần tử và thêm vào bảng
 */
