const email = document.getElementById("email");
const emailFeedback = document.querySelector(".email-feedback");

const password = document.getElementById("password");
const passwordFeedback = document.querySelector(".password-feedback");

let isValid;

const checkEmail = () => {
    if (email.value.trim().length < 5 || email.value.indexOf("@") < 0) {
        emailFeedback.textContent = "Vui lòng cung cấp địa chỉ email hợp lệ!";
        email.classList.add("is-invalid");
        isValid = false;
    } else {
        email.classList.remove("is-invalid");
        emailFeedback.textContent = "";
    }
};

const checkPassword = () => {
    if (password.value.trim().length < 5) {
        passwordFeedback.textContent =
            "Mật khẩu phải có độ dài tối thiểu 5 ký tự";
        password.classList.add("is-invalid");
        isValid = false;
    } else {
        password.classList.remove("is-invalid");
        passwordFeedback.textContent = "";
    }
};

export default () => {
    isValid = true;
    checkEmail();
    checkPassword();

    return isValid;
};
