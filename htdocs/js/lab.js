function labVideo() {
    document.getElementById("labVideo").style.zIndex = "2";
    document.getElementById("labImage1").style.height = "0";
    document.getElementById("labImage2").style.height = "0";
    document.querySelector('.video-controls').style.zIndex = "2";
}
function labImage1() {
    document.getElementById("labVideo").style.zIndex = "1";
    document.getElementById("labImage1").style.zIndex = "2";
    document.getElementById("labImage2").style.zIndex = "1";
    document.getElementById("labImage1").style.height = "400px";
    document.querySelector('.video-controls').style.zIndex = "1";
}
function labImage2() {
    document.getElementById("labVideo").style.zIndex = "1";
    document.getElementById("labImage1").style.zIndex = "1";
    document.getElementById("labImage2").style.zIndex = "2";
    document.getElementById("labImage2").style.height = "400px";
    document.querySelector('.video-controls').style.zIndex = "1";
}

// Video controls
const video = document.getElementById('labVideo');
const playButton = document.getElementById('playButton');
const progress = document.getElementById('progress');

function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = 'Pause';
    } else {
        video.pause();
        playButton.textContent = 'Play';
    }
}

video.addEventListener('timeupdate', () => {
    progress.value = (video.currentTime / video.duration) * 100;
});

progress.addEventListener('input', () => {
    const time = (progress.value / 100) * video.duration;
    video.currentTime = time;
});