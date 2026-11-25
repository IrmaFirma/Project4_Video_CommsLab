var lectureVideo = document.getElementById("lectureVideo");
var playButton = document.getElementById("playButton");
var clipBox = document.getElementById("clipBox");
var chooser = document.getElementById("chooser");
var irmaButton = document.getElementById("irmaButton");
var jaydenButton = document.getElementById("jaydenButton");
var irmaDesktop = document.getElementById("irmaDesktop");
var jaydenDesktop = document.getElementById("jaydenDesktop");
var irmaBackButton = document.getElementById("irmaBackButton");
var jaydenBackButton = document.getElementById("jaydenBackButton");

// browsers can block videos with sound from starting on their own, so show the play button if that happens
lectureVideo.play().catch(function () {
    playButton.classList.remove("hidden");
});

playButton.onclick = function () {
    lectureVideo.play();
    playButton.classList.add("hidden");
};

lectureVideo.onended = function () {
    clipBox.classList.add("hidden");
    chooser.classList.remove("hidden");
};

irmaButton.onclick = function () {
    chooser.classList.add("hidden");
    irmaDesktop.classList.remove("hidden");
};

jaydenButton.onclick = function () {
    chooser.classList.add("hidden");
    jaydenDesktop.classList.remove("hidden");
};

irmaBackButton.onclick = function () {
    irmaDesktop.classList.add("hidden");
    chooser.classList.remove("hidden");
};

jaydenBackButton.onclick = function () {
    jaydenDesktop.classList.add("hidden");
    chooser.classList.remove("hidden");
};
