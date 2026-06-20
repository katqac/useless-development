const project = document.querySelector(".projects a");
const audio = new Audio("audio/click.mp3");

project.addEventListener("click", function () {
    audio.play();
});