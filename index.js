var video = document.getElementById("callVideo");
var exploreButton = document.getElementById("exploreButton");
var blackScreen = document.getElementById("blackScreen");

// the notifications page sets this when the viewer comes back to end the call

// learned about localStorage here: https://www.w3schools.com/jsref/prop_win_localstorage.asp
// learned about localStorage here: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// learned about localStorage here: https://youtu.be/AUOzvFzdIk4?si=3f9KKBYsUOjZuQQR
var isEnding = localStorage.getItem("callEnding") == "yes";

// zoom end video to play second part
if (isEnding) {
    video.src = "assets/zoom-end.mp4";
}

// hide the instruction text once the video starts playing
var startText = document.getElementById("startText");

video.onplay = function () {
    startText.classList.add("hidden");
};

video.onended = function () {
    if (isEnding) {
        // the call is over, so show the black screen
        video.classList.add("hidden");
        blackScreen.classList.remove("hidden");
        localStorage.removeItem("callEnding");
    } else {
        exploreButton.classList.remove("hidden");
    }
};

// navigate to next page after call in the middle of the day talk
exploreButton.onclick = function () {
    window.location.href = "walk.html";
};