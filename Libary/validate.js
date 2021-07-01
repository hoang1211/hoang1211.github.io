const validateEmail = (email) => {
  const reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return reEmail.test(email);
};
const validatePass = (passW) => {
  const rePw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return rePw.test(passW);
};
let isvalid;
const checkValid = () => {
  const e = document.getElementById("validationEmail").value;
  const p = document.getElementById("validationPass").value;
  if (validateEmail(e) == false) {
    document.getElementById("em-feedback").style.display = "block";
    isvalid = false;
  } else {
    document.getElementById("em-feedback").style.display = "none";
    isvalid = true;
  }
  if (validatePass(p) == false) {
    document.getElementById("pw-feedback").style.display = "block";
    isvalid = false;
  } else {
    document.getElementById("pw-feedback").style.display = "none";
    isvalid = true;
  }
  return isvalid;
};

export default () => {
  isvalid = true;
  checkValid();
  return isvalid;
};
