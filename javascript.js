// ===============================
// IMAGE SLIDER
// ===============================

// Select Elements
const track = document.querySelector(".slider-track");
const images = document.querySelectorAll(".slider-track img");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");
const dotsContainer = document.querySelector(".slider-dots");

let currentSlide = 0;
let autoSlide;

// Create Dots
images.forEach((image, index) => {

    const dot = document.createElement("span");
    dot.classList.add("dot");

    if(index === 0){
        dot.classList.add("active");
    }

    dot.addEventListener("click", function(){

        currentSlide = index;
        showSlide();

    });

    dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".dot");

// Show Slide
function showSlide(){

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");

}

// Next Slide
function nextSlide(){

    currentSlide++;

    if(currentSlide >= images.length){
        currentSlide = 0;
    }

    showSlide();

}

// Previous Slide
function previousSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = images.length - 1;
    }

    showSlide();

}

// Button Events
nextBtn.addEventListener("click", function(){

    nextSlide();
    resetAutoSlide();

});

prevBtn.addEventListener("click", function(){

    previousSlide();
    resetAutoSlide();

});

// Auto Slide
function startAutoSlide(){

    autoSlide = setInterval(function(){

        nextSlide();

    }, 3000);

}

// Reset Timer
function resetAutoSlide(){

    clearInterval(autoSlide);
    startAutoSlide();

}

// Start Slider
showSlide();
startAutoSlide();


// ===============================
// SMOOTH SCROLL NAVIGATION
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});
