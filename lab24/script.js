function capitalize(param, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < param.length; i++) {
        if (typeof param[i] == "string") {
          param[i] =
            param[i][0].toUpperCase() + param[i].slice(1).toLowerCase();
        } else {
          reject(param[i]);
        }
      }
      resolve(param);
    }, ms);
  });
}
capitalize(["asdas", "aASD", 12312], 500)
  .then((param) => console.log(param))
  .catch((param) => console.log(param + " khong phai la string"));
