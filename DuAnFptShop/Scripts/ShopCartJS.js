const optionMenu = document.querySelector(".color");
const selectBtn = optionMenu.querySelector(".select-btn");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

//quantity

let amountElement = document.getElementById("amount");
let amount = amountElement.value;

//handle plus
let handlePlus = document.querySelector(".plus");

let render = (amount) => {
    amountElement.value = amount;
}

handlePlus.addEventListener("click", function () {
    amount++;
    render(amount);//ham gan value cua input text = gia tri amount vua tang
})


let handleMinus = document.querySelector(".minus");

handleMinus.addEventListener("click", function () {
    if (amount > 1) 
        amount--;
    render(amount);

})

amountElement.addEventListener("input", function () {
    amount = amountElement.value;
    amount = parseInt(amount);
    amount = (isNaN(amount) || amount == 0) ? 1 : amount;
    render(amount);
})

//order-promotion
let expandBtn1 = document.querySelector(".expand-btn");

expandBtn1.addEventListener("click", function () {
    document.querySelector(".order-promotion-title-expand").style.display = "block";
    this.style.display = "none";
})

let colapseBtn1 = document.querySelector(".colapse-btn");

colapseBtn1.addEventListener("click", function () {
    document.querySelector(".order-promotion-title-expand").style.display = "none";
    expandBtn1.style.display = "block";
})


//select-box
const selectBoxContent = document.querySelector(".select-box-content");
const selectOption = document.querySelector(".select-option");
const soValue = document.querySelector("#soValue");
const optionSearch = document.querySelector("#optionSearch");
const options = document.querySelector(".options");
const optionsList = document.querySelectorAll(".options li");

selectOption.addEventListener("click", function () {
    selectBoxContent.classList.toggle("active");
})

optionsList.forEach(function (optionListSingle) {//dung foreach de di den tung cai the li trong optionsList. optionListSingle:dai dien cho the li
    optionListSingle.addEventListener("click", function () {
        text = this.textContent; //this la  optionListSingle va textContent la noi dung tuong ung voi the li dang chon
        soValue.value = text;
        selectBoxContent.classList.remove("active");
        //let lastActive = document.querySelector(".options ul li.active");
        //lastActive.classList.remove("active");
        //this.classList.add("active");
    })
})


//Goi Y Tim Kiem          Quan Trong!!!!!!!!!!!!!
optionSearch.addEventListener("keyup", function () {
    var filter, li, i, textValue;
    filter = optionSearch.value.toUpperCase();
    li = options.getElementsByTagName('li');
    for (i = 0; i < li.length; i++){
        liCount = li[i];
        textValue = liCount.textContent || liCount.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none"; 
        }
    }
})

//infomation-form
var nameError = document.querySelector(".name-error");
var phoneError = document.querySelector(".phone-error");
var emailError = document.querySelector(".email-error");
var nameReceiverError = document.querySelector(".name-receiver-error");
var phonenumberReceiverError = document.querySelector(".phonenumber-receiver-error");

function validateName() {
    var nameUser = document.querySelector(".nameUser").value;
    if (nameUser.length == 0) {
        nameError.innerHTML = "! Thông tin bắt buộc";
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

function validatePhone() {
    var phone = document.querySelector(".phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = "";
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = "! Số điện thoại không hợp lệ";
        return false;
    }
    if (phone[0] != 0 || (phone[1] == 1 || phone[1] == 4 || phone[1] == 6)) {
        phoneError.innerHTML = "! Số điện thoại không hợp lệ";
        return false;
    }
    phoneError.innerHTML = "";
    return true;
}

function validateEmail() {
    var Email = document.querySelector(".Email").value;
    if (Email.length == 0) {
        emailError.innerHTML = "";
        return false;
    }
    if (!Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "! Email không hợp lệ"
        return false;
    }
    emailError.innerHTML = "";
    return true;
}

function validateNameReceiver() {
    var nameUserReceiver = document.querySelector(".nameReceiver").value;
    if (nameUserReceiver.length == 0) {
        nameReceiverError.innerHTML = "! Thông tin bắt buộc";
        return false;
    }
    nameReceiverError.innerHTML = "";
    return true;
}

function validatePhoneNumberReceiver() {
    var phoneNumberReceiver = document.querySelector(".phoneNumberReceiver").value;
    if (phoneNumberReceiver.length == 0) {
        phonenumberReceiverError.innerHTML = "";
        return false;
    }
    if (phoneNumberReceiver.length != 10) {
        phonenumberReceiverError.innerHTML = "! Số điện thoại không hợp lệ"
        return false;
    }
    if (phoneNumberReceiver[0] != 0 || (phoneNumberReceiver[1] == 1 || phoneNumberReceiver[1] == 4 || phoneNumberReceiver[1] == 6)) {
        phonenumberReceiverError.innerHTML = "! Số điện thoại không hợp lệ"
        return false;
    }
    if (!phoneNumberReceiver.match(/^[0-9]{10}$/)) {
        phonenumberReceiverError.innerHTML = "! Số điện thoại không hợp lệ"
        return false;
    }
    phonenumberReceiverError.innerHTML = "";
    return true;
}

