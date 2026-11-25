// Notifications page (Sanjana)
// order: notification pops in -> play clip -> choose a laptop -> click icons on their desktop

const intro = document.getElementById("intro");
const introNotification = document.getElementById("introNotification");
const playButton = document.getElementById("playButton");
const clipBox = document.getElementById("clipBox");
const video = document.getElementById("notificationVideo");
const chooser = document.getElementById("chooser");
const irmaButton = document.getElementById("irmaButton");
const jaydenButton = document.getElementById("jaydenButton");
const irmaDesktop = document.getElementById("irmaDesktop");
const jaydenDesktop = document.getElementById("jaydenDesktop");

// remember this page was visited (for lighting up the Call tab)
// TODO: check with Irma that every page uses the same way
localStorage.setItem("notificationsVisited", "true");

// 1. notification slides in, then the play button shows up
// setTimeout: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
setTimeout(function () {
    introNotification.classList.add("show");
}, 600);

setTimeout(function () {
    playButton.classList.remove("hidden");
}, 2000);

// 2. play the clip
playButton.addEventListener("click", function () {
    intro.classList.add("hidden");
    clipBox.classList.remove("hidden");
    video.play();
});

// when the clip ends, show the chooser
// "ended" event: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event
video.addEventListener("ended", function () {
    clipBox.classList.add("hidden");
    chooser.classList.remove("hidden");
});

// 3. open someone's laptop
irmaButton.addEventListener("click", function () {
    chooser.classList.add("hidden");
    irmaDesktop.classList.remove("hidden");
});

jaydenButton.addEventListener("click", function () {
    chooser.classList.add("hidden");
    jaydenDesktop.classList.remove("hidden");
});

// 4. icons open windows, the red button closes them
// (these are called with onclick in the html)
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

    // querySelectorAll: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
    const allWindows = document.querySelectorAll(".window");
    for (let i = 0; i < allWindows.length; i++) {
        allWindows[i].classList.add("hidden");
    }
}
