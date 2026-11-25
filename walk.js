var walkVideo = document.getElementById("walkVideo");
var playButton = document.getElementById("playButton");
var clipBox = document.getElementById("clipBox");
var chooser = document.getElementById("chooser");
var irmaButton = document.getElementById("irmaButton");
var jaydenButton = document.getElementById("jaydenButton");
var irmaDesktop = document.getElementById("irmaDesktop");
var jaydenDesktop = document.getElementById("jaydenDesktop");
var irmaBackButton = document.getElementById("irmaBackButton");
var jaydenBackButton = document.getElementById("jaydenBackButton");
var popup = document.getElementById("popup");
var popupTitle = document.getElementById("popupTitle");
var popupBody = document.getElementById("popupBody");
var popupClose = document.getElementById("popupClose");

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

// if the video file is missing or broken, skip straight to the laptop choice
walkVideo.onerror = function () {
    clipBox.classList.add("hidden");
    chooser.classList.remove("hidden");
};

walkVideo.onended = function () {
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
    closePopup();
    irmaDesktop.classList.add("hidden");
    chooser.classList.remove("hidden");
};

jaydenBackButton.onclick = function () {
    closePopup();
    jaydenDesktop.classList.add("hidden");
    chooser.classList.remove("hidden");
};

// one pop-up window is reused for every icon, only the title and content change
// learned about innerHTML here: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
function openPopup(title, content) {
    popupTitle.textContent = title;
    popupBody.innerHTML = content;
    popup.classList.remove("hidden");

    // some browsers ignore autoplay on videos added with innerHTML, so start it directly
    var recording = popupBody.querySelector("video");
    if (recording) {
        recording.muted = true;
        recording.play();
    }
}

// emptying the content also stops any recording that was playing
function closePopup() {
    popup.classList.add("hidden");
    popupBody.innerHTML = "";
}

popupClose.onclick = closePopup;

// muted videos are allowed to autoplay, so the recordings start as soon as the window opens and stop on their last frame
document.getElementById("irmaTodo").onclick = function () {
    openPopup("Notion: todo", '<video src="assets/irma-todo.mp4" autoplay muted playsinline></video>');
};

document.getElementById("jaydenTodo").onclick = function () {
    openPopup("Google Docs: todo", '<video src="assets/jayden-todo.mp4" autoplay muted playsinline></video>');
};

document.getElementById("irmaCalendar").onclick = function () {
    openPopup("Calendar: Wednesday",
        "<p>9:00 Breakfast</p>" +
        "<p><b>9:40 Leave for class</b></p>" +
        "<p>10:00 Lecture</p>" +
        "<p>12:30 Lunch</p>" +
        "<p>2:00 Library</p>");
};

document.getElementById("jaydenCalendar").onclick = function () {
    openPopup("Calendar: Wednesday",
        "<p>10:00 Lecture</p>" +
        "<p class='faded'>Reminder: leave by 9:40 (dismissed)</p>" +
        "<p class='faded'>Reminder: leave by 9:40 (dismissed)</p>");
};

document.getElementById("irmaAlarm").onclick = function () {
    openPopup("Alarm",
        "<p>7:30 Wake up &#10003;</p>" +
        "<p>Turned off at 7:30</p>");
};

document.getElementById("jaydenAlarm").onclick = function () {
    openPopup("Alarm",
        "<p>7:30 Wake up</p>" +
        "<p class='faded'>Snoozed 7:39</p>" +
        "<p class='faded'>Snoozed 7:48</p>" +
        "<p class='faded'>Snoozed 7:57</p>" +
        "<p><b>Turned off at 9:24</b></p>");
};
