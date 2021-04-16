// function isEqual(obj1, obj2) {
//   for (let k in obj1) {
//     if (!(k in obj2) || obj1[k] != obj2[k]) {
//       return false;
//     }
//   }
//   for (let k in obj2) {
//     if (!(k in obj1) || obj2[k] != obj1[k]) {
//       return false;
//     }
//   }
//   return true;
// }

// Viết hàm khởi tạo Weapon(name, type, damage) khởi tạo các object weapon
// VD
// name = Thợ Săn
// type = Súng
// damage = 1000
// speed = 1.5

// function Weapon(name, type, damage, speed) {
//   this.name = name;
//   this.type = type;
//   this.dame = dame;
//   this.speed = speed;
//   this.toSting = function () {
//     return this.name;
//   };
//   this.valueOf() = function () {
//     return this.dame * this.speed;
//   };
// }
// let sungThoSan = new Weapon("Tho San", "sung", 1000, 1.5);

// 1. Thêm phương thức toString() cho Weapon trả về loại - tên vũ khí. VD: Súng Thợ Săn

// 2. Thêm phương thức valueOf() cho Weapon trả về damage * speed

// Viết hàm khởi tạo Character(name, level, weapon) khởi tạo các object character, weapon là một object được tạo từ Weapon()
// VD
// name = phoebe
// level = 1
// weapon = sungThoSan

// function Character(nameChar, levelChar, weaponChar) {
//   this.nameChar = nameChar;
//   this.levelChar = levelChar;
//   this.weaponChar = weaponChar;
//   this.attack = function () {
//     console.log("Sat thuong gay ra : " + this.weaponChar.valueOf());
//   };
//   this.changeWeapon = function (weapon) {
//     this.weaponChar = weapon;
//   };
// }
// let phoebe = new Character("phoebe", 18, sungThoSan);

// 3. Thêm phương thức attack() cho Character in ra lượng sát thương gây ra tương ứng với weapon damage và speed

// 4. Thêm phương thức changeWeapon(newWeapon) cho Character thay đổi weapon cho character tương ứng với tham số newWeapon
// Viết hàm khởi tạo Calculator(), có các phương thức:
// get(a, b) nhận vào 2 số a, b lưu vào 2 prop a, b tương ứng
// add() trả về tổng a + b
// sub() trả về hiệu a - b
// div(), mul(), rem(), exp(), … trả về kết quả phép tính tương ứng

// Làm thế nào để cho phép gọi hàm theo chuỗi
// VD cal.get(4,5).add(); // 9

// function Calculator1() {
//   this.get = function (a, b) {
//     this.a = a;
//     this.b = b;
//     return this;
//   };
//   this.add = function () {
//     return this.a + this.b;
//   };
//   this.sub = function () {
//     return this.a - this.b;
//   };
//   this.div = function () {
//     return this.a / this.b;
//   };
// }

// let cal = new Calculator1();
// cal.get(4, 5).add().sub();
// console.log(cal.get(4, 5).add());
// cal.add();
// cal.sub();

// Viết hàm tạo Counter(count), count mặc định = 0, và các phương thức
// up() tăng count lên 1
// down() giảm count 1
// get() in ra count hiện tại

// Làm thế nào để cho phép gọi hàm theo chuỗi VD counter.up().up().get().down().get();

function Counter(count) {
  this.count = count || 0;
  this.up = function up() {
    this.count++;
    return this;
  };
  this.down = function down() {
    this.count--;
    return this;
  };
  this.get = function () {
    console.log(this.count);
    return this;
  };
}
let test = new Counter(10);
console.log(test.up().up().get().down().get());
