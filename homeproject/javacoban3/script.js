// 1. VCT tính và in bảng cửu chương, sử dụng vòng lặp for lồng nhau

// for (let i = 1; i < 10; i++) {
//   let ketQua = "";
//   for (let j = 1; j < 10; j++) {
//     if (i + j >= 10) {
//       ketQua = ketQua + "     " + i + " x " + j + " = " + i * j;
//     } else {
//       ketQua = ketQua + "    " + i + " x " + j + " = " + i * j;
//     }
//   }
//   console.log(ketQua);
// }

// 2. VCT in ra nếu số chia hết cho 3 thì in Fizz, chia hết cho 5 thì in Buzz, chia hết cho cả 3 và 5
// thì in FizzBuzz, không chia hết cho cả 3 và 5 thì in BizzFuzz, trong khoảng 0 -> 50

// for (let i = 0; i < 51; i++) {
//   let fizz = "Fizz";
//   let buzz = "Buzz";
//   let fizzBuzz = "FizzBuzz";
//   let bizzFuzz = "BizzFuzz";
//   if (i % 3 != 0 && i % 5 != 0) {
//     console.log(bizzFuzz);
//   } else if (i % 3 == 0 && i % 5 == 0) {
//     console.log(fizzBuzz);
//   } else if (i % 3 == 0) {
//     console.log(fizz);
//   } else {
//     console.log(buzz);
//   }
// }

// 3. VCT tính và in ra tổng bội chung của 3 và 5 trong khoảng 0 -> 100

// let tong = 0;
// for (let i = 0; i < 101; i++) {
//   if ((i % 3 == 0) & (i % 5 == 0)) {
//     tong = tong + i;
//   }
// }
// console.log(tong);

// 4. VCT nhập vào một số n, kiểm tra số đó có phải số nguyên tố hay không và in ra kết quả

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

// 5. VCT nhập vào 2 số a, b kiểm tra và in ra các số nguyên tố trong khoảng a -> b

// let a = Number(prompt("nhap mot so a: "));
// let b = Number(prompt("nhap mot so b: "));

