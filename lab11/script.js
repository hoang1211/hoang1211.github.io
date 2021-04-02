// 1. Viết chương trình tính tổng từ 0 -> 100 và in ra kết quả

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// 2. Viết chương trình tính tổng tất cả số lẻ trong khoảng 0 -> 100 và in ra kết quả

// let sum = 0;
// for (let i = 1; i < 100; i = i + 2) {
//   sum += i;
// }
// console.log(sum);

// 3. Viết chương trình tính tổng tất cả các số lẻ chia hết cho 3 trong khoảng 0 -> 100 và in ra
// kết quả

// let sum = 0;
// for (let i = 1; i < 100; i = i + 2) {
//   if (i % 3 == 0) {
//     sum += i;
//   } else {
//     sum = sum + 0;
//   }
// }
// console.log(sum);

// 4. Viết chương trình tính tổng tất cả các số chia hết cho cả 3, 5 và 7 trong khoảng 0 -> 100 và
// in ra kết quả

// 5. Viết chương trình tính tổng bình phương của tất cả các số chia hết cho 3 hoặc 5 hoặc 7 trong
// khoảng 0 -> 100 và in ra kết quả
// 6. Viết chương trình in bảng cửu chương từ 1 -> 10

// for (let i = 1; i < 11; i++) {
//   let s = "";
//   for (let z = 1; z < 11; z++) {
//     s += z * i + " ";
//   }
//   console.log(s);
// }
// Viết hàm isPrime(n) nhận vào 1 số, kiểm tra và in ra số đó có phải số nguyên tố hay không

// let prime = Number(prompt("nhap mot so: "));

// function isPrime(n) {
//   if (n < 2) {
//     console.log(n + " khong phai la so nguyen to");
//   } else {
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) {
//         console.log(n + " khong phai la so nguyen to");
//         break;
//       } else {
//         console.log(n + " la so nguyen to");
//       }
//     }
//   }
// }
// isPrime(prime);
