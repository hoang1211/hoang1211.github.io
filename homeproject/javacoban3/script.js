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

for (let i = 0; i < 51; i++) {
  let fizz = "Fizz";
  let buzz = "Buzz";
  let fizzBuzz = "FizzBuzz";
  let bizzFuzz = "BizzFuzz";
  if (i % 3 != 0 && i % 5 != 0) {
    console.log(bizzFuzz);
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(fizzBuzz);
  } else if (i % 3 == 0) {
    console.log(fizz);
  } else {
    console.log(buzz);
  }
}

// 3. VCT tính và in ra tổng bội chung của 3 và 5 trong khoảng 0 -> 100
// 4. VCT nhập vào một số n, kiểm tra số đó có phải số nguyên tố hay không và in ra kết quả
// 5. VCT nhập vào 2 số a, b kiểm tra và in ra các số nguyên tố trong khoảng a -> b
// 6. VCT in ra bảng cửu chương ngược (từ 10 -> 1)
// 1. VCT in ra chữ số đầu và cuối của một số. VD 12345 -> 15
// 2. VCT kiểm tra và in ra một số có phải số Palindrome hay không
// 3. VCT kiểm tra và in ra một số có phải số Armstrong hay không
// 4. VCT tính và in ra giai thừa Factorial của một số
// 5. VCT kiểm tra và in ra một số có phải số Perfect hay không
// 6. VCT kiểm tra và in ra một số có phải số Strong hay không
// 1. Viết hàm printPrime(n) in ra các số nguyên tố trong khoảng từ 0 -> n
// 2. Viết hàm convertTemperature(temp, to) chuyển đổi nhiệt độ từ Celsius sang Farenheit
// hoặc Kevin, mặc định sẽ chuyển từ Celsius sang Kevin và trả về kết quả
// 3. Viết hàm nearest(a, b) nhận vào 2 số, kiểm tra số nào gần với 100 nhất và trả về kết quả
// 1. Viết hàm cube(n) tính và trả về giá trị lập phương của một số n
// 2. Viết hàm sumFibo(n) tính và trả về tổng dãy số Fibonacci từ 0 -> n
// 3. Viết hàm isPrime(n) kiểm tra ncó phải số Prime, kết quả trả về true hoặc false
// 4. Viết hàm isArmstrong(n) kiểm tra n có phải số Armstrong, kết quả trả về true hoặc false
// 5. Viết hàm isPerfetc(n) kiểm tra n có phải số Perfect, kết quả trả về true hoặc false
// 6. Viết hàm isPalindrome(n) kiểm tra n có phải số Palindrome, kết quả trả về true hoặc false
// 7. Viết hàm factorial(n) tính và trả về giai thừa của n
// 8. Viết hàm isExpo(a, b) kiểm tra số a có phải lũy thừa của b hay không, kết quả trả về true
// hoặc false
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
