
// play bgm
// const audio = new Audio('/assets/audio/bgm.mp3');
// audio.play();


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            entry.target.classList.add("show-view");
        } else {
            // entry.target.classList.remove("show-view");
        }
    })
});


const hiddenLeft = document.querySelectorAll(".hidden-left");
const hiddenRight = document.querySelectorAll(".hidden-right");
hiddenLeft.forEach((element) => observer.observe(element))
hiddenRight.forEach((element) => observer.observe(element))


// see more button
const seemoreBtn = document.querySelector(".seemore");
const moreText = document.querySelector(".more");

seemoreBtn.addEventListener("click", () => {
    // alert("click")
    moreText.classList.remove("more");
    seemoreBtn.style.display = "none";
});