function commonFunction() {
    let productSliderContent = document.querySelector(".product-slider-content");
    let productSliderContentImg = document.querySelectorAll(".product-slider-content img");
    let dots = document.querySelectorAll(".dots li");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    let active = 0;
    let LengthImg = productSliderContentImg.length - 1;
    next.onclick = function () {
        if (active >= LengthImg) {
            active = 0
        }
        else {
            active += 1;
        }
        reloadSlider();
    }

    prev.onclick = function () {
        if (active <= 0) {
            active = LengthImg;
        }
        else {
            active -= 1;
        }
        reloadSlider();
    }
    function reloadSlider() {
        let checkleft = productSliderContentImg[active].offsetLeft;
        productSliderContent.style.left = -checkleft + "px";

        let lastactivedot = document.querySelector(".dots li.active");
        lastactivedot.classList.remove("active");
        dots[active].classList.add("active");
    }

    dots.forEach((li, key) => {
        li.addEventListener("click", function () {
            active = key;
            reloadSlider();
        })
    })

    //active-product-color

    //let radio = document.querySelectorAll(".radio-discount ul li");

    //radio.addEventListener("click", function()
    //{
    //    let lastRadio = document.querySelector(".radio-discount ul li.active");
    //    lastRadio.classList.remove("active");
    //})



    //expandbtn
    const expandbtn1 = document.querySelector(".expand-btn1");

    expandbtn1.addEventListener("click", function () {
        document.querySelector(".product-discount-content-expand").style.display = "block";
        this.style.display = "none";
    })

    const expandbtn2 = document.querySelector(".expand-btn2");

    expandbtn2.addEventListener("click", function () {
        document.querySelector(".expand-content").style.display = "block";
        this.style.display = "none";
    })

    const tableViewDetailOpenbtn1 = document.querySelector(".table-view-detail-btn1");
    const tableViewDetailClosedbtn1 = document.getElementById("table-view-detail-closed");

    tableViewDetailOpenbtn1.addEventListener("click", function () {
        document.querySelector(".table-view-detail").style.display = "flex";
    })

    tableViewDetailClosedbtn1.addEventListener("click", function () {
        document.querySelector(".table-view-detail").style.display = "none";
    })

    const tableViewDetailOpenbtn2 = document.querySelector(".table-view-detail-btn2");
    const tableViewDetailClosedbtn2 = document.getElementById("table-view-detail-closed");

    tableViewDetailOpenbtn2.addEventListener("click", function () {
        document.querySelector(".table-view-detail").style.display = "flex";
    })

    tableViewDetailClosedbtn2.addEventListener("click", function () {
        document.querySelector(".table-view-detail").style.display = "none";
    })

    //paramNews-slider

    let paramNewsSliderContent = document.querySelector(".paramNews-slider-content");
    let paramNewsSliderContentImg = document.querySelectorAll(".paramNews-slider-content img");
    let paramNewsDots = document.querySelectorAll(".paramNews-dots ul li")
    console.log("paramNewsDots")

    function reLoadSlider() {
        let checkLeft = paramNewsSliderContentImg[active].offsetLeft;
        paramNewsSliderContent.style.left = -checkLeft + "px";

        let lastActiveDots = document.querySelector(".paramNews-dots ul li.active");
        lastActiveDots.classList.remove("active");
        paramNewsDots[active].classList.add("active")
    }

    paramNewsDots.forEach((li, index) => {
        li.addEventListener("click", function () {
            active = index;
            reLoadSlider();
        })
    })

    /*questions*/

    const accordionItem = document.getElementsByClassName("accordion-item");

    for (let i = 0; i < accordionItem.length; i++) {
        accordionItem[i].addEventListener("click", function () {
            this.classList.toggle("active");
        });
    }



}

// Gọi hàm khi trang được load
document.addEventListener("DOMContentLoaded", function () {
    commonFunction();
});