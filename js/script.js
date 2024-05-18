
// play bgm
const audio = new Audio('/assets/audio/bgm.mp3');
audio.play();

// =============== LIGHT EFFECTS ============= \\
let pos = document.documentElement;
pos.addEventListener("mousemove", e => {
    pos.style.setProperty("--x", e.clientX + "px");
    pos.style.setProperty("--y", e.clientY + "px");
})



// ================= CREATURE SLIDER =============== \\
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

// =========================== ABOUT PAGE ================ \\
// TODO: put appear and disappear effect animation
const aboutContent = document.querySelector(".about-content div");
const aboutImg = document.querySelector(".about-content div img");


aboutContent.addEventListener("mouseenter", () => {
    // aboutImg.style.display = "block";
    aboutImg.classList.add("show-img")
})


aboutContent.addEventListener("mouseleave", () => {
    aboutImg.classList.remove("show-img")
})



// SHOW CONTENTS ON SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("inView-show");
        }
        // else {
        //     entry.target.classList.remove("show"); // if u want to trigger animation multiple times
        // }
    })
})

const hiddenElementsLeft = document.querySelectorAll(".inView-left");
const hiddenElementsRight = document.querySelectorAll(".inView-right");
const hiddenElementsY = document.querySelectorAll(".inView-y");
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));
hiddenElementsY.forEach((el) => observer.observe(el));
// ^ observe all hidden elements

