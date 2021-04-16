// #### 1. Cho một mảng số, viết hàm tính trung bình cộng tất cả phần tử trong mảng

// ```js
// // Ví dụ
// avg([1, 2, 3]); // 2.0
// ```

// function nhapMang(array1) {
//   let check = true;
//   do {
//     let a = prompt("nhap phan tu vao mang: ");
//     let b = Number(a);
//     if (a == null || isNaN(b) == true || a == "") {
//       check = false;
//     } else {
//       array1.push(b);
//     }
//   } while (check == true);
//   return array1;
// }
let arrayAvg = [1, 2, 3];
// nhapMang(arrayAvg);
// console.log(arrayAvg);
// function avgArray(array1, count) {
//   let sum = 0;
//   for (let i = 0; i < count; i++) {
//     sum = sum + array1[i];
//   }
//   return sum / count;
// }
// console.log(avgArray(arrayAvg, arrayAvg.length));

// function avgArray(array1) {
//   let sum = 0;
//   let count = 0;
//   for (let i of array1) {
//     sum = sum + i;
//     count++;
//   }
//   return sum / count;
// }
// console.log(avgArray(arrayAvg));

// #### 2. Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng, kết quả trả về bao gồm giá trị và chỉ mục tương ứng

// ```js
// // Ví dụ
// maxOfArr([1, 2, 3]); // {index: 2, value: 3}
// ```
// function maxOfArr(array1) {
//   let max = Number.NEGATIVE_INFINITY;
//   let count = 0;
//   let index = 0;
//   for (let i of array1) {
//     if (i >= max) {
//       max = i;
//       index = count;
//     }
//     count++;
//   }
//   console.log("index: " + index + " value: " + max);
// }
// maxOfArr(arrayAvg);

// #### 3. Cho một mảng số viết hàm tìm số lớn thứ 2 trong mảng

// ```js
// // Ví dụ
// secondValue([1, 3, 2, 4, 0, 4]); // 3
// ```

// function secondValue(arraySort) {
//   arraySort.sort((a, b) => b - a);
//   let max = arraySort[0];
//   let arrayDeleteMax = arraySort.filter((i) => i != max);
//   arrayDeleteMax.sort((a, b) => b - a);
//   return arrayDeleteMax[0];
// }
// let a = secondValue([1, 3, 2, 4, 0, 4]);
// console.log(a);

// function secondValue(arraySort) {
//   arraySort.sort((a, b) => b - a);
//   let max = arraySort[0];
//   for (let i of arr) {
//     if (i < max) {
//       return i;
//     }
//   }
// }

// #### 4. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.

// ```js
// // Ví dụ
// cap("hello world"); // "Hello World"
// ```

// function cap(text) {
//   return text
//     .split(" ")
//     .map(function (word) {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }
// console.log(cap("hello world"));

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

function breakWord(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
}

// #### 8. Viết hàm loại bỏ các giá trị “false” khỏi mảng.

// ```js
// // Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]
// ```

function removeFalsy(arr) {
  return arr.filter(Boolean);
}

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

// function shuffle(array) {
//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   };
//   return shuffleArray;
// }
