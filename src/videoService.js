const showVideo = document.getElementById('main-video');


showVideo.addEventListener('mouseover', function () {
    if (showVideo.paused) {
        showVideo.style.opacity = '100%';
        showVideo.play();
    }
});

showVideo.addEventListener('mouseout', function () {
    if (showVideo.play) {
        showVideo.style.opacity = '50%';
        showVideo.pause();
    }
});
