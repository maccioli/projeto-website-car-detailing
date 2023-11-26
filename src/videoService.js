const videos = document.querySelectorAll('.videoPlay');
const btnShows = document.querySelectorAll('.card__btn');

function handleVideoInteraction(video, action) {
    if (action === 'play') {
        video.style.opacity = '1';
        video.play();
    } else if (action === 'pause') {
        video.style.opacity = '0.5';
        video.pause();
    }
}

btnShows.forEach((btnShow, index) => {
    const video = videos[index];

    btnShow.addEventListener('click', function () {
        if (video.paused) {
            handleVideoInteraction(video, 'play');
        } else {
            handleVideoInteraction(video, 'pause');
        }
    });

    video.addEventListener('mouseover', function () {
        handleVideoInteraction(video, 'play');
    });

    video.addEventListener('mouseout', function () {
        handleVideoInteraction(video, 'pause');
    });

    video.addEventListener('touchstart', function () {
        handleVideoInteraction(video, 'play');
    });

    video.addEventListener('touchend', function () {
        handleVideoInteraction(video, 'pause');
    });
});
