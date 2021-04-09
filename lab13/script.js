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
function Weapon(name, type, damage, speed) {
  this.name = name;
  this.type = type;
  this.dame = dame;
  this.speed = speed;
  this.toSting = function () {
    return this.name;
  };
  this.valueOf() = function () {
    return this.dame * this.speed;
  };
}
let sungThoSan = new Weapon("Tho San", "sung", 1000, 1.5);
// 1. Thêm phương thức toString() cho Weapon trả về loại - tên vũ khí. VD: Súng Thợ Săn

// 2. Thêm phương thức valueOf() cho Weapon trả về damage * speed

// Viết hàm khởi tạo Character(name, level, weapon) khởi tạo các object character, weapon là một object được tạo từ Weapon()
// VD
// name = phoebe
// level = 1
// weapon = sungThoSan

function Character(nameChar, levelChar, weaponChar) {
  this.nameChar = nameChar;
  this.levelChar = levelChar;
  this.weaponChar = weaponChar;
  this.attack = function () {
    console.log("Sat thuong gay ra : " + this.weaponChar.valueOf());
  };
  this.changeWeapon = function (weapon) {
    this.weapon = weapon;
  };
}
let phoebe = new Character("phoebe", 18, sungThoSan);

// 3. Thêm phương thức attack() cho Character in ra lượng sát thương gây ra tương ứng với weapon damage và speed

// 4. Thêm phương thức changeWeapon(newWeapon) cho Character thay đổi weapon cho character tương ứng với tham số newWeapon
