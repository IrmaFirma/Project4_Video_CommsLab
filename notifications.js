// File setup for Sanjana 
var notificationVideo = document.getElementById("notificationVideo");
var playButton = document.getElementById("playButton");
var backToCallButton = document.getElementById("backToCallButton");

playButton.onclick = function () {
    notificationVideo.play();
    playButton.classList.add("hidden");
};

// when the video ends, show the button that goes back to the call to end the zoom sequence
notificationVideo.onended = function () {
    backToCallButton.classList.remove("hidden");
};

// learned about localStorage here: https://www.w3schools.com/jsref/prop_win_localstorage.asp
// learned about localStorage here: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// learned about localStorage here: https://youtu.be/AUOzvFzdIk4?si=3f9KKBYsUOjZuQQR
backToCallButton.onclick = function () {
    // tells the call page to play the ending call
    localStorage.setItem("callEnding", "yes");
    window.location.href = "index.html";
};