// Food page
// order: clip -> choose a laptop -> click icons on their desktop

const foodVideo = document.getElementById("foodVideo");
const playButton = document.getElementById("playButton");
const skipButton = document.getElementById("skipButton");
const clipBox = document.getElementById("clipBox");
const chooser = document.getElementById("chooser");
const irmaButton = document.getElementById("irmaButton");
const jaydenButton = document.getElementById("jaydenButton");
const replayButton = document.getElementById("replayButton");
const nextButton = document.getElementById("nextButton");
const irmaDesktop = document.getElementById("irmaDesktop");
const jaydenDesktop = document.getElementById("jaydenDesktop");

// browsers can block videos with sound from starting on their own, so show the play button if that happens
// learned that play() can fail with .catch() here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
foodVideo.play().catch(function () {
    playButton.classList.remove("hidden");
});

playButton.addEventListener("click", function () {
    foodVideo.play();
    playButton.classList.add("hidden");
});

// show the laptop choice when the clip ends or is skipped
function showChooser() {
    foodVideo.pause();
    clipBox.classList.add("hidden");
    chooser.classList.remove("hidden");
}

foodVideo.addEventListener("ended", showChooser);
skipButton.addEventListener("click", showChooser);

replayButton.addEventListener("click", function () {
    chooser.classList.add("hidden");
    clipBox.classList.remove("hidden");
    foodVideo.currentTime = 0;
    foodVideo.play();
});

nextButton.addEventListener("click", function () {
    window.location.href = "lecture.html";
});

// open someone's laptop
irmaButton.addEventListener("click", function () {
    chooser.classList.add("hidden");
    irmaDesktop.classList.remove("hidden");
});

jaydenButton.addEventListener("click", function () {
    chooser.classList.add("hidden");
    jaydenDesktop.classList.remove("hidden");
});

// icons open windows, the red button closes them (called with onclick in the html)
// topLayer goes up each time, so the newest window is always on top
let topLayer = 1;

function openWindow(id) {
    const win = document.getElementById(id);
    win.classList.remove("hidden");
    topLayer = topLayer + 1;
    win.style.zIndex = topLayer;
}

function closeWindow(id) {
    document.getElementById(id).classList.add("hidden");
}

// back to the chooser, and close any windows that were left open
function goBack() {
    irmaDesktop.classList.add("hidden");
    jaydenDesktop.classList.add("hidden");
    chooser.classList.remove("hidden");

    const allWindows = document.querySelectorAll(".window");
    for (let i = 0; i < allWindows.length; i++) {
        allWindows[i].classList.add("hidden");
    }
}