// function isPrime(n) {
//   let flag = false;
//   if (n < 2) {
//     return false;
//   } else if (n == 2) {
//     return true;
//   } else {
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) {
//         return false;
//       } else {
//         flag = true;
//       }
//     }
//   }
//   return flag;
// }
// if (a < 0 || b < 0 || isNaN(a) == true || isNaN(b) == true || a == b) {
//   console.log("Nhap sai, a va b phai lon hon 0, a khac b va la 1 so");
// } else if (a < b) {
//   for (let count = a; count < b + 1; count++) {
//     if (isPrime(count) == true) {
//       console.log(count);
//     }
//   }
// } else {
//   for (let count = b; count < a + 1; count++) {
//     if (isPrime(count) == true) {
//       console.log(count);
//     }
//   }
// }

// 6. VCT in ra bảng cửu chương ngược (từ 10 -> 1)

// for (let i = 10; i > 0; i--) {
//   let ketQua = "";
//   for (let j = 10; j > 0; j--) {
//     ketQua = ketQua + "    " + i + " x " + j + " = " + i * j;
//   }
//   console.log(ketQua);
// }

// 1. VCT in ra chữ số đầu và cuối của một số. VD 12345 -> 15

// let a = prompt("Nhap 1 so: ");
// if (a == "") {
//   console.log("Ban chua nhap so");
// } else {
//   a = Number(a);
//   if (isNaN(a) == true) {
//     console.log("Ban vua nhap ky tu khong phai la so");
//   } else if (a >= -9 && a <= 9) {
//     console.log("so dau va so cuoi deu la: " + Math.sqrt(a * a));
//   } else {
//     let demSo = 10;
//     let soCuoi = a % 10;
//     let soDau;
//     let count;
//     for (let i = 0; true; i++) {
//       count = a % demSo;
//       soDau = (a - count) / demSo;
//       demSo = demSo * 10;
//       if (demSo > a) {
//         break;
//       }
//     }
//     console.log("so cuoi la : " + soCuoi);
//     console.log("so dau la : " + soDau);
//   }
// }

// 2. VCT kiểm tra và in ra một số có phải số Palindrome hay không

// let a = Number(prompt("nhap so: "));
// function daoNguocSo(n) {
//   let soNguoc = 0;
//   let soCuoi = 0;
//   let soConLai;
//   let demSo = 10;
//   let count = n;
//   for (let i = 0; true; i++) {
//     soCuoi = count % 10;
//     count = (count - soCuoi) / 10;
//     if (i == 0) {
//       soNguoc = soCuoi;
//     } else {
//       soNguoc = soNguoc * 10 + soCuoi;
//     }
//     if (count < 10) {
//       soNguoc = soNguoc * 10 + count;
//     }
//     demSo = demSo * 10;
//     if (demSo > n) {
//       break;
//     }
//   }
//   return soNguoc;
// }
// if (daoNguocSo(a) == a) {
//   console.log(a + " la so Palindrome");
// } else {
//   console.log(a + " khong la so Palindrome");
// }

// 3. VCT kiểm tra và in ra một số có phải số Armstrong hay không

// let a = Number(prompt("Nhap vao 1 so : "));

// function demSo(n) {
//   let count = 10;
//   let soChuSo = 1;
//   for (let i = 0; true; i++) {
//     count = count * 10;
//     soChuSo++;
//     if (count > n) {
//       break;
//     }
//   }
//   return soChuSo;
// }

// function sumChuSo(s, m) {
//   let sum = 0;
//   let count = 10;
//   let soCuoi;
//   let cloneS = s;
//   for (let i = 0; true; i++) {
//     soCuoi = cloneS % 10;
//     cloneS = (cloneS - soCuoi) / 10;
//     if (i == 0) {
//       sum = Math.pow(soCuoi, m);
//     } else {
//       sum = sum + Math.pow(soCuoi, m);
//     }
//     if (cloneS < 10) {
//       sum = sum + Math.pow(cloneS, m);
//     }
//     count = count * 10;
//     if (count > s) {
//       break;
//     }
//   }
//   return sum;
// }
// let test = demSo(a);
// if (sumChuSo(a, test) == a) {
//   console.log(a + " la so armstrong");
// } else {
//   console.log(a + " khong la so armstrong");
// }

// 4. VCT tính và in ra giai thừa Factorial của một số

// let a = Number(prompt("Nhap vao 1 so : "));
// let giaiThua = 1;
// if (a == 0) {
//   console.log("giai thua factorial cua " + a + " la 1");
// } else {
//   for (let i = 1; i < a + 1; i++) {
//     giaiThua = giaiThua * i;
//   }
//   console.log("giai thua factorial cua " + a + " la : " + giaiThua);
// }

// 5. VCT kiểm tra và in ra một số có phải số Perfect hay không

// let a = Number(prompt("Nhap vao 1 so : "));
// let sum = 0;
// for (let i = 0; i < a; i++) {
//   if (a % i == 0) {
//     sum = sum + i;
//   }
// }
// if (sum == a) {
//   console.log(a + " la so hoan hao");
// } else {
//   console.log(a + " khong la so hoan hao");
// }
// 6. VCT kiểm tra và in ra một số có phải số Strong hay không

// let a = Number(prompt("Nhap vao 1 so : "));

// function demSo(n) {
//   let count = 10;
//   let soChuSo = 1;
//   if (a > -10 && a < 10) {
//     soChuSo = 1;
//   } else {
//     for (let i = 0; true; i++) {
//       count = count * 10;
//       soChuSo++;
//       if (count > n) {
//         break;
//       }
//     }
//   }
//   return soChuSo;
// }
// function giaiThua(soA) {
//   let giaiThuaSo = 1;
//   if (soA == 0) {
//     giaiThuaSo = 1;
//   } else {
//     for (let i = 1; i < soA + 1; i++) {
//       giaiThuaSo = giaiThuaSo * i;
//     }
//   }
//   return giaiThuaSo;
// }
// function test(so, soCs) {
//   let strong = 0;
//   let soCuoi = 0;
//   for (let i = 0; i < soCs; i++) {
//     if (so > 9) {
//       soCuoi = so % 10;
//       strong = strong + giaiThua(soCuoi);
//       so = (so - soCuoi) / 10;
//     } else {
//       strong = strong + giaiThua(so);
//     }
//   }
//   return strong;
// }

// let testStrong = test(a, demSo(a));
// if (testStrong == a) {
//   console.log(a + " la so strong");
// } else {
//   console.log(a + " khong la so strong");
// }

// 1. Viết hàm printPrime(n) in ra các số nguyên tố trong khoảng từ 0 -> n

// function isPrime(a) {
//   if (a < 2) {
//     return false;
//   } else {
//     for (let i = 2; i < a; i++) {
//       if (a % i == 0) {
//         return false;
//         break;
//       } else {
//         return true;
//       }
//     }
//   }
// }
// function printPrime(n) {
//   for (let i = 0; i < n + 1; i++) {
//     if (isPrime(i) == true) {
//       console.log(i);
//     }
//   }
// }
// let soNhap = Number(prompt("Nhap 1 so n : "));
// printPrime(soNhap);

// 2. Viết hàm convertTemperature(temp, to) chuyển đổi nhiệt độ từ Celsius sang Farenheit

// let nhietDo = Number(prompt("Nhap nhiet do :  "));
// function convertTemperature(temp, to) {
//   if (to == "F" || to == "f") {
//     console.log("C sang F la: " + (temp * 1.8 + 32));
//   } else if (to === "k" || to == "K") {
//     console.log("C sang K la: " + (temp + 273.15));
//   } else {
//     console.log(
//       "do ban chon sai hoac khong chon gi nen mac dinh tra ve C sang K la: " +
//         (temp + 273.15)
//     );
//   }
// }
// let toTemp = prompt("Ban muon chuyen sang Farenheit hay Kevin (F/K): ");
// convertTemperature(nhietDo, toTemp);

// hoặc Kevin, mặc định sẽ chuyển từ Celsius sang Kevin và trả về kết quả
// 3. Viết hàm nearest(a, b) nhận vào 2 số, kiểm tra số nào gần với 100 nhất và trả về kết quả

// let a1 = Number(prompt("Nhap so A: "));
// let b1 = Number(prompt("Nhap so B: "));
// function nearest(a, b) {
//   if (100 - a == 100 - b) {
//     console.log(a + " va " + b + " deu gan 100");
//   } else if (100 - a > 100 - b) {
//     console.log(b + " gan 100 nhat");
//   } else {
//     console.log(a + " gan 100 nhat");
//   }
// }
// nearest(a1, b1);

// 1. Viết hàm cube(n) tính và trả về giá trị lập phương của một số n
// 2. Viết hàm sumFibo(n) tính và trả về tổng dãy số Fibonacci từ 0 -> n

// let a = Number(prompt("nhap so n: "));

// function sumFibo(n) {
//   let s0 = 0;
//   let s1 = 1;
//   let sTg = 1;
//   let sum = 2;
//   if (n == 0) {
//     return (sum = 0);
//   }
//   if (n == 1) {
//     return (sum = 1);
//   }
//   for (i = 2; i < n; i++) {
//     s0 = s1;
//     s1 = sTg;
//     sTg = s0 + s1;
//     sum = sum + sTg;
//   }
//   return sum;
// }
// console.log(sumFibo(a));

// 3. Viết hàm isPrime(n) kiểm tra ncó phải số Prime, kết quả trả về true hoặc false
// 4. Viết hàm isArmstrong(n) kiểm tra n có phải số Armstrong, kết quả trả về true hoặc false
// 5. Viết hàm isPerfetc(n) kiểm tra n có phải số Perfect, kết quả trả về true hoặc false
// 6. Viết hàm isPalindrome(n) kiểm tra n có phải số Palindrome, kết quả trả về true hoặc false
// 7. Viết hàm factorial(n) tính và trả về giai thừa của n
// 8. Viết hàm isExpo(a, b) kiểm tra số a có phải lũy thừa của b hay không, kết quả trả về true
// hoặc false

// let a1 = Number(prompt("Nhap so A: "));
// let b1 = Number(prompt("Nhap so B: "));

// function isExpo(a, b) {
//   let test = b;
//   if ((a != 0) & (b != 0) & (a % b != 0)) {
//     return false;
//   }
//   if (b == 0) {
//     if (a == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if (a == 0 && b != 0) {
//     return false;
//   } else if (a == 1 && b == 1) {
//     return true;
//   } else {
//     do {
//       test = test * b;
//     } while (test < a);
//     if (test == a) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// if (isExpo(a1, b1) == true) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 9. Viết hàm subByMultiAndSum(n) tính và trả về kết quả biểu thức hiệu giữa tích và tổng của
// các chữ số trong số n.
// 10. Viết hàm expo(x, y) tính và trả về kết lũy thừa bậc y của x, (y có thể âm)

// 1. Viết hàm random(a, b), trả về số ngẫu nhiên trong khoảng a - b
// 2. Viết hàm isTriangle(a, b, c) nhận vào 3 tham số là cạnh của tam giác, kiểm tra 3 cạnh có phải
// tam giác hợp lệ hay không?
// 3. Viết hàm guessNumber(), khởi tạo một số ngẫu nhiên trong khoảng 0 - 10, sau đó hiển thị
// bảng cho phép người dùng đoán giá trị. Nếu đoán đúng hiển thị "Â mây zing, gút chóp" và
// dừng hàm, nếu sai hiển thị "Không khớp" và cho phép nhập lại. Số lần nhập tối đa là 3 lần,
// hoặc người dùng có thể bấm cancel để dừng hàm.


// 4. Viết hàm nearest(a, b) kiểm tra và trả về số gần với 100 nhất. VD: nearest(90, 105) // 105,
// hoặc rearest(80, 90) // 90
// 5. Viết hàm sequense(a, b, c) kiểm tra xem a, b, c có có phải tăng dần (hoặc giảm dần) hay
// không
// 1. Viết hàm countDecimal(number) trả về số chữ số trong phần thập phân của number
// 2. Viết hàm isAscending(number) kiểm tra dãy số của number có phải dãy tăng dần hay
// không?. VD: isAscending(123) // true
// 3. Viết hàm countEven(number) trả về số chữ số chẵn của number. VD: countEven(12345) // 2
// 4. Viết hàm find(number) trả về số n sao cho 1 + 2 + ... + n <= number. VD: find(7) // 3
// 5. Viết hàm sum(value1, unit1, value2, unit2) quy đổi về cùng đơn vị và trả về tổng giá trị value1
// + value2 theo unit1, unit bao gồm km, m, cm, dm, mm. VD: sum(1, 'km', 100, 'm') // 1,1 km
