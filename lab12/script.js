let salaries = {
  anna: 1000,
  john: 1200,
  phoebe: 2000,
  brian: 1500,
  diana: 1100,
};

function inputName(obj) {
  let flag = true;
  do {
    let name = prompt("Ten nhan vien");
    let salari = prompt("Luong cua " + name + " :");
    if (name == null || salari == null || name == "") {
      flag = false;
    } else {
      obj[name] = Number(salari);
    }
  } while (flag != false);
}
// inputName(salaries);
// console.log(salaries);
// --------------------------
function editName(objEdit) {
  let flag = true;
  do {
    let name = prompt("Ten nhan vien muon sua: ");
    let salari = prompt("Luong la : ");
    if (name == null || salari == null || name == "") {
      flag = false;
    } else {
      if (name in objEdit == true) {
        objEdit[name] = Number(salari);
      } else {
        alert("khong co nhan vien: " + name);
      }
    }
  } while (flag == true);
}
editName(salaries);
console.log(salaries);

function total(objTotal) {
  let sumSalari = 0;
  for (let prop in objTotal) {
    sumSalari = sumSalari + objTotal[prop];
  }
  return sumSalari;
}
// console.log(total(salaries));

function minmax(objMinMax) {
  let max = Number.NEGATIVE_INFINITY;
  let nameMax = "";
  let min = Infinity;
  let nameMin = "";
  let objReturn = {};
  for (let prop in objMinMax) {
    if (min >= objMinMax[prop]) {
      min = objMinMax[prop];
      nameMin = prop;
    }
    if (max <= objMinMax[prop]) {
      max = objMinMax[prop];
      nameMax = prop;
    }
  }
  objReturn[nameMax] = max;
  objReturn[nameMin] = min;
  return objReturn;
}

// console.log(minmax(salaries));

function avg(objAvg) {
  let count = 0;
  for (let prop in objAvg) {
    count++;
  }
  let avgSum = total(objAvg) / count;
  return avgSum;
}
console.log(avg(salaries));
