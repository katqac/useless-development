const project = document.querySelector(".projects a");
const audio = new Audio("audio/click.mp3");

project.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
});

// ===== Stars =====

for (let i = 0; i < 200; i++) {

    const star = document.createElement("div");
    const size = Math.random() * 2 + 1;
    
    star.style.opacity = Math.random() * 0.7 + 0.3;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.className = "star";

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(star);

}