//Number

// let n = new Number(10);
// console.log(n.toString);
// console.log((10).toString);
// console.log(n.toString(2));//Chuyển đổi hệ cơ số 2
// parseInt("123asv", 2);// 2: la hệ co số chuyển đổi
// Math.ceil(5.3);//lam tron len

//Viết hàm tạo số tự nhiên ngẫu nhiên từ 0 -n

// function random(n){
//   console.log(Math.floor(Math.random() * n));
// }
// let n = Number(prompt("Nhập n"));
// random(n);

// Viết hàm chuyển đổi một số từ hệ cơ số này sang hệ cơ số khác convert(value, from, to)
// function convert(value, from, to){
//     let temp =parseInt(value, from);
//     return temp.toString(to);
// }
//Viết hàm tao số ngẫu nhiên từ  a - b
// function random(a,b){
//     return(Math.random() * (b - a) + a);
// }

// SInh màu Hex
// function hex(){
//     return Math.random() * 255
// }

// Chuỗi

//  1. Viết hàm chuyển đổi một tên thành tên viết tắt.
// abbr(“Ba Nguyễn”); // “Ba N.”
// function nameConvert(name){
//     let space = name.indexOf(" ");
//     name = name.slice(0, space + 2);
//     return name + ".";
// }

// #### 2. Viết hàm ẩn địa chỉ email.
// Ví dụ
//hide(“banguyen@techmaster.vn”); // “ba…@techmaster.vn”
// function  hide(name) {
//     let domain = name.indexOf("@");
//     domain = name.slice(domain);
//     let email = name.slice(0, 2);
//     return email + "..." + domain;
// }
// console.log(hide("BaNguyen@gmail.com"));
// #### 3. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.

// ```js
// // Ví dụ
// cap(“hello world”); // “Hello World”
// ```

// #### 4. Viết hàm chuyển đổi một chuỗi thành dạng paramaterize.
// ```js
// // Ví dụ
// param(“Hello World”); // “hello-world”
// ```

// #### 5. Viết hàm đảo ngược chữ thường thành chữ hoa, và ngược lại.

// ```js
// // Ví dụ
// revertCase(“aBcD”); // “AbCd”
// ```

// #### 6. Viết hàm chèn một chuỗi con vào chuỗi tại index chỉ định.

// ```js
// // Ví dụ
// insertTo(“acde”, “b”, 1); // “abcde”
// ```

// #### 7. Viết hàm đếm số lần xuất hiện của chuỗi con trong chuỗi.

// ```js
// // Ví dụ
// count(“abca”, “a”); // 2
// ```

// #### 8. Viết hàm cắt chuỗi theo số từ chỉ định.

// ```js
// // Ví dụ
// slideWords(“My name is Ba”, 2); // “My name”
// ```

// #### 9. Viết hàm tạo chuỗi ngẫu nhiên với độ dài 32 ký tự.

// ```js
// // Ví dụ
// randomString(); // “sfjh2ih4(U#%(kljo423oiir*(#%UIOJ”
// ```

// #### 10. Viết hàm thay thế các ký tự trong chuỗi thành ký tự liền sau trong bảng mã Unicode.

// ```js
// // Ví dụ
// toNextChar(“ad”); // “be”

// // ngay

// #### 1. Viết hàm in ra thứ viết tắt, tương ứng với ngày hiện tại.

// ```js
// // Ví dụ
// dayOfWeek(date); // "T2"
// ```

// #### 2. Viết hàm trả về ngày trước ngày hiện tại n ngày
// function dateBefore(date, n ){
//     let nowDate = date.getDate();
// return new Date(date.setDate(nowDate - n));

// }
// ```js
// // Ví dụ
// getDateBefore(date, 4); // "2020-02-10" -> "2020-02-06"
// ```

// #### 3. Viết hàm trả về số ngày trong tháng bất kỳ

// ```js
// // Ví dụ
// daysOfMonth(year, month); // 31
// ```

// #### 4. Viết hàm tính số ngày còn lại đến tết dương lịch năm sau

// ```js
// // Ví dụ
// daysToNewYear(); // 123
// ```

// #### 5. Viết hàm kiểm tra một ngày có phải cuối tuần hay không

// ```js
// // Ví dụ
// isWeekend(date); // true
// ```

// #### 6. Viết hàm tính tổng số ngày đã qua trong năm

// ```js
// // Ví dụ
// daysPassed(); // 123
// ```

// #### 7. Viết hàm trả về chuỗi ngày tháng hiện tại có dạng “10:01:30 CN 20/01/2020”

// #### 8. Viết hàm trả về số giờ chênh lệnh giữa 2 ngày

// ```js
// // Ví dụ
// hoursDiff(date1, date2); // 123
// ```

// #### 9. Viết hàm trả về ngày đầu tuần (T2) tương ứng với thời gian truyền vào

// ```js
// // Ví dụ
// monday(date); // "2020-02-12"
// ```

let fruit = ["orange", "apple", "strawberry"];

fruit[0] = "mango";
console.log(fruit[0]);
console.log(fruit.length);
fruit.splice(2, 3); //xoa
fruit.splice(2, null, "a", "b"); //them
//sort sap xep theo chuoi
// for(i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }

// let a = [1, 4, 5, 6, 7, 9];
// a.filter(function (i) {
//     return i > 5;
// });
// console.log(a);
// a.sort(function sortArr(a, b) {
//   return a - b;
// });

// console.log(a.sort(sortArr));
// for(let i of fruit){
//     console.log(i);
// }
// fruit.forEach(myFunction);
// function myFunction(value){
//     console.log(value);
// }


// let newArr = [];
// //  for(let i = 0; i < a.length; i++){
// //      a[i] = a[i] * 10;
// //  }
//  for(let i of a){
//     newArr.push(i * 10);
// }
//map
// let arr = [0, 5, 10, 15];
// let arr1 = arr.map(function(i){
//     return i * 10;
// });
// console.log(arr1);

// arr.reduce(function(sum, i){
//     return sum+=i;
// }, 0)
// fruit.push("Lemon");// Thêm phần tử vào cuối mảng

// let arr = ["ba", 0, {name: "beo", age: 28}];
// arr[2].name//beo

