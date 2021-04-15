// #### 1. Cho một mảng số, viết hàm tính trung bình cộng tất cả phần tử trong mảng

// ```js
// // Ví dụ
// avg([1, 2, 3]); // 2.0
// ```
function nhapMang(array1) {
  let check = true;
  do {
    let a = prompt("nhap phan tu vao mang: ");
    let b = Number(a);
    if (a == null || isNaN(b) == true) {
      check = false;
    } else {
      array1.push(b);
    }
  } while (check == true);
  return array1;
}
let arrayAvg = [];
nhapMang(arrayAvg);
console.log(arrayAvg);

// #### 2. Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng, kết quả trả về bao gồm giá trị và chỉ mục tương ứng

// ```js
// // Ví dụ
// maxOfArr([1, 2, 3]); // {index: 2, value: 3}
// ```

// #### 3. Cho một mảng số viết hàm tìm số lớn thứ 2 trong mảng

// ```js
// // Ví dụ
// secondValue([1, 3, 2, 4, 0, 4]); // 3
// ```

// #### 4. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.

// ```js
// // Ví dụ
// cap("hello world"); // "Hello World"
// ```

// #### 5. Viết hàm tìm số phần tử xuất hiện nhiều lần nhất trong mảng

// ```js
// // Ví dụ
// most([1, 2, 3]); // 2.0
// ```

// #### 6. Viết hàm cắt chuỗi thành một mảng có độ dài chỉ định.

// ```js
// // Ví dụ
// slide("Hello", 2); // ["He", "ll", "o"]
// ```

// #### 7. Viết hàm tách chuỗi thành một mảng các chuỗi con

// ```js
// // Ví dụ
// breakWord("dog"); // ["d", "do", "dog", "og", "g"]
// ```

// #### 8. Viết hàm loại bỏ các giá trị “false” khỏi mảng.

// ```js
// // Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]
// ```

// #### 9. Viết hàm lấy một phần tử ngẫu nhiên trong mảng

// ```js
// // Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]
// ```

// #### 10. Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)

// ```js
// // Ví dụ
// shuffle([1, 2, 3, 4]); // [1, 3, 4, 2]
// ```
