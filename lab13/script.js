function isEqual(obj1, obj2) {
  for (let k in obj1) {
    if (!(k in obj2) || obj1[k] != obj2[k]) {
      return false;
    }
  }
  for (let k in obj2) {
    if (!(k in obj1) || obj2[k] != obj1[k]) {
      return false;
    }
  }
  return true;
}
