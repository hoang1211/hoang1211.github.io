// ------Bài 1---------------
// Viết chương trình nhập vào một giá trị đo độ dài ở đơn vị cm, tính và in ra giá trị tương ứng ở
// các đơn vị mm, m, km
// ------Loi Giai------------
// let donVi = Number(prompt("Nhap so cm: "));
// function donViMm(cm) {
//   return cm * 10;
// }
// function donViM(m) {
//   return m * 0.01;
// }
// function donViKm(km) {
//   return km * 0.001;
// }
// console.log(
//   "So Mm : " +
//     donViMm(donVi) +
//     " So M : " +
//     donViM(donVi) +
//     " So KM : " +
//     donViKm(donVi)
// );
// ------Bài 2---------------
// Viết chương trình nhập vào một giá trị nhiệt độ ở đơn vị Celsius, in ra nhiệt độ ở đơn vị
// Fahrenheit và Kevin tương ứng
// ------Loi Giai------------
// let nhietDoC = Number(prompt("Nhap nhiet do C: "));
// function nhietDoF(doF) {
//   return doF * 1.8 + 32;
// }
// function nhietDoK(doK) {
//   return doK + 273.15;
// }
// console.log(" Do F : " + nhietDoF(nhietDoC) + " Do K : " + nhietDoK(nhietDoC));
// ------Bài 3---------------
// Viết chương trình nhập thời gian hiện tại tính theo số giây từ 0h, tính và in ra giá trị
// giờ/phút/giây tương ứng theo định dạng h:m:s
// ------Loi Giai------------
// let today = new Date();
// let soGiay =
//   today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
// let times =
//   " Gio hien tai theo h:m:s : " +
//   today.getHours() +
//   ":" +
//   today.getMinutes() +
//   ":" +
//   today.getSeconds();
// console.log("thời gian hiện tại tính theo số giây từ 0h : " + soGiay);
// console.log(times);
// ----------Nguoi dung nhap so giay------------
// let soGiayNhapVao = Number(prompt("Nhap so giay: "));
// let soGio = parseInt(soGiayNhapVao / 3600);
// let soPhut = parseInt((soGiayNhapVao % 3600) / 60);
// let soGiay = (soGiayNhapVao % 3600) % 60;
// console.log("Thoi gian la: " + soGio + "h:" + soPhut + "m:" + soGiay);
