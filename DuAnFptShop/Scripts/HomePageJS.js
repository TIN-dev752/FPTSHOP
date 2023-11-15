const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');
const imgNumber = document.querySelectorAll(".slider-content-left-top img")
var index = 0;

rightbtn.addEventListener("click", function () {
    index = index + 1;
    if (index >= imgNumber.length) {
        index = 0;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
})

leftbtn.addEventListener("click", function () {
    index = index - 1;
    if (index < 0) {
        index = imgNumber.length - 1;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
})

//slider 1 -----------------------------------------------------------
const imgNumberli = document.querySelectorAll(".slider-content-left-bottom li")
imgNumberli.forEach(function (image, index) {
    image.addEventListener("click", function () {
        removeactive();
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
        image.classList.add("active");
    })
})

function removeactive() {
    var imgactive = document.querySelector(".active");
    imgactive.classList.remove("active");
}
//slider 2 ------------------------------------------------------------
function imgAuto() {
    removeactive();
    index += 1;
    if (index >= imgNumber.length) {
        index = 0;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
    imgNumberli[index].classList.add("active");
}
setInterval(imgAuto, 4000)