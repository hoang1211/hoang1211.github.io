// . Viết chương trình nhập hệ số a, b của phương trình bậc 1 ax + b = 0, tính và in ra nghiệm
// của phương trình. Sử dụng toán tử logic để đánh giá các trường hợp của phương trình

// let a = Number(prompt("nhap so a: "));
// let b = Number(prompt("nhap so b: "));
// a == 0 && b == 0 && console.log("ptr vo so nghiem");
// a == 0 && b != 0 && console.log("ptr vo nghiem");
// a != 0 && b != 0 && console.log("nghiem phuong trinh la: " + -b / a);

// 5. Viết chương trình nhập 3 số a, b, c. Sử dụng toán tử logic kiểm tra và in ra số lớn nhất

// let a = Number(prompt("nhap so a: "));
// let b = Number(prompt("nhap so b: "));
// let c = Number(prompt("nhap so c: "));
// a <= b && b <= c && console.log("so lon nhat la: " + c);
// c <= a && a <= b && console.log("so lon nhat la: " + b);
// b <= a && c <= a && console.log("so lon nhat la: " + a);

// 6. Viết chương trình nhập 3 số a, b, c bất kỳ. Kiểm tra 3 số đó có tạo thành tam giác hợp lệ hay
// không và in ra kết quả, sử dụng toán tử logic

// let a = Number(prompt("nhap so a: "));
// let b = Number(prompt("nhap so b: "));
// let c = Number(prompt("nhap so c: "));
// a + b > c &&
//   b + c > a &&
//   c + a > b &&
//   console.log("ba so : " + a + "," + b + "," + c + " la canh cua 1 tam giac");
// a + b <= c &&
//   b + c <= a &&
//   c + a <= b &&
//   console.log(
//     "ba so : " + a + "," + b + "," + c + " khong la canh cua 1 tam giac"
//   );
// a <= 0 && b <= 0 && c <=0 && console.log(
//     "ba so : " + a + "," + b + "," + c + " khong la canh cua 1 tam giac"
//   );

// 1. VCT nhập ba số a, b, c, kiểm tra và in ra số lớn nhất

// let a = Number(prompt("nhap so a: "));
// let b = Number(prompt("nhap so b: "));
// let c = Number(prompt("nhap so c: "));
// if (a >= b && a >= c) {
//   console.log(a + " la so lon nhat");
// } else if (b >= c) {
//   console.log(b + " la so lon nhat");
// } else {
//   console.log(c + " la so lon nhat");
// }

// 2. VCT nhập một năm Āear, kiểm tra và in ra năm đó có phải năm nhuận hay không

// let a = Number(prompt("nhap so nam: "));
// if (a % 4 == 0 && a % 100 != 0) {
//   console.log(a + " la nam nhuan");
// } else if (a % 400 == 0) {
//   console.log(a + " la nam nhuan");
// } else if (a != parseInt(a)) {
//   console.log("so nam phai la so nguyen ");
// } else {
//   console.log(a + " khong la nam nhuan");
// }

// 3. VCT nhập một ký tự char, kiểm tra và in ra ký tự đó là nguyên hay phụ âm (tiếng Anh)

// let kyTu = prompt("Nhap vao ki tu : ");
// let charTest = kyTu.toUpperCase();
// if (charTest >= "A" && charTest <= "Z") {
//   if (
//     charTest == "A" ||
//     charTest == "E" ||
//     charTest == "O" ||
//     charTest == "I" ||
//     charTest == "U"
//   ) {
//     console.log("Ky tu : " + kyTu + " la nguyen am");
//   } else {
//     console.log("Ky tu : " + kyTu + " la phu am");
//   }
// } else {
//   console.log("Ban vua nhap khong phai la ky tu trong bang chu cai!!! ");
// }

// 4. VCT nhập một ký tự char, kiểm tra và in ra ký tự đó là chữ thường hay chữ in hoa

// let kyTu = prompt("Nhap vao ki tu : ");
// if (kyTu >= "a" && kyTu <= "z") {
//   console.log(kyTu + " la chu thuong");
// } else if (kyTu >= "A" && kyTu <= "Z") {
//   console.log(kyTu + " la chu hoa");
// } else {
//   console.log(kyTu + " khong nam trong bang chu cai ");
// }

// 5. VCT nhập ba hệ số a, b, c, của phương trình bậc 2 ax^2
// + bx + c = 0, tính và in ra nghiệm
// phương trình đó

// let a = Number(prompt("nhap so a: "));
// let b = Number(prompt("nhap so b: "));
// let c = Number(prompt("nhap so c: "));
// let d = b * b - 4 * a * c;

// if (a == 0) {
//   console.log("ptrinh vo nghiem");
// } else if (d < 0) {
//   console.log("ptrinh vo nghiem");
// } else if (d == 0) {
//   let nghiem = -b / (2 * a);
//   console.log("ptrinh co nghiem kep : " + nghiem);
// } else {
//   let nghiem1 = (-b + Math.sqrt(d)) / (2 * a);
//   let nghiem2 = (-b - Math.sqrt(d)) / (2 * a);
//   console.log("ptrinh co 2 nghiem la : " + nghiem1 + "," + nghiem2);
// }

// 6. VCT nhập số điểm point ở thang điểm 10 của sinh viên quy đổi sang thang điểm chữ:
// - point == 10 => A
// - point < 8.5 => B
// - point < 7.0 => C
// - point < 5.5 => D
// - point < 4.0 => F

// let a = Number(prompt("Nhap so diem point : "));
// if (a < 0 && a > 10) {
//   console.log("Nhap sai diem.Diem chi nam trong thang diem 10");
// } else if (a < 4) {
//   console.log("Diem cua ban la F ");
// } else if (a < 5.5) {
//   console.log("Diem cua ban la D ");
// } else if (a < 7) {
//   console.log("Diem cua ban la C ");
// } else if (a < 8.6) {
//   console.log("Diem cua ban la B ");
// } else {
//   console.log("Diem cua ban la A ");
// }
