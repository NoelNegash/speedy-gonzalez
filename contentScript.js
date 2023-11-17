function spawnToastHome () {
    // Create the overlay div
    var overlay = document.createElement("div");
    overlay.id = "speedy-toast-overlay"
    // Append the overlay div to the document body
    document.body.appendChild(overlay);
}
function spawnToast(text) {
    var overlay = document.getElementById("speedy-toast-overlay")
    overlay.innerHTML = `<div class='fade-out fade-out-end'>${text}</div>`
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.speed) {
        var videos = document.getElementsByTagName("video");
        for (var i = 0; i < videos.length; i++) {
            if (request.speed == "up") {
                if (videos[i].playbackRate >= 1) videos[i].playbackRate++;
                else videos[i].playbackRate *= 2
            } else {
                if (videos[i].playbackRate > 1) videos[i].playbackRate--;
                else videos[i].playbackRate /= 2
            }
        }
        if (videos.length) spawnToast(videos[0].playbackRate + "x")
    }
});

window.addEventListener("load", spawnToastHome)