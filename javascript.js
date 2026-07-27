// =========================
// IMAGE SLIDER
// =========================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

// Display Current Slide
function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

// Next Button
nextBtn.addEventListener("click", function () {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

});

// Previous Button
prevBtn.addEventListener("click", function () {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});

// Click on Dots
dots.forEach((dot, index) => {

    dot.addEventListener("click", function () {

        currentSlide = index;

        showSlide(currentSlide);

    });

});

// Auto Slide Every 3 Seconds
setInterval(function () {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 3000);

// Display First Slide
showSlide(currentSlide);
