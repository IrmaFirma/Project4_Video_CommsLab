var video = document.getElementById("callVideo");
var exploreButton = document.getElementById("exploreButton");
var blackScreen = document.getElementById("blackScreen");
var startText = document.getElementById("startText");

// the notifications page sets this when the viewer comes back to end the call
// learned about sessionStorage here: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
// sessionStorage forgets everything when the tab is closed, localStorage never does
var isEnding = sessionStorage.getItem("callEnding") == "yes";

// starts the call from the beginning again
sessionStorage.removeItem("callEnding");

// comes back to zoom video as end restart
if (isEnding) {
    video.src = "assets/zoom.mp4";
}

// hide the instruction text once the video starts playing
video.onplay = function () {
    startText.classList.add("hidden");
};

video.onended = function () {


    if (isEnding) {
        // the call is over, so show the black screen
        video.classList.add("hidden");
        blackScreen.classList.remove("hidden");
    } else {
        exploreButton.classList.remove("hidden");
    }
};

// navigate to next page after call in the middle of the day talk
exploreButton.onclick = function () {
    window.location.href = "walk.html";
};
