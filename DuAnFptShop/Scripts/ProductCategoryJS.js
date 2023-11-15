const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');
const imgNumber = document.querySelectorAll(".slider-content-item img")
var index = 0;

rightbtn.addEventListener("click", function () {
    index = index + 1;
    if (index >= imgNumber.length) {
        index = 0;
    }
    document.querySelector(".slider-content-item").style.right = index * 100 + "%";
})

leftbtn.addEventListener("click", function () {
    index -= 1;
    if (index < 0) {
        index = imgNumber.length - 1;
    }
    document.querySelector(".slider-content-item").style.right = index * 100 + "%";
})

function imgAuto() {
    index += 1;
    if (index > imgNumber.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-content-item").style.right = index * 100 + "%";
}
setInterval(imgAuto, 3000);

//button xem them (history)
const seeallbtn = document.querySelector(".seeall-btn");
const colapsebtn = document.querySelector(".colapse-btn");

seeallbtn.addEventListener("click", function () {
    document.querySelector(".seeall").style.display = "block";
    this.style.display = "none";
})

colapsebtn.addEventListener("click", function () {
    document.querySelector(".seeall").style.display = "none";
    seeallbtn.style.display = "block";
})



