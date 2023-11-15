const accountbtn = document.querySelector("#account-form");
const closebtn = document.querySelector("#account-form-closed");

accountbtn.addEventListener("click", function(){
    document.querySelector(".account-form").style.display = "flex";
})

closebtn.addEventListener("click", function () {
    document.querySelector(".account-form").style.display = "none";
})

var phoneNumberError = document.querySelector(".phonenumber-error");

function validatePhoneNumber(event) {
    var phoneNumber = document.querySelector(".phone-number").value;
    if (phoneNumber.length == 0) {
        phoneNumberError.innerHTML = "";
        return false;
    }
    if (phoneNumber.length != 10) {
        phoneNumberError.innerHTML = "! Số điện thoại không hợp lệ";
        return false;
    }
    if (phoneNumber[0] != 0 || (phoneNumber[1] == 1 || phoneNumber[1] == 4 || phoneNumber[1] == 6)) {
        phoneNumberError.innerHTML = "! Số điện thoại không hợp lệ";
        return false;
    }
    phoneNumberError.innerHTML = "";
    return true;
}

document.querySelector('#form-dang-ky').addEventListener('submit', function (event) {
    if (!validatePhoneNumber()) {
        event.preventDefault();
    }
});