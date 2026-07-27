// =========================
// IMAGE SLIDER
// =========================

const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slider-track img");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");
const dotsContainer = document.querySelector(".slider-dots");

let currentIndex = 0;
const totalSlides = slides.length;

// Create Dots
for (let i = 0; i < totalSlides; i++) {

    const dot = document.createElement("span");
    dot.classList.add("dot");

    if (i === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", function () {

        currentIndex = i;
        updateSlider();

    });

    dotsContainer.appendChild(dot);

}

const dots = document.querySelectorAll(".dot");

// Update Slider
function updateSlider() {

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(function(dot){
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");

}

// Next Button
nextBtn.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlider();

});

// Previous Button
prevBtn.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    updateSlider();

});

// Auto Slide Every 3 Seconds
setInterval(function () {

    currentIndex++;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlider();

}, 3000);
