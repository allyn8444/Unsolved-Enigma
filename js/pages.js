
// play bgm
const audio = new Audio('/assets/audio/bgm.mp3');
audio.play();


// Dynamic section hover effect
const gridImgs = document.querySelectorAll(".grid-img");

gridImgs.forEach((img) => {
    img.addEventListener("mouseover", () => {
        const gridInfo = img.nextElementSibling; // The <p> is the next sibling of the <img>
        if (gridInfo && gridInfo.classList.contains("grid-hidden")) {
            gridInfo.classList.remove("grid-hidden");

        }
        // img.style.backgroundColor = "blue";
    });

    img.addEventListener("mouseout", () => {
        const gridInfo = img.nextElementSibling;
        if (gridInfo && !gridInfo.classList.contains("grid-hidden")) {
            gridInfo.classList.add("grid-hidden");

            // img.style.backgroundColor = "yellow";
        }
    });
});



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
