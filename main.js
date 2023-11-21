const X = document.getElementById('main-video');
const showVideo = document.getElementById('wrapper');


X.addEventListener('mouseover', function () {
    if (X.paused) {
        X.style.opacity = '100%';
        X.play();
    }
});

X.addEventListener('mouseout', function () {
    if (X.play) {
        X.style.opacity = '50%';
        X.pause();
    }
});
