var walkVideo = document.getElementById("walkVideo");
var playButton = document.getElementById("playButton");
var clipBox = document.getElementById("clipBox");
var chooser = document.getElementById("chooser");

// browsers can block videos with sound from starting on their own, so show the play button if that happens
// learned about autoplay rules here: https://developer.chrome.com/blog/autoplay
// learned that play() can fail with .catch() here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
walkVideo.play().catch(function () {
    playButton.classList.remove("hidden");
});

playButton.onclick = function () {
    walkVideo.play();
    playButton.classList.add("hidden");
};

walkVideo.onended = function () {
    clipBox.classList.add("hidden");
    chooser.classList.remove("hidden");
};
