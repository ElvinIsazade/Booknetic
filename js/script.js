
// Sidebar open
const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".sidebar");
burger.addEventListener("click", () => {
    sidebar.style.transform = "translateX(0px)";
    document.body.classList.add("sidebar_opened");
});
// Sidbar close
const sidebar_close = sidebar.querySelector(".top button");
sidebar_close.addEventListener("click", () => {
    sidebar.style.transform = "translateX(-500px)";
    document.body.classList.remove("sidebar_opened");
});



// draggable slide




// Slideshow




const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click", function () {
    var active = document.querySelector(".slideshow_item.active_slideshow");
    active.classList.remove("active_slideshow");
    if (active.nextElementSibling != null) {
        console.log(active.nextElementSibling);
        active.nextElementSibling.classList.add("active_slideshow");
    } else {
        document.querySelector(".slideshow_inner").children[0].classList.add("active_slideshow");
    }
});

prev.addEventListener("click", function () {
    var active = document.querySelector(".slideshow_item.active_slideshow");
    active.classList.remove("active_slideshow");
    if (active.previousElementSibling != null) {
        console.log(active.previousElementSibling);
        active.previousElementSibling.classList.add("active_slideshow");
    } else {
        var len = document.querySelector(".slideshow_inner").childElementCount;
        document.querySelector(".slideshow_inner").children[len - 1].classList.add("active_slideshow");
    }
});


// Owl Carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        600: {
            items: 1,
            nav: false,
            dots: true
        },
        1000: {
            items: 5
        }
    }
});




// Accordion 

const accordion_item = document.querySelectorAll(".accordion_title");

for (let i = 0; i < accordion_item.length; i++) {
    accordion_item[i].addEventListener("click", function () {
        var active = document.querySelector(".accordion_item.active");
        if (active != null && active != this.parentNode) {
            active.classList.remove("active");
            active.children[1].style.maxHeight = null;
            active.children[0].children[1].classList.replace("fa-circle-arrow-up", "fa-circle-arrow-down");
        }
        this.parentNode.classList.toggle("active");

        if (this.nextElementSibling.style.maxHeight == 0) {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
        }
        else {
            this.nextElementSibling.style.maxHeight = null;
        }
        if (this.children[1].classList.contains("fa-circle-arrow-down")) {
            this.children[1].classList.replace("fa-circle-arrow-down", "fa-circle-arrow-up");
        } else {
            this.children[1].classList.replace("fa-circle-arrow-up", "fa-circle-arrow-down");
        }
    });

}


// searh button 
const search = document.querySelector("label");
const header_right = document.querySelector(".header-right");
const input_close = header_right.querySelector("a");
search.addEventListener("click", function () {
    console.log(window.outerWidth);
    if (window.outerWidth <= 591) {
        document.querySelector(".header-left").style.display = "none";
        document.querySelector(".burger").style.display = "none";
        header_right.querySelector("button").style.display = "none";
        document.querySelector("#search").style.visibility = "visible";
        document.querySelector("#search").style.width = "85%";
        header_right.style.width = "100%";
        search.style.left = "10px";
        
        
    }
});
input_close.addEventListener("click", function (e) {
    if (window.outerWidth <= 591) {
        e.preventDefault();
        document.querySelector(".header-left").style.display = "block";
        document.querySelector(".burger").style.display = "block";
        header_right.querySelector("button").style.display = "block";
        header_right.querySelector("button").style.width = "134%";
        document.querySelector("#search").style.visibility = "hidden";
        search.style.left = "33px";
        header_right.querySelector("a").style.display = "none";
    }
});


// preloader

const loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});





// sliderShow


const slider = document.querySelector(".slider");
const slider_inner = document.querySelector(".slides");
let press = false;
let start;
slider.addEventListener("mousedown", function (e) {
    press = true;
    start = e.offsetX - slider_inner.offsetLeft;

    slider.style.cursor = "grabbing";
});
slider.addEventListener("mouseenter", function () {
    slider.style.cursor = "grab";
});
slider.addEventListener("mouseup", function () {
    slider.style.cursor = "grab";
});
window.addEventListener("mouseup", function () {
    press = false;
});
slider.addEventListener("mousemove", function (e) {
    if (!press) return;
    e.preventDefault();
    slider_inner.style.left = `${e.offsetX - start}px`;
    console.log(e.offsetX);
    if (parseInt(slider_inner.style.left) > 0) {
        slider_inner.style.left = "0px";
    } else if (slider_inner.getBoundingClientRect().right < slider.getBoundingClientRect().right) {
        slider_inner.style.left = `-${slider_inner.getBoundingClientRect().width - slider.getBoundingClientRect().width}px`
    }
});